import MainChart from "@/components/dashboard-layout/main-chart";
import SecondaryChart from "@/components/dashboard-layout/secondary-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

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
            <MainChart className="col-span-4" />
            <Card className="p-4">
               <CardTest />
            </Card>
            <Card className="p-3">
               <CardTest />
            </Card>
         </div>
         <div className={cn(rowClassName, gapClassName)}>
            <SecondaryChart className="col-span-2" />
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
