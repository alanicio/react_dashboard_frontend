import MainChart from "./_components/main-chart";
import BarChartSelector from "./_components/bar-chart-selector";
import { cn } from "@/lib/utils";
import React from "react";
import { data, chartElements } from "@/mock-data/area-data";
import MetricCardsCol from "./_components/metric-cards-col";
import PieChartCard from "./_components/pie-chart-card";
import TableCard from "./_components/table-card";
import InsightCard from "./_components/insight-card";

const GAP_CLASS_NAME = "sm:gap-8 gap-6";
const ROW_CLASS_NAME = `grid xl:grid-cols-4 2xl:grid-cols-6`;

const DashboardPage = () => {
   return (
      <div className={cn("grid grid-cols-1 gap", GAP_CLASS_NAME)}>
         <div className={cn(ROW_CLASS_NAME, GAP_CLASS_NAME)}>
            <MainChart className={cn("xl:col-span-4")} chartElements={chartElements} data={data} />
            <MetricCardsCol
               className={cn(`grid xl:grid-cols-2 xl:col-span-2 2xl:grid-cols-1 2xl:col-span-1`, GAP_CLASS_NAME)}
            />
            <InsightCard className="xl:col-span-2 2xl:col-span-1" />
         </div>
         <div className={cn(ROW_CLASS_NAME, GAP_CLASS_NAME)}>
            <BarChartSelector className="col-span-2" chartElements={chartElements} data={data} />
            <TableCard />
            <PieChartCard className="col-span-2" />
         </div>
      </div>
   );
};

export default DashboardPage;
