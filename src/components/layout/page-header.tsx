import React from "react";

interface PageHeaderProps {
   title: string;
   subtitle: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
   return (
      <div className="mb-6">
         <h1>{title}</h1>
         <p className="text-muted-foreground text-lg">{subtitle}</p>
      </div>
   );
};

export default PageHeader;
