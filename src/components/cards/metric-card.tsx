import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon, TrendingDown, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const variationClasses = {
   positive: "text-green-500",
   negative: "text-red-500",
};

const variationIcons = {
   positive: TrendingUp,
   negative: TrendingDown,
};

interface MetricCardProps {
   title: string;
   Icon: LucideIcon;
   value: string;
   percengtageChange: number;
}

const MetricCard = ({ title, Icon, value, percengtageChange }: MetricCardProps) => {
   const variation = percengtageChange > 0 ? "positive" : "negative";
   const VariationIcon = variationIcons[variation];
   return (
      <Card>
         <CardHeader>
            <CardTitle className="flex items-center text-2xl text-muted-foreground font-normal">
               <Icon className="mr-2" /> {title}
            </CardTitle>
         </CardHeader>
         <CardContent>
            <p className="text-[36px] font-semibold">{value}</p>
         </CardContent>
         <CardFooter>
            <CardDescription className={cn("flex text-base items-center", variationClasses[variation])}>
               Since Last month {percengtageChange}%<VariationIcon className="ml-2 h-4 w-4" />
            </CardDescription>
         </CardFooter>
      </Card>
   );
};

export default MetricCard;
