"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import DisplayBarChart from "../charts/bar-chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartDataItem, ChartElementType } from "@/types/charts";

interface MainChart {
   className: string;
   chartElements: ChartElementType[];
   data: ChartDataItem[];
}

const BarChartSelector = ({ className, chartElements, data }: MainChart) => {
   const [selectedChartElement, setSelectedChartElement] = useState(chartElements[0]);
   return (
      <Card className={className}>
         <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Mock Data</CardTitle>
            <Select
               value={selectedChartElement.key}
               onValueChange={(newValue) =>
                  setSelectedChartElement(
                     chartElements.find((chartElement) => chartElement.key === newValue) || chartElements[0]
                  )
               }
            >
               <SelectTrigger className="w-[180px]">
                  <SelectValue />
               </SelectTrigger>
               <SelectContent>
                  {chartElements.map((chartElement) => (
                     <SelectItem value={chartElement.key} key={chartElement.key}>
                        {chartElement.key}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         </CardHeader>
         <CardContent className="w-full h-[25vh]">
            <DisplayBarChart chartElements={[selectedChartElement]} data={data} />
         </CardContent>
      </Card>
   );
};

export default BarChartSelector;
