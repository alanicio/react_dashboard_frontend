"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { areas, data } from "@/mock-data/area-data";
import React, { useState } from "react";
import DisplayBarChart from "../charts/bar-chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SecondaryChart = ({ className }: { className: string }) => {
   const [selectedArea, setSelectedArea] = useState(areas[0]);
   return (
      <Card className={className}>
         <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Mock Data</CardTitle>
            <Select
               value={selectedArea.key}
               onValueChange={(newValue) => setSelectedArea(areas.find((area) => area.key === newValue))}
            >
               <SelectTrigger className="w-[180px]">
                  <SelectValue />
               </SelectTrigger>
               <SelectContent>
                  {areas.map((area) => (
                     <SelectItem value={area.key} key={area.key}>
                        {area.key}
                     </SelectItem>
                  ))}
               </SelectContent>
            </Select>
         </CardHeader>
         <CardContent className="w-full h-[25vh]">
            <DisplayBarChart chartElement={[selectedArea]} data={data} />
         </CardContent>
      </Card>
   );
};

export default SecondaryChart;
