import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { SelectForm } from "./SelectAsignarUser"
import { useState } from "react"

export function DialogAsignarUser({ name, userAsign }) {
 
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    return (
        <Dialog className="" open={isDialogOpen} onOpenChange={(open) => setIsDialogOpen(open)}>
            <DialogTrigger asChild>
                <Button variant="outline">Asignar usuario </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] max-w-[300px]">
                <DialogHeader>
                    <DialogTitle>Asigna un usuario a la tarea "{name}"</DialogTitle>
                    <DialogDescription>
                        Al asignar una tarea xdxdxd
                    </DialogDescription>
                </DialogHeader>
                <SelectForm currentTarea={name} setIsOpenDialog={setIsDialogOpen} userAsign={userAsign} />
                <DialogFooter>

                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
