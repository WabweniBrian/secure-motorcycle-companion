"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  AlertCircle,
  AlertOctagon,
  MoreHorizontal,
  MapPin,
  Trash2,
  CheckCircle,
  Clock,
  Search,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { deleteIncident, updateIncidentStatus } from "@/lib/actions/incident";
import type { IncidentStatus, Severity } from "@/lib/generated/prisma";
import type { Incident, Rider, Helmet } from "@/lib/generated/prisma";
import { useIncidentContext } from "./incident-context";
import toast from "react-hot-toast";

type TIncident = Incident & {
  rider: Rider;
  helmet: Helmet;
};

interface IncidentsListProps {
  incidents: TIncident[];
}

function getSeverityIcon(severity: Severity) {
  switch (severity) {
    case "severe":
      return <AlertOctagon className="h-5 w-5 text-red-500" />;
    case "moderate":
      return <AlertCircle className="h-5 w-5 text-orange-500" />;
    case "minor":
      return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
    default:
      return <AlertTriangle className="h-5 w-5 text-gray-500" />;
  }
}

function getStatusBadgeColor(status: IncidentStatus) {
  switch (status) {
    case "active":
      return "bg-red-100 text-red-800 border-red-200";
    case "investigating":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "resolved":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
}

export function IncidentsList({ incidents }: IncidentsListProps) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedIncident, setSelectedIncident] = useState<
    (typeof incidents)[0] | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get filter functions from context
  const { getFilteredIncidents } = useIncidentContext();

  // Apply context filters first
  const contextFilteredIncidents = getFilteredIncidents(incidents);

  // Then apply search filter
  const filteredIncidents: TIncident[] = contextFilteredIncidents.filter(
    (incident) =>
      incident.incidentId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.rider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      incident.helmet.helmetId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle delete incident
  const handleDeleteIncident = async () => {
    if (!selectedIncident) return;

    setIsLoading(true);
    try {
      const result = await deleteIncident(selectedIncident.id);

      if (result.success) {
        toast.success("Incident deleted successfully");
        setIsDeleteDialogOpen(false);
      } else {
        toast.error((result.error as string) || "Failed to delete incident");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle update incident status
  const handleUpdateStatus = async (id: string, status: IncidentStatus) => {
    try {
      const result = await updateIncidentStatus(id, status);

      if (result.success) {
        toast.success(`Incident status updated to ${status}`);
      } else {
        toast.error(
          (result.error as string) || "Failed to update incident status"
        );
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex items-center py-4">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search incidents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-sm pl-8"
          />
        </div>
      </div>

      <div className="space-y-4 sm:space-y-8">
        {filteredIncidents.length > 0 ? (
          filteredIncidents.map((incident) => (
            <div
              key={incident.id}
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 bg-white rounded-lg p-4 border"
            >
              <div className="flex-shrink-0 self-start sm:self-center">
                {getSeverityIcon(incident.severity)}
              </div>

              <div className="flex-1 min-w-0 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-3">
                    <p className="text-sm font-medium text-gray-900">
                      {incident.incidentId}
                    </p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeColor(
                        incident.status
                      )}`}
                    >
                      {incident.status.charAt(0).toUpperCase() +
                        incident.status.slice(1)}
                    </span>
                  </div>
                  <time className="text-xs text-gray-500">
                    {new Date(incident.date).toLocaleString()}
                  </time>
                </div>

                <p className="text-sm text-gray-600">{incident.description}</p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarFallback>
                        {incident.rider.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    {incident.rider.name}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {incident.location || "Unknown Location"}
                  </div>
                  <div className="text-sm text-gray-500">
                    Helmet ID: {incident.helmet.helmetId}
                  </div>
                </div>
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="flex-shrink-0 self-end sm:self-start"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {incident.status !== "resolved" && (
                    <DropdownMenuItem
                      onClick={() =>
                        handleUpdateStatus(incident.id, "resolved")
                      }
                    >
                      <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                      Mark as Resolved
                    </DropdownMenuItem>
                  )}
                  {incident.status !== "investigating" &&
                    incident.status !== "resolved" && (
                      <DropdownMenuItem
                        onClick={() =>
                          handleUpdateStatus(incident.id, "investigating")
                        }
                      >
                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                        Mark as Investigating
                      </DropdownMenuItem>
                    )}
                  {incident.status !== "active" && (
                    <DropdownMenuItem
                      onClick={() => handleUpdateStatus(incident.id, "active")}
                    >
                      <AlertCircle className="h-4 w-4 mr-2 text-red-500" />
                      Mark as Active
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem
                    onClick={() => {
                      setSelectedIncident(incident);
                      setIsDeleteDialogOpen(true);
                    }}
                    className="text-red-600"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Incident
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-gray-500">
            {searchQuery
              ? "No incidents match your search"
              : "No incidents found"}
          </div>
        )}
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Delete Incident</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this incident? This action cannot
              be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteIncident}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
