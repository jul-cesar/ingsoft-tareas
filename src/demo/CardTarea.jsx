import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BadgeEstado } from "@/demo/BedgeEstado";
import { DialogAsignarUser } from "./DialogAsignarUser";
import { AddComent } from "./AddComent";
import { DialogEditarTarea } from "./DialogEditarTarea";
import { DropdownMenuDemo } from "./Dropdown";
import { formatCustomDate } from "@/utils/fechaFormat";

function CardTarea({
  titulo,
  descripcion,
  fecha,
  estado,
  prioridad,
  tareaInfo,
  createdAt,
  owner,
  tarea,
  asignado,
}) {
  // Lógica y JSX del componente
  return (
    <Card className="max-w-[350px]">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            {titulo}
            <DropdownMenuDemo tareaInfo={tareaInfo} />
          </div>
        </CardTitle>
        <CardDescription>Creada por: {owner}</CardDescription>
        <CardDescription>Creada: {formatCustomDate(createdAt)}</CardDescription>

        {asignado && <CardDescription>Asignada a: {asignado}</CardDescription>}
        <CardDescription>{descripcion}</CardDescription>
      </CardHeader>
      <div className="flex items-center justify-between gap-2 m-4">
        <div className="p-2">
          <Label>Estado:</Label>
          <BadgeEstado>{estado?.toUpperCase()}</BadgeEstado>
        </div>
        <div className="p-2">
          <Label>Prioridad:</Label>
          <BadgeEstado>{prioridad?.toUpperCase()}</BadgeEstado>
        </div>
      </div>

      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col items-center space-y-2">
              <Label htmlFor="name">Fecha de vencimiento:</Label>
              <BadgeEstado variant="secondary">
                {fecha?.split("T")[0].toUpperCase()}
              </BadgeEstado>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <AddComent tareaInfo={tareaInfo} namet={titulo} />
        <DialogAsignarUser name={tarea} />
        <DialogEditarTarea tareaInfo={tareaInfo} />
      </CardFooter>
    </Card>
  );
}

// Envuelve el componente con React.memo y exporta
export default React.memo(CardTarea);
