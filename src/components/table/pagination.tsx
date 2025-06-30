import React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const getVisiblePages = ({ currentPageIndex, pageCount }: { currentPageIndex: number; pageCount: number }) => {
   if (pageCount < 10) {
      return Array.from({ length: pageCount }, (_, index) => index);
   }
   let start = 0;
   if (currentPageIndex > 3) {
      start = currentPageIndex - 3;
   }
   if (currentPageIndex + 3 >= pageCount) {
      start = pageCount - 7;
   }
   return Array.from({ length: 7 }, (_, index) => start + index);
};

interface PaginationProps {
   pageCount: number;
   currentPageIndex: number;
   nextPage: () => void;
   getCanNextPage: () => boolean;
   previousPage: () => void;
   getCanPreviousPage: () => boolean;
   setPageIndex: (index: number) => void;
}

const Pagination = ({
   pageCount,
   currentPageIndex,
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
      {getVisiblePages({ currentPageIndex, pageCount }).map((index) => (
         <Button
            key={index}
            size="sm"
            variant={index === currentPageIndex ? "default" : "outline"}
            onClick={() => setPageIndex(index)}
         >
            {index + 1}
         </Button>
      ))}
      {/* {Array.from({ length: pageCount > 10 ? 5 : pageCount }, (_, index) => (
         <Button
            key={index}
            size="sm"
            variant={index === currentPageIndex ? "default" : "outline"}
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
                  <Input type="number" name="customPage" min={1} max={pageCount} defaultValue={currentPageIndex + 1} />
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
                     variant={pageNumber === currentPageIndex ? "default" : "outline"}
                     size="sm"
                     onClick={() => setPageIndex(pageNumber)}
                  >
                     {pageNumber + 1}
                  </Button>
               );
            })}
         </>
      )} */}
      <Button variant="outline" size="sm" onClick={() => nextPage()} disabled={!getCanNextPage()}>
         Next
      </Button>
   </div>
);

const PaginationEllipsis = ({ setPageIndex, currentPageIndex, pageCount }: any) => (
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
            <Input type="number" name="customPage" min={1} max={pageCount} defaultValue={currentPageIndex + 1} />
         </form>
      </PopoverContent>
   </Popover>
);

export default Pagination;
