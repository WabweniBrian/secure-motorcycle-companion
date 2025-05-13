"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the filter types
export interface IncidentFilters {
  severity: {
    minor: boolean;
    moderate: boolean;
    severe: boolean;
  };
  timePeriod: "today" | "week" | "month";
}

// Define the context type
interface IncidentContextType {
  filters: IncidentFilters;
  setFilters: (filters: IncidentFilters) => void;
  updateSeverityFilter: (
    severity: keyof IncidentFilters["severity"],
    value: boolean
  ) => void;
  updateTimePeriodFilter: (timePeriod: IncidentFilters["timePeriod"]) => void;
  getFilteredChartData: (chartData: any[]) => any[];
  getFilteredIncidents: (incidents: any[]) => any[];
}

// Create the context
const IncidentContext = createContext<IncidentContextType | undefined>(
  undefined
);

// Create a provider component
export function IncidentProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<IncidentFilters>({
    severity: {
      minor: true,
      moderate: true,
      severe: true,
    },
    timePeriod: "week",
  });

  // Update severity filter
  const updateSeverityFilter = (
    severity: keyof IncidentFilters["severity"],
    value: boolean
  ) => {
    setFilters({
      ...filters,
      severity: {
        ...filters.severity,
        [severity]: value,
      },
    });
  };

  // Update time period filter
  const updateTimePeriodFilter = (
    timePeriod: IncidentFilters["timePeriod"]
  ) => {
    setFilters({
      ...filters,
      timePeriod,
    });
  };

  // Filter chart data based on current filters
  const getFilteredChartData = (chartData: any[]) => {
    return chartData.map((dataPoint) => {
      const filteredDataPoint = { ...dataPoint };

      // Apply severity filters
      if (!filters.severity.minor) filteredDataPoint.minor = 0;
      if (!filters.severity.moderate) filteredDataPoint.moderate = 0;
      if (!filters.severity.severe) filteredDataPoint.severe = 0;

      return filteredDataPoint;
    });
  };

  // Filter incidents based on current filters
  const getFilteredIncidents = (incidents: any[]) => {
    return incidents.filter((incident) => {
      // Apply severity filter
      if (
        !filters.severity[
          incident.severity as keyof IncidentFilters["severity"]
        ]
      ) {
        return false;
      }

      // Apply time period filter
      const incidentDate = new Date(incident.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const weekAgo = new Date();
      weekAgo.setDate(weekAgo.getDate() - 7);
      weekAgo.setHours(0, 0, 0, 0);

      const monthAgo = new Date();
      monthAgo.setMonth(monthAgo.getMonth() - 1);
      monthAgo.setHours(0, 0, 0, 0);

      switch (filters.timePeriod) {
        case "today":
          return incidentDate >= today;
        case "week":
          return incidentDate >= weekAgo;
        case "month":
          return incidentDate >= monthAgo;
        default:
          return true;
      }
    });
  };

  return (
    <IncidentContext.Provider
      value={{
        filters,
        setFilters,
        updateSeverityFilter,
        updateTimePeriodFilter,
        getFilteredChartData,
        getFilteredIncidents,
      }}
    >
      {children}
    </IncidentContext.Provider>
  );
}

// Create a hook to use the context
export function useIncidentContext() {
  const context = useContext(IncidentContext);
  if (context === undefined) {
    throw new Error(
      "useIncidentContext must be used within an IncidentProvider"
    );
  }
  return context;
}
