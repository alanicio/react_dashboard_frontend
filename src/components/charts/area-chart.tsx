"use client";

import { ChartData, ChartProps } from "@/types/charts";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const DisplayAreaChart = ({ chartElement, data }: ChartData) => {
   return (
      <ResponsiveContainer width="100%" height="100%">
         <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
               top: 10,
               right: 30,
               left: 0,
               bottom: 0,
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            {chartElement.map((area: ChartProps) => (
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
