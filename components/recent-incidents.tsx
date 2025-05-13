"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AlertCircle, AlertOctagon, AlertTriangle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import type { Incident, Rider, Helmet } from "@/lib/generated/prisma";

const incidentStyles = {
  minor: {
    bg: "bg-yellow-100",
    icon: AlertTriangle,
    iconColor: "text-yellow-500",
    text: "text-yellow-800",
  },
  moderate: {
    bg: "bg-orange-100",
    icon: AlertCircle,
    iconColor: "text-orange-500",
    text: "text-orange-800",
  },
  severe: {
    bg: "bg-red-100",
    icon: AlertOctagon,
    iconColor: "text-red-500",
    text: "text-red-800",
  },
};

interface IncidentItemProps {
  incident: Incident & {
    rider: Rider;
    helmet: Helmet;
  };
}

function IncidentItem({ incident }: IncidentItemProps) {
  const style = incidentStyles[incident.severity];
  const Icon = style.icon;
  const timeAgo = formatDistanceToNow(new Date(incident.date), {
    addSuffix: true,
  });

  return (
    <div
      className={`flex flex-col sm:flex-row items-start sm:items-center p-4 rounded-lg ${style.bg}`}
    >
      <Avatar className="h-10 w-10">
        <AvatarFallback>
          {incident.rider.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="mt-2 sm:mt-0 sm:ml-4 flex-1">
        <p className="text-sm font-medium leading-none">
          {incident.rider.name}
        </p>
        <p className="text-sm text-muted-foreground">
          {incident.helmet.helmetId}
        </p>
        <p className="text-xs text-muted-foreground mt-1">{timeAgo}</p>
      </div>
      <div className={`mt-2 sm:mt-0 flex items-center ${style.text}`}>
        <Icon className={`h-5 w-5 mr-1 ${style.iconColor}`} />
        <span className="text-sm font-medium capitalize">
          {incident.severity}
        </span>
      </div>
    </div>
  );
}

interface RecentIncidentsProps {
  incidents: (Incident & {
    rider: Rider;
    helmet: Helmet;
  })[];
}

export function RecentIncidents({ incidents }: RecentIncidentsProps) {
  if (incidents.length === 0) {
    return (
      <div className="text-center py-6 text-muted-foreground">
        No recent incidents
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {incidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
}
