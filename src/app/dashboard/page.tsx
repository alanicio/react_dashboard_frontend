import MainChart from "@/components/dashboard-layout/main-chart";
import BarChartSelector from "@/components/dashboard-layout/bar-chart-selector";
import { cn } from "@/lib/utils";
import React from "react";
import { data, chartElements } from "@/mock-data/area-data";
import MetricCardsCol from "@/components/dashboard-layout/metric-cards-col";
import PieChartCard from "@/components/dashboard-layout/pie-chart-card";
import TableCard from "@/components/dashboard-layout/table-card";
import InsightCard from "@/components/dashboard-layout/insight-card";

const DashboardPage = () => {
   const gapClassName = "gap-8";
   const rowClassName = "grid grid-cols-6";
   return (
      <div className={cn("grid grid-cols-1 gap", gapClassName)}>
         <div className={cn(rowClassName, gapClassName)}>
            <MainChart className="col-span-4" chartElements={chartElements} data={data} />
            <MetricCardsCol className={gapClassName} />
            <InsightCard />
         </div>
         <div className={cn(rowClassName, gapClassName)}>
            <BarChartSelector className="col-span-2" chartElements={chartElements} data={data} />
            <TableCard />
            <PieChartCard className="col-span-2" />
         </div>
      </div>
   );
};

export default DashboardPage;
