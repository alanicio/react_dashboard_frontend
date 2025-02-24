import DisplayAreaChart from "@/components/charts/area-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { areas, data } from "@/mock-data/area-data";
import React from "react";

const MainChart = ({ className }: { className: string }) => {
   return (
      <Card className={className}>
         <CardHeader>
            <CardTitle>Mock Data</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
         </CardHeader>
         <CardContent className="w-full h-[20vh]">
            <DisplayAreaChart chartElement={areas} data={data} />
         </CardContent>
      </Card>
   );
};

export default MainChart;
