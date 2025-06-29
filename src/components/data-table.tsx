"use client";

import { ColumnDef, flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from "@tanstack/react-table";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "./ui/input";

interface DataTableProps<TData, TValue> {
   columns: ColumnDef<TData, TValue>[];
   data: TData[];
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
   const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      columnResizeMode: "onChange",
      getPaginationRowModel: getPaginationRowModel(),
   });
   const pageCount = table.getPageCount();
   const currentPage = table.getState().pagination.pageIndex;
   return (
      <div>
         <div className="rounded-md border">
            <Table className="table-fixed">
               <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                     <TableRow key={headerGroup.id}>
                        {headerGroup.headers.map((header) => {
                           return (
                              <TableHead key={header.id} style={{ width: header.getSize() }}>
                                 {header.isPlaceholder
                                    ? null
                                    : flexRender(header.column.columnDef.header, header.getContext())}
                              </TableHead>
                           );
                        })}
                     </TableRow>
                  ))}
               </TableHeader>
               <TableBody>
                  {table.getRowModel().rows?.length ? (
                     table.getRowModel().rows.map((row) => (
                        <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                           {row.getVisibleCells().map((cell) => (
                              <TableCell key={cell.id} style={{ width: cell.column.getSize() }}>
                                 {flexRender(cell.column.columnDef.cell, cell.getContext())}
                              </TableCell>
                           ))}
                        </TableRow>
                     ))
                  ) : (
                     <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                           No results.
                        </TableCell>
                     </TableRow>
                  )}
               </TableBody>
            </Table>
         </div>
         <Pagination {...{ ...table, pageCount, currentPage }} />
      </div>
   );
}

interface PaginationProps {
   pageCount: number;
   currentPage: number;
   nextPage: () => void;
   getCanNextPage: () => boolean;
   previousPage: () => void;
   getCanPreviousPage: () => boolean;
   setPageIndex: (index: number) => void;
}

const Pagination = ({
   pageCount,
   currentPage,
   nextPage,
   getCanNextPage,
   previousPage,
   getCanPreviousPage,
   setPageIndex,
}: PaginationProps) => (
   <div className="flex items-center justify-center space-x-4 py-4 w-full mt-4">
      <Button variant="outline" size="sm" onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
         Previous
      </Button>
      {Array.from({ length: pageCount > 10 ? 5 : pageCount }, (_, index) => (
         <Button
            key={index}
            size="sm"
            variant={index === currentPage ? "default" : "outline"}
            onClick={() => setPageIndex(index)}
         >
            {index + 1}
         </Button>
      ))}
      {pageCount > 10 && (
         <Popover>
            <PopoverTrigger asChild>
               <Button key="custom number" variant="outline" size="sm">
                  ...
               </Button>
            </PopoverTrigger>
            <PopoverContent>
               <form
                  onSubmit={(e) => {
                     e.preventDefault();
                     setPageIndex(parseInt(e.currentTarget.customPage.value) - 1);
                  }}
               >
                  <Input type="number" name="customPage" min={1} max={pageCount} defaultValue={currentPage + 1} />
               </form>
            </PopoverContent>
         </Popover>
      )}
      {pageCount > 10 && (
         <>
            {Array.from({ length: 3 }, (_, index) => {
               const pageNumber = pageCount - 3 + index;
               return (
                  <Button
                     key={pageNumber}
                     variant={pageNumber === currentPage ? "default" : "outline"}
                     size="sm"
                     onClick={() => setPageIndex(pageNumber)}
                  >
                     {pageNumber + 1}
                  </Button>
               );
            })}
         </>
      )}
      <Button variant="outline" size="sm" onClick={() => nextPage()} disabled={!getCanNextPage()}>
         Next
      </Button>
   </div>
);
