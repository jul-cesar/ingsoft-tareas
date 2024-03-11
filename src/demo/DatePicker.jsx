import * as React from "react";
import { format, formatISO } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const DatePickerDemo = React.forwardRef(({ valuef, onChangef }, ref) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          ref={ref}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !valuef && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {valuef ? (
            format(new Date(valuef), "yyyy-MM-dd")
          ) : (
            <span>Elige una fecha</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={valuef ? new Date(valuef) : undefined}
          onSelect={(date) => onChangef(formatISO(date, "yyyy-MMMM-dd"))}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
});

export default DatePickerDemo;
