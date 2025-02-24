import React from "react";

const DashboardPage = () => {
   return (
      <div>
         <div className="flex">
            {Array.from({ length: 30 }).map((_, index) => (
               <div key={index}>Elemento {index + 1}</div>
            ))}
         </div>
         {Array.from({ length: 100 }).map((_, index) => (
            <div key={index}>Elemento {index + 1}</div>
         ))}
      </div>
   );
};

export default DashboardPage;
