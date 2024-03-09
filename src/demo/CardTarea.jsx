import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BadgeEstado } from "@/demo/BedgeEstado"
import { DialogAsignarUser } from "./DialogAsignarUser"



export function CardTarea({ titulo, descripcion, fecha, estado, prioridad }) {

  const [userAsignado, setUserAsignado] = React.useState()

  const userAsign = (data) => {
    setUserAsignado(data)
  }
  return (
    <Card className="w-[350px] m-4">
      <CardHeader>
        <CardTitle>{titulo}</CardTitle>
        {userAsignado && <CardDescription>Asignada a: {userAsignado} </CardDescription>}
        <CardDescription>{descripcion.toUpperCase()}</CardDescription>

      </CardHeader>
      <div className="flex items-center justify-between gap-2 m-4">
        <div className="p-2">
          <Label>Estado: </Label>
          <BadgeEstado>{estado.toUpperCase()}</BadgeEstado>
        </div>
        <div className="p-2">
          <Label>Prioridad: </Label>
          <BadgeEstado>{prioridad.toUpperCase()}</BadgeEstado>
        </div>

      </div>


      <CardContent>

        <form>

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col items-center space-y-2">
              <Label htmlFor="name">Fecha:</Label>
              <BadgeEstado variant="secondary">{fecha.toUpperCase()}</BadgeEstado>

            </div>
            <div className="flex flex-col space-y-1.5">


            </div>

          </div>

        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <DialogAsignarUser userAsign={userAsign} name={titulo}  />
        <Button className="self-end">Editar</Button>
      </CardFooter>
    </Card>
  )
}
