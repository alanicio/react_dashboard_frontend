"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useState } from "react";
import DisplayBarChart from "@/components/charts/bar-chart";
import { ChartDataItem, ChartElementType } from "@/types/charts";
import InputSelect from "@/components/inputs/input-select";

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
            <InputSelect
               value={selectedChartElement.key}
               onChange={(newValue) =>
                  setSelectedChartElement(
                     chartElements.find((chartElement) => chartElement.key === newValue) || chartElements[0]
                  )
               }
               options={chartElements.map((chartElement) => ({ value: chartElement.key, label: chartElement.key }))}
            />
         </CardHeader>
         <CardContent className="w-full h-[25vh]">
            <DisplayBarChart chartElements={[selectedChartElement]} data={data} />
         </CardContent>
      </Card>
   );
};

export default BarChartSelector;
