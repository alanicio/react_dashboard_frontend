import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const CardTest = () => (
   <>
      <CardHeader>
         <CardTitle>Create project</CardTitle>
         <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">Card Footer</CardFooter>
   </>
);

const DashboardPage = () => {
   return (
      <div className="grid grid-cols-1 gap-4">
         <div className="grid grid-cols-7 gap-4">
            <Card className="p-4 col-span-4">
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
