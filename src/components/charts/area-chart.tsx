"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { AreaBarChartData, AreaBarChartElementType } from "@/types/charts";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const DisplayAreaChart = ({ chartElements, data }: AreaBarChartData) => {
   const isMobile = useIsMobile();
   return (
      <ResponsiveContainer width="100%" height="100%">
         <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
               top: 10,
               right: isMobile ? 10 : 30,
               left: 0,
               bottom: 0,
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" fontSize={isMobile ? 10 : 12} />
            <YAxis fontSize={isMobile ? 10 : 12} />
            <Tooltip />
            {chartElements.map((area: AreaBarChartElementType) => (
               <Area
                  type="monotone"
                  dataKey={area.key}
                  key={area.key}
                  stackId="1"
                  stroke={area.stroke}
                  fill={area.fill}
               />
            ))}
         </AreaChart>
      </ResponsiveContainer>
   );
};

export default DisplayAreaChart;
