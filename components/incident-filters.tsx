"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { AlertTriangle, AlertCircle, AlertOctagon, X } from "lucide-react";
import { useIncidentContext } from "./incident-context";

export function IncidentFilters() {
  const { filters, updateSeverityFilter, updateTimePeriodFilter } =
    useIncidentContext();

  // Get active filters for display
  const activeFilters = [];
  if (filters.severity.minor)
    activeFilters.push({
      type: "severity",
      value: "minor",
      label: "Minor Incidents",
    });
  if (filters.severity.moderate)
    activeFilters.push({
      type: "severity",
      value: "moderate",
      label: "Moderate Incidents",
    });
  if (filters.severity.severe)
    activeFilters.push({
      type: "severity",
      value: "severe",
      label: "Severe Incidents",
    });

  let timePeriodLabel = "";
  switch (filters.timePeriod) {
    case "today":
      timePeriodLabel = "Today";
      break;
    case "week":
      timePeriodLabel = "Past Week";
      break;
    case "month":
      timePeriodLabel = "Past Month";
      break;
  }

  if (timePeriodLabel) {
    activeFilters.push({
      type: "timePeriod",
      value: filters.timePeriod,
      label: timePeriodLabel,
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-4">Severity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="severity-minor"
              checked={filters.severity.minor}
              onCheckedChange={(checked) =>
                updateSeverityFilter("minor", checked === true)
              }
            />
            <Label htmlFor="severity-minor" className="flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2 text-yellow-500" />
              Minor
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="severity-moderate"
              checked={filters.severity.moderate}
              onCheckedChange={(checked) =>
                updateSeverityFilter("moderate", checked === true)
              }
            />
            <Label htmlFor="severity-moderate" className="flex items-center">
              <AlertCircle className="w-4 h-4 mr-2 text-orange-500" />
              Moderate
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="severity-severe"
              checked={filters.severity.severe}
              onCheckedChange={(checked) =>
                updateSeverityFilter("severe", checked === true)
              }
            />
            <Label htmlFor="severity-severe" className="flex items-center">
              <AlertOctagon className="w-4 h-4 mr-2 text-red-500" />
              Severe
            </Label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Time Period</h3>
        <RadioGroup
          value={filters.timePeriod}
          onValueChange={(value) => updateTimePeriodFilter(value as any)}
          className="space-y-3"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="today" id="today" />
            <Label htmlFor="today">Today</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="week" id="week" />
            <Label htmlFor="week">Past Week</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="month" id="month" />
            <Label htmlFor="month">Past Month</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">Active Filters</h3>
        <div className="flex flex-wrap gap-2">
          {activeFilters.map((filter) => (
            <Badge
              key={`${filter.type}-${filter.value}`}
              variant="secondary"
              className="flex items-center"
            >
              {filter.label}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 ml-2 hover:bg-transparent"
                onClick={() => {
                  if (filter.type === "severity") {
                    updateSeverityFilter(filter.value as any, false);
                  }
                }}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}

          {activeFilters.length === 0 && (
            <p className="text-sm text-gray-500">No active filters</p>
          )}
        </div>
      </div>
    </div>
  );
}
