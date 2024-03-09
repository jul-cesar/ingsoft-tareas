import * as React from "react"
import { z } from "zod"
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

import { SelectDemo } from "@/demo/SelectDemo"
import { DatePickerDemo } from "@/demo/DatePicker"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@radix-ui/react-select"


export function CardWithForm({ open, setOpen, listaTareas, setListaTareas }) {

    const formScheme = z.object({
        titulo: z.string().min(4, { message: "minimo 4 caracteres" }),
        description: z.string({ required_error: "Se requiere una descripcion" }).min(4, { message: "minimo 4 caracteres" }),
        prioridad: z.string({ required_error: "Por favor, elige una prioridad" }),
        fecha: z.string({ required_error: "Fecha necesaria" }),
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
        <Card className="md:inset-0  max-h-full ">
            <CardHeader>
                <CardTitle className="text-start">Crea una tarea</CardTitle>
                <CardDescription className="text-start">Administra tus tareas y las de tu equipo</CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={() => {
                    setOpen(!open);
                }} variant="outline">Cancelar</Button>
                <Button type="submit" onClick={form.handleSubmit(OnSubmit)}>Crear</Button>

            </CardFooter>
        </Card>
    )
}
