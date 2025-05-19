import type { Severity } from "@/lib/generated/prisma";
import { getProcessedEntryIds } from "./actions/incident";

export interface ThingSpeakIncidentData {
  elementId: string;
  latitude: string;
  longitude: string;
  speed: string;
  helmetId: string;
  severity: Severity | null;
  timestamp: Date;
  entryId: number;
}

export async function fetchIncidentData(): Promise<ThingSpeakIncidentData[]> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_THINGSPEAK_SMC_READ_API_KEY;
    const channelId = process.env.NEXT_PUBLIC_THING_SPEAK_SMC_CHANNEL_ID;

    if (!apiKey || !channelId) {
      throw new Error("Missing ThingSpeak API key or Incident Channel ID");
    }

    const url = `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=50`;
    let response;
    const MAX_RETRIES = 3;

    // Retry logic
    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        response = await fetch(url, { cache: "no-store" });
        if (response.ok) break;
        throw new Error(`HTTP error! status: ${response.status}`);
      } catch (error) {
        if (attempt === MAX_RETRIES) throw error;
        await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
      }
    }

    const data = await response!.json();
    const feeds = data.feeds || [];

    console.log("Fetched ThingSpeak incident data:", feeds);

    if (feeds.length === 0) {
      return [];
    }

    // Get processed entry IDs from Incident table
    const processedEntries = await getProcessedEntryIds();
    const processedEntryIds = new Set(processedEntries.map((e) => e.entryId));

    console.log("Processed entry IDs:", processedEntryIds);

    // Filter unprocessed feeds
    const incidents: ThingSpeakIncidentData[] = feeds
      .filter((feed: any) => !processedEntryIds.has(feed.entry_id))
      .map((feed: any) => ({
        elementId: `ELEM-${feed.entry_id}`,
        latitude: feed.field1 || "0.0",
        longitude: feed.field2 || "0.0",
        speed: feed.field3 || "0.0",
        helmetId: feed.field4 || "",
        severity: (feed.field5 as Severity) || null,
        timestamp: new Date(feed.created_at),
        entryId: feed.entry_id,
      }));

    console.log("Filtered incidents:", incidents);

    return incidents;
  } catch (error) {
    console.error("Error fetching ThingSpeak incident data:", error);
    return [];
  }
}

export function generateDescription(severity: Severity | null): string {
  const descriptions: Record<Severity, string[]> = {
    severe: [
      "Severe impact detected, possible collision",
      "Major crash detected, immediate attention required",
      "Critical incident: Significant impact recorded",
    ],
    moderate: [
      "Moderate impact detected, possible fall",
      "Potential accident: Moderate forces detected",
      "Rider may have fallen, moderate impact recorded",
    ],
    minor: [
      "Minor impact detected, rider may have stumbled",
      "Minor incident: Small impact recorded",
      "Slight disturbance in riding pattern",
    ],
  };

  const effectiveSeverity = severity || "minor";
  const options = descriptions[effectiveSeverity];
  return options[Math.floor(Math.random() * options.length)];
}
