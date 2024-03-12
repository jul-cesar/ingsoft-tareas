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

export function SelectEstado({ valuef, onChangeFn, onOpenChange }) {
  return (
    <Select onValueChange={onChangeFn} onOpenChange={onOpenChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Elige una prioridad" value={valuef} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Estado</SelectLabel>
          <SelectItem value="pendiente">Pendiente</SelectItem>
          <SelectItem value="en progreso">En progreso</SelectItem>
          <SelectItem value="completada">Completada</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
