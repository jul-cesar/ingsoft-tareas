import * as React from "react";

import { Button } from "@/components/ui/button";
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
import { DrawerDialogDemo } from "./AddComent";
import { format, formatISO } from "date-fns";
import { DialogEditarTarea } from "./DialogEditarTarea";
import { DropdownMenuDemo } from "./Dropdown";

export function CardTarea({
  titulo,
  descripcion,
  fecha,
  estado,
  prioridad,
  tareaInfo,
  createdAt,
}) {
  const [userAsignado, setUserAsignado] = React.useState();
  const now = new Date();

  const [fechaCreacion, setFechaCreacion] = React.useState(
    format(now, "d 'de' MMM' a las' h:mm")
  );

  function formatCustomDate(datex) {
    const date = new Date(datex);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses van de 0 a 11, así que se suma 1
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

 
    return `${year} ${month} ${day} / ${hour}:${minutes}`;
}

  const userAsign = (data) => {
    setUserAsignado(data);
  };

  const [open, setOpen] = React.useState(false);
  return (
    <Card className="max-w-[350px] ">
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between">
            {titulo}
            <DropdownMenuDemo tareaInfo={tareaInfo} />
          </div>
        </CardTitle>
        <CardDescription>Creada: {formatCustomDate(createdAt)}</CardDescription>
        {userAsignado && (
          <CardDescription>Asignada a: {userAsignado} </CardDescription>
        )}
        <CardDescription>{descripcion}</CardDescription>
      </CardHeader>
      <div className="flex items-center justify-between gap-2 m-4">
        <div className="p-2">
          <Label>Estado: </Label>
          <BadgeEstado>{estado?.toUpperCase()}</BadgeEstado>
        </div>
        <div className="p-2">
          <Label>Prioridad: </Label>
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
            <div className="flex flex-col space-y-1.5"></div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <DrawerDialogDemo tareaInfo={tareaInfo} namet={titulo} />
        <DialogAsignarUser userAsign={userAsign} name={titulo} />

        <DialogEditarTarea tareaInfo={tareaInfo} />
      </CardFooter>
    </Card>
  );
}
