"use client";

import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { useIncidentContext } from "./incident-context";

interface IncidentsChartProps {
  chartData: {
    date: string;
    minor: number;
    moderate: number;
    severe: number;
  }[];
}

export function IncidentsChart({ chartData }: IncidentsChartProps) {
  const { getFilteredChartData } = useIncidentContext();

  // Apply filters to chart data
  const filteredChartData = getFilteredChartData(chartData);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={filteredChartData}>
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <Tooltip
          contentStyle={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
          }}
          labelStyle={{ color: "#1e293b" }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="minor"
          stroke="#facc15"
          strokeWidth={2}
          dot={{ fill: "#facc15" }}
        />
        <Line
          type="monotone"
          dataKey="moderate"
          stroke="#f97316"
          strokeWidth={2}
          dot={{ fill: "#f97316" }}
        />
        <Line
          type="monotone"
          dataKey="severe"
          stroke="#ef4444"
          strokeWidth={2}
          dot={{ fill: "#ef4444" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
