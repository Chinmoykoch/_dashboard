"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  // ChartContainer,
  // ChartTooltip,
  
} from "@/components/ui/chart"

// // Description for the chart
// export const description = "An interactive bar chart"

// Sample chart data
const chartData = [
  { date: "2024-04-01", desktop: 222, mobile: 150 },
  { date: "2024-04-02", desktop: 97, mobile: 180 },
  { date: "2024-04-03", desktop: 167, mobile: 120 },
  { date: "2024-04-04", desktop: 242, mobile: 260 },
  { date: "2024-04-05", desktop: 373, mobile: 290 },
  { date: "2024-04-06", desktop: 301, mobile: 340 },
  // Add the remaining dates and data points here...
]

// Configuration for chart colors and labels
const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "#8884d8", // Specific color for desktop data (purple)
  },
  mobile: {
    label: "Mobile",
    color: "#82ca9d", // Specific color for mobile data (green)
  },
} satisfies ChartConfig

// Main chart component
export default function Chart() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("desktop")

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5">
          <CardTitle className="text-2xl font-semibold">
            Crimes Analysis
          </CardTitle>
          {/* <CardDescription>{description}</CardDescription> */}
        </div>
      </CardHeader>

      <CardContent className="p-6">
        {/* Responsive Container for chart */}
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<ChartTooltipContent />} />
            {/* Bar for Desktop */}
            <Bar dataKey="desktop" fill={chartConfig.desktop.color} />
            {/* Bar for Mobile */}
            <Bar dataKey="mobile" fill={chartConfig.mobile.color} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

// Custom Tooltip content
function ChartTooltipContent({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white shadow-md p-3 rounded-md">
        <p className="label font-semibold">{`Date : ${label}`}</p>
        <p className="intro">{`Desktop : ${payload[0].value}`}</p>
        <p className="intro">{`Mobile : ${payload[1].value}`}</p>
      </div>
    )
  }

  return null
}
