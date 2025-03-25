import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface InsightCardProps {
   className?: string;
}

const InsightCard = ({ className }: InsightCardProps) => {
   return (
      <Card className={cn("py-5 px-0 font-insight", className)}>
         <CardHeader>
            <CardTitle className="text-2xl px-3">Insight</CardTitle>
         </CardHeader>
         <CardContent className="px-0 py-0 w-full h-[37.5vh]">
            <ScrollArea className="h-full w-full px-8">
               <p className="text-xl italic text-justify px-1">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                  the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                  publishing software like Aldus PageMaker including versions of Lorem Ipsum
               </p>
            </ScrollArea>
         </CardContent>
      </Card>
   );
};

export default InsightCard;
