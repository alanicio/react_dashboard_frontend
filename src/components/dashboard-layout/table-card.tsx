"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const GridExample = () => {
   // Row Data: The data to be displayed.
   const [rowData, setRowData] = useState([
      { make: "Tesla", model: "Model Y", price: 64950, electric: true },
      { make: "Ford", model: "F-Series", price: 33850, electric: false },
      { make: "Toyota", model: "Corolla", price: 29600, electric: false },
      { make: "Mercedes", model: "EQA", price: 48890, electric: true },
      { make: "Fiat", model: "500", price: 15774, electric: false },
      { make: "Nissan", model: "Juke", price: 20675, electric: false },
      { make: "Mazda", model: "Sedan 3", price: 33500, electric: false },
   ]);

   // Column Definitions: Defines & controls grid columns.
   const [colDefs, setColDefs] = useState([
      { field: "make" },
      { field: "model" },
      { field: "price" },
      { field: "electric" },
   ]);

   const defaultColDef = {
      flex: 1,
   };

   // Container: Defines the grid's theme & dimensions.
   return (
      <div style={{ width: "100%", height: "100%" }}>
         <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} />
      </div>
   );
};

const TableCard = () => {
   return (
      <Card className="p-0 col-span-2">
         <CardContent className="px-0 w-full h-[34vh]">
            <GridExample />
         </CardContent>
      </Card>
   );
};

export default TableCard;
