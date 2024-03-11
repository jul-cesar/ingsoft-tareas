import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo({ valuef, onChangeFn }) {
  return (
    <Select onValueChange={onChangeFn}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Elige una prioridad" value={valuef} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Prioridades</SelectLabel>
          <SelectItem value="alta">Alta</SelectItem>
          <SelectItem value="media">Media</SelectItem>
          <SelectItem value="baja">Baja</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
