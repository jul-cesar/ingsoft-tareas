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
import { Input } from "@/components/ui/input"

import { SelectDemo } from "@/demo/SelectDemo"
import { DatePickerDemo } from "@/demo/DatePicker"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import React, { useState } from "react"

export function DialogTareaForm({ listaTareas, setListaTareas }) {
    const [open, setOpen] = useState(false);


    const formScheme = z.object({
        titulo: z.string().min(4, { message: "minimo 4 caracteres" }),
        description: z.string({ required_error: "Se requiere una descripcion" }).min(4, { message: "minimo 4 caracteres" }),
        prioridad: z.string({ required_error: "Por favor, elige una prioridad" }).min(1, { message: "Por favor elige una prioridad" }),
        fecha: z.string({ required_error: "Fecha necesaria" }).min(1, { message: "Por favor selecciona una fecha" }),
        estado: z.string({ required_error: "Fecha necesaria" })

    })

    const form = useForm({
        resolver: zodResolver(formScheme),
        defaultValues: {
            titulo: "",
            description: "",
            fecha: "",
            prioridad: "",
            estado: "disponible"
        },
        mode: "onChange"

    })

    React.useEffect(() => {
        form.reset()
    }, [open])

    const OnSubmit = (data) => {
        setListaTareas([...listaTareas, data]);

        setOpen(!open);
        console.log(data);
    };

    return (
        <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
            <DialogTrigger asChild>
                <Button variant="outline">Nueva tarea</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Crea una tarea</DialogTitle>
                    <DialogDescription>
                        Llena la info de tu nueva tarea, una vez estes listo, presiona el boton "Crear" y se agregara automaticamente a tu lista de tareas.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className=" text-start space-y-1.5 space-x-1.5">
                                <FormField name="titulo" control={form.control} render={({ field }) => (
                                    <FormItem>
                                        <FormLabel >
                                            Titulo
                                        </FormLabel>
                                        <FormControl>
                                            <Input {...field} id="name" placeholder="Nombre de tu tarea" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )} />
                            </div>
                            <div className=" text-start space-y-1.5 space-x-1.5">
                                <FormField name="description" control={form.control} render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Descripcion
                                            <FormControl>
                                                <Textarea placeholder="Descripcion breve de tu tarea." id="message" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormLabel>
                                    </FormItem>
                                )} />
                            </div>


                            <div className="text-start space-y-1.5 space-x-1.5">
                                <FormField name="fecha" control={form.control} render={({ field }) => (
                                    <FormItem>




                                        <FormControl>

                                            <DatePickerDemo {...field} id="fecha" valuef={field.value} onChangef={field.onChange} />

                                        </FormControl>

                                        <FormMessage />

                                    </FormItem>
                                )} />

                                <FormField control={form.control} name="prioridad" render={({ field: { value, onChange } }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Prioridad
                                            <FormControl>
                                                <SelectDemo valuef={value} onChangeFn={onChange} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormLabel>
                                    </FormItem>
                                )} />

                            </div>
                        </div>
                    </form>
                </Form>
                <DialogFooter>
                    <Button type="submit" onClick={form.handleSubmit(OnSubmit)}>Crear</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
