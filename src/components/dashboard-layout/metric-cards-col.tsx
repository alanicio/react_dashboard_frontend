import React from "react";
import MetricCard from "@/components/cards/metric-card";
import { cn } from "@/lib/utils";
import { DollarSign, ShoppingCart } from "lucide-react";

interface MetricCardsColProps {
   className?: string;
}

const MetricCardsCol = ({ className }: MetricCardsColProps) => {
   return (
      <div className={cn("grid grid-cols-1", className)}>
         <MetricCard Icon={ShoppingCart} title="Sales" value="$45k USD" percengtageChange={12} />
         <MetricCard Icon={DollarSign} title="Revenue" value="$20k USD" percengtageChange={-12} />
      </div>
   );
};

export default MetricCardsCol;
