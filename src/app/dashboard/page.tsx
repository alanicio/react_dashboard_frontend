import React from "react";

const DashboardPage = () => {
   return (
      <div className="flex">
         {Array.from({ length: 30 }).map((_, index) => (
            <div key={index}>Elemento {index + 1}</div>
         ))}
      </div>
   );
};

export default DashboardPage;
