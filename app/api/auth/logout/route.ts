import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("smc_session_token");
  return NextResponse.json({ success: true });
}
