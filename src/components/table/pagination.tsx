import React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

const getVisiblePages = ({ currentPageIndex, pageCount }: { currentPageIndex: number; pageCount: number }) => {
   if (pageCount < 11) {
      return Array.from({ length: pageCount }, (_, index) => index);
   }
   let start = 0;
   let length = 7;
   if (currentPageIndex > 4) {
      start = currentPageIndex - 3;
   }
   if (currentPageIndex <= 4) {
      length++;
   }
   if (currentPageIndex + 5 >= pageCount) {
      length++;
      start = pageCount - 8;
   }
   return Array.from({ length }, (_, index) => start + index);
};

interface BasicPaginationProps {
   pageCount: number;
   currentPageIndex: number;
   setPageIndex: (index: number) => void;
}

interface PaginationProps extends BasicPaginationProps {
   nextPage: () => void;
   getCanNextPage: () => boolean;
   previousPage: () => void;
   getCanPreviousPage: () => boolean;
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
      {pageCount > 10 && currentPageIndex > 4 && (
         <PaginationEllipsis setPageIndex={setPageIndex} currentPageIndex={currentPageIndex} pageCount={pageCount} />
      )}
      {getVisiblePages({ currentPageIndex, pageCount }).map((index) => (
         <Button
            key={index}
            size="sm"
            variant={index === currentPageIndex ? "default" : "outline"}
            onClick={() => setPageIndex(index)}
            className="w-10"
         >
            {index + 1}
         </Button>
      ))}
      {pageCount > 10 && currentPageIndex < pageCount - 5 && (
         <PaginationEllipsis setPageIndex={setPageIndex} currentPageIndex={currentPageIndex} pageCount={pageCount} />
      )}
      <Button variant="outline" size="sm" onClick={() => nextPage()} disabled={!getCanNextPage()}>
         Next
      </Button>
   </div>
);

const PaginationEllipsis = ({ setPageIndex, currentPageIndex, pageCount }: BasicPaginationProps) => (
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
