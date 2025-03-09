"use client";

import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
   { name: "Group A", value: 400 },
   { name: "Group B", value: 300 },
   { name: "Group C", value: 300 },
   { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
   const x = cx + radius * Math.cos(-midAngle * RADIAN);
   const y = cy + radius * Math.sin(-midAngle * RADIAN);

   return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
         {`${(percent * 100).toFixed(0)}%`}
      </text>
   );
};

const DisplayPieChart = () => {
   return (
      <ResponsiveContainer width="100%" height="100%">
         <PieChart width={250} height={250}>
            <Pie
               data={data}
               cx="50%"
               cy="50%"
               labelLine={false}
               label={renderCustomizedLabel}
               outerRadius={100}
               fill="#8884d8"
               dataKey="value"
            >
               {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
               ))}
            </Pie>
            <Legend layout="vertical" verticalAlign="middle" align="right" />
            <Tooltip />
         </PieChart>
      </ResponsiveContainer>
   );
};

export default DisplayPieChart;
