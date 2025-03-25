"use client";

import DisplayAreaChart from "@/components/charts/area-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaBarChartDataItem, AreaBarChartElementType } from "@/types/charts";
import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";

interface MainChart {
   className: string;
   chartElements: AreaBarChartElementType[];
   data: AreaBarChartDataItem[];
}

const INITIAL_DISPLAY_RANGE = 6;

const MainChart = ({ className, chartElements, data }: MainChart) => {
   const [displayedRange, setDisplayedRange] = useState([
      0,
      data.length < INITIAL_DISPLAY_RANGE ? data.length - 1 : INITIAL_DISPLAY_RANGE - 1,
   ]);
   const dataToDisplay = data.slice(displayedRange[0], displayedRange[1] + 1);
   return (
      <Card className={className}>
         <CardHeader>
            <CardTitle>Mock Data</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
         </CardHeader>
         <CardContent className="w-full h-[38vh] flex flex-col justify-between">
            <div className="h-[90%]">
               <DisplayAreaChart chartElements={chartElements} data={dataToDisplay} />
            </div>
            <div className="w-full px-4 lg:w-[50%] lg:px-[60px] pb-2.5">
               <Slider
                  value={displayedRange}
                  onValueChange={setDisplayedRange}
                  max={data.length - 1}
                  step={1}
                  minStepsBetweenThumbs={1}
               />
            </div>
         </CardContent>
      </Card>
   );
};

export default MainChart;
