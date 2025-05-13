/**
 * ThingSpeak Incident Simulation
 *
 * This file simulates ThingSpeak API for incident data.
 * In a real implementation, you would make actual API calls to ThingSpeak.
 */

import type { Severity } from "@/lib/generated/prisma";

// Define the structure of incident data from ThingSpeak
export interface ThingSpeakIncidentData {
  elementId: string; // Unique identifier for the incident
  latitude: string;
  longitude: string;
  tiltX: number; // Tilt values to calculate severity
  tiltY: number;
  tiltZ: number;
  timestamp: Date;
  processed: boolean; // Flag to track if this incident has been processed
}

// Store for simulated incidents
let simulatedIncidents: ThingSpeakIncidentData[] = [];

// Function to simulate fetching incident data from ThingSpeak
export async function fetchIncidentData(): Promise<ThingSpeakIncidentData[]> {
  // In a real implementation, you would make an API call to ThingSpeak
  // For simulation, we'll randomly generate incidents

  // 10% chance of generating a new incident
  if (Math.random() < 0.1 && simulatedIncidents.length < 10) {
    generateRandomIncident();
  }

  return simulatedIncidents.filter((incident) => !incident.processed);
}

// Function to mark an incident as processed
export function markIncidentAsProcessed(elementId: string): void {
  const incident = simulatedIncidents.find(
    (inc) => inc.elementId === elementId
  );
  if (incident) {
    incident.processed = true;
  }
}

// Function to generate a random incident
function generateRandomIncident(): void {
  // Base coordinates (Kampala, Uganda)
  const baseLat = 0.347596;
  const baseLng = 32.58252;

  // Random offset for coordinates
  const latOffset = (Math.random() - 0.5) * 0.05;
  const lngOffset = (Math.random() - 0.5) * 0.05;

  // Random tilt values
  // Higher absolute values indicate more severe incidents
  const tiltX = (Math.random() - 0.5) * 180;
  const tiltY = (Math.random() - 0.5) * 180;
  const tiltZ = (Math.random() - 0.5) * 180;

  const newIncident: ThingSpeakIncidentData = {
    elementId: `ELEM-${Math.floor(Math.random() * 10000)}`,
    latitude: (baseLat + latOffset).toFixed(6),
    longitude: (baseLng + lngOffset).toFixed(6),
    tiltX,
    tiltY,
    tiltZ,
    timestamp: new Date(),
    processed: false,
  };

  simulatedIncidents.push(newIncident);

  // Keep only the last 20 incidents
  if (simulatedIncidents.length > 20) {
    simulatedIncidents = simulatedIncidents.slice(-20);
  }
}

// Function to calculate severity based on tilt values
export function calculateSeverity(
  tiltX: number,
  tiltY: number,
  tiltZ: number
): Severity {
  // Calculate the magnitude of the tilt
  const tiltMagnitude = Math.sqrt(
    tiltX * tiltX + tiltY * tiltY + tiltZ * tiltZ
  );

  // Determine severity based on tilt magnitude
  if (tiltMagnitude > 120) {
    return "severe";
  } else if (tiltMagnitude > 60) {
    return "moderate";
  } else {
    return "minor";
  }
}

// Function to generate description based on tilt values and severity
export function generateDescription(
  tiltX: number,
  tiltY: number,
  tiltZ: number,
  severity: Severity
): string {
  const tiltMagnitude = Math.sqrt(
    tiltX * tiltX + tiltY * tiltY + tiltZ * tiltZ
  );

  // Base descriptions by severity
  const severeDescriptions = [
    "Severe impact detected, possible collision",
    "Major crash detected, immediate attention required",
    "Critical incident: Helmet detected significant impact",
    "Severe accident detected, emergency response advised",
    "High-impact collision detected",
  ];

  const moderateDescriptions = [
    "Moderate impact detected, possible fall",
    "Unusual movement pattern detected, potential accident",
    "Helmet detected moderate impact, rider may need assistance",
    "Potential accident: Moderate forces detected",
    "Rider may have fallen, moderate impact recorded",
  ];

  const minorDescriptions = [
    "Minor impact detected, rider may have stumbled",
    "Slight unusual movement detected",
    "Minor incident: Helmet detected small impact",
    "Slight disturbance in riding pattern",
    "Minor irregularity detected in helmet position",
  ];

  // Select a random description based on severity
  let descriptions;
  switch (severity) {
    case "severe":
      descriptions = severeDescriptions;
      break;
    case "moderate":
      descriptions = moderateDescriptions;
      break;
    default:
      descriptions = minorDescriptions;
  }

  return descriptions[Math.floor(Math.random() * descriptions.length)];
}

// Reset all simulated incidents (for testing)
export function resetSimulatedIncidents(): void {
  simulatedIncidents = [];
}
