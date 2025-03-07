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
         <MetricCard Icon={ShoppingCart} title="Sales" value="$450k USD" percengtageChange={12} />
         <MetricCard Icon={DollarSign} title="Revenue" value="$180k USD" percengtageChange={-12} />
      </div>
   );
};

export default MetricCardsCol;
