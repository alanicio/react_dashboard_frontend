"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import DisplayPieChart from "@/components/charts/pie-chart";

const PieChartCard = ({ className }: { className?: string }) => {
   return (
      <Card className={className}>
         <CardHeader>
            <CardTitle>Mock Data</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
         </CardHeader>
         <CardContent className="w-full h-[25vh]">
            <DisplayPieChart />
         </CardContent>
      </Card>
   );
};

export default PieChartCard;
