import DisplayAreaChart from "@/components/charts/area-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartDataItem, ChartElementType } from "@/types/charts";
import React from "react";

interface MainChart {
   className: string;
   chartElements: ChartElementType[];
   data: ChartDataItem[];
}

const MainChart = ({ className, chartElements, data }: MainChart) => {
   return (
      <Card className={className}>
         <CardHeader>
            <CardTitle>Mock Data</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
         </CardHeader>
         <CardContent className="w-full h-[38vh]">
            <DisplayAreaChart chartElements={chartElements} data={data} />
         </CardContent>
      </Card>
   );
};

export default MainChart;
