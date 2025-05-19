import type { Severity } from "@/lib/generated/prisma";

// Define the structure of incident data from ThingSpeak
export interface ThingSpeakIncidentData {
  elementId: string; // Unique identifier for the incident
  latitude: string;
  longitude: string;
  speed: string; // Speed in meters/second
  helmetId: string; // Helmet ID from field4
  severity: Severity | null; // Severity from field5
  timestamp: Date;
  processed: boolean; // Flag to track if this incident has been processed
}

// Fetch incident data from ThingSpeak
export async function fetchIncidentData(): Promise<ThingSpeakIncidentData | null> {
  try {
    const apiKey = process.env.NEXT_PUBLIC_THINGSPEAK_SMC_READ_API_KEY;
    const channelId = process.env.NEXT_PUBLIC_THING_SPEAK_SMC_CHANNEL_ID;

    if (!apiKey || !channelId) {
      throw new Error("Missing ThingSpeak API key or Incident Channel ID");
    }

    const url = `https://api.thingspeak.com/channels/${channelId}/feeds.json?api_key=${apiKey}&results=20`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const feeds = data.feeds || [];

    if (feeds.length === 0) {
      return null; // No feeds available
    }

    // Take the latest feed (last in array, assuming ordered by created_at)
    const latestFeed = feeds[feeds.length - 1];

    return {
      elementId: `ELEM-${latestFeed.entry_id}`,
      latitude: latestFeed.field1 || "0.0",
      longitude: latestFeed.field2 || "0.0",
      speed: latestFeed.field3 || "0.0",
      helmetId: latestFeed.field4 || "",
      severity: (latestFeed.field5 as Severity) || null,
      timestamp: new Date(latestFeed.created_at),
      processed: true,
    };
  } catch (error) {
    console.error("Error fetching ThingSpeak incident data:", error);
    return null;
  }
}

// Generate description based on severity
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
