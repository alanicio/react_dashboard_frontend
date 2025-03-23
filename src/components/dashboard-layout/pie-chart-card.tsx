"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DisplayPieChart from "@/components/charts/pie-chart";

const DATA = [
   { name: "Group A", value: 400 },
   { name: "Group B", value: 300 },
   { name: "Group C", value: 300 },
   { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartCard = ({ className }: { className?: string }) => {
   return (
      <Card className={className}>
         <CardHeader>
            <CardTitle>Mock Data</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
         </CardHeader>
         <CardContent className="w-full h-[25vh]">
            <DisplayPieChart data={DATA} colors={COLORS} />
         </CardContent>
      </Card>
   );
};

export default PieChartCard;
