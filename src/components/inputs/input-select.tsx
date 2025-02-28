import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Option {
   value: string;
   label: string;
}

interface InputSelectProps {
   value: string;
   onChange: (value: string) => void;
   options: Option[];
}

const InputSelect = ({ value, onChange, options }: InputSelectProps) => {
   return (
      <Select value={value} onValueChange={onChange}>
         <SelectTrigger className="w-[180px]">
            <SelectValue />
         </SelectTrigger>
         <SelectContent>
            {options.map((option) => (
               <SelectItem value={option.value} key={option.value}>
                  {option.label}
               </SelectItem>
            ))}
         </SelectContent>
      </Select>
   );
};

export default InputSelect;
