"use server";

import { revalidatePath } from "next/cache";

export async function updateThingSpeak(phone: string) {
  const apiKey = process.env.NEXT_PUBLIC_THINGSPEAK_SMC_PHONE_WRITE_API_KEY;

  if (!apiKey) {
    throw new Error("ThingSpeak write API key is missing");
  }

  const url = "https://api.thingspeak.com/update.json";
  const params = new URLSearchParams({
    api_key: apiKey,
    field1: phone,
  });

  try {
    const response = await fetch(url, {
      method: "POST",
      body: params.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.text();
    console.log("ThingSpeak update response:", data);
    revalidatePath("/"); // Revalidate the page if needed
    return { success: true, data };
  } catch (error: any) {
    console.error("Error updating ThingSpeak:", error);
    throw new Error(`Failed to update ThingSpeak: ${error.message}`);
  }
}
