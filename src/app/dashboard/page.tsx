import MainChart from "@/components/dashboard-layout/main-chart";
import BarChartSelector from "@/components/dashboard-layout/bar-chart-selector";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";
import { data, chartElements } from "@/mock-data/area-data";
import MetricCardsCol from "@/components/dashboard-layout/metric-cards-col";

const CardTest = () => (
   <>
      <h4>Test</h4>
   </>
);

const DashboardPage = () => {
   const gapClassName = "gap-8";
   const rowClassName = "grid grid-cols-6";
   return (
      <div className={cn("grid grid-cols-1 gap", gapClassName)}>
         <div className={cn(rowClassName, gapClassName)}>
            <MainChart className="col-span-4" chartElements={chartElements} data={data} />
            <MetricCardsCol className={gapClassName} />
            <Card className="p-3">
               <CardTest />
            </Card>
         </div>
         <div className={cn(rowClassName, gapClassName)}>
            <BarChartSelector className="col-span-2" chartElements={chartElements} data={data} />
            <Card className="p-4 col-span-2">
               <CardTest />
            </Card>
            <Card className="p-4 col-span-2">
               <CardTest />
            </Card>
         </div>
      </div>
   );
};

export default DashboardPage;
