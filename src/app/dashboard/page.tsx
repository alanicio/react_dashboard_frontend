import MainChart from "@/components/dashboard-layout/main-chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const CardTest = () => (
   <>
      <h4>Test</h4>
   </>
);

const DashboardPage = () => {
   return (
      <div className="grid grid-cols-1 gap-4">
         <div className="grid grid-cols-7 gap-4">
            <MainChart className="col-span-4" />
            <Card className="p-4">
               <CardTest />
            </Card>
            <Card className="p-4">
               <CardTest />
            </Card>
            <Card className="p-4">
               <CardTest />
            </Card>
         </div>
         <div className="grid grid-cols-7 gap-4">
            <Card className="p-4 col-span-2">
               <CardTest />
            </Card>
            <Card className="p-4 col-span-2">
               <CardTest />
            </Card>
            <Card className="p-4">
               <CardTest />
            </Card>
            <Card className="p-4 col-span-2">
               <CardTest />
            </Card>
         </div>
         <div className="grid grid-cols-7 gap-4">
            <Card className="p-4 col-span-2">
               <CardTest />
            </Card>
            <Card className="p-4">
               <CardTest />
            </Card>
            <Card className="p-4">
               <CardTest />
            </Card>
            <Card className="p-4">
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
