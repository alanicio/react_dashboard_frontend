"use client";

import { ChartData, ChartElementType } from "@/types/charts";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DisplayBarChart = ({ chartElements, data }: ChartData) => {
   return (
      <ResponsiveContainer width="100%" height="100%">
         <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
               top: 5,
               right: 30,
               left: 20,
               bottom: 5,
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Legend />
            {chartElements.map((bar: ChartElementType) => (
               <Bar dataKey={bar.key} key={bar.key} fill={bar.fill} />
            ))}
         </BarChart>
      </ResponsiveContainer>
   );
};

export default DisplayBarChart;
