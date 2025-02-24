import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { areas, data } from "@/mock-data/area-data";
import React from "react";
import DisplayBarChart from "../charts/bar-chart";

const SecondaryChart = ({ className }: { className: string }) => {
   return (
      <Card className={className}>
         <CardHeader>
            <CardTitle>Mock Data</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
         </CardHeader>
         <CardContent className="w-full h-[20vh]">
            <DisplayBarChart chartElement={areas} data={data} />
         </CardContent>
      </Card>
   );
};

export default SecondaryChart;
