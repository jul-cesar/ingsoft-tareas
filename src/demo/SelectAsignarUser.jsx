"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { getAllUsers } from "@/api/getAllUsers";
import { useQuery } from "@tanstack/react-query";

const FormSchema = z.object({
  userAsignado: z.string({
    required_error: "Por favor, selecciona un usuario",
  }),
});

export function SelectForm({ setIsOpenDialog, userAsign, currentTarea }) {
  const { data: listaUsuarios } = useQuery({
    queryKey: ["listaUsuarios"],
    queryFn: async () => await getAllUsers(),
  });

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data) {
    toast.success(`Asignaste ${data.userAsignado} a la tarea ${currentTarea}`);
    userAsign(data.userAsignado);
    setIsOpenDialog(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="userAsignado"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Usuario</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un usuario" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Array.isArray(listaUsuarios) &&
                    listaUsuarios.map((user) => (
                      <SelectItem value={user.nombre}>{user.nombre}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormDescription>
                Solo puedes asignar la tarea a un usuario
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Asignar</Button>
      </form>
    </Form>
  );
}
