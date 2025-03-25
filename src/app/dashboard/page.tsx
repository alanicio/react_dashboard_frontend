import MainChart from "@/components/dashboard-layout/main-chart";
import BarChartSelector from "@/components/dashboard-layout/bar-chart-selector";
import { cn } from "@/lib/utils";
import React from "react";
import { data, chartElements } from "@/mock-data/area-data";
import MetricCardsCol from "@/components/dashboard-layout/metric-cards-col";
import PieChartCard from "@/components/dashboard-layout/pie-chart-card";
import TableCard from "@/components/dashboard-layout/table-card";
import InsightCard from "@/components/dashboard-layout/insight-card";

const MAX_GRID_GAP = 8;
const MAX_COLUMNS = 6;
const FULL_SIZE_BREAKPOINT = "1736px";

const DashboardPage = () => {
   const gapClassName = `gap-${MAX_GRID_GAP}`;
   const rowClassName = `grid min-[${FULL_SIZE_BREAKPOINT}]:grid-cols-${MAX_COLUMNS} xl:grid-cols-4`;
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
