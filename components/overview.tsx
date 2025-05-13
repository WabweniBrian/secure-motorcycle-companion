"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface OverviewProps {
  data: {
    name: string;
    total: number;
    month: number;
  }[];
}

export function Overview({ data }: OverviewProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
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
          formatter={(value: number) => [`${value} incidents`, "Total"]}
        />
        <Bar dataKey="total" fill="url(#colorGradient)" radius={[4, 4, 0, 0]} />
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#93c5fd" stopOpacity={0.8} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}
