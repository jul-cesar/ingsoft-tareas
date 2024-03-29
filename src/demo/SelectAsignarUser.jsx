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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { updateTarea } from "@/api/updateTarea";
import { useContext, useEffect, useState } from "react";
import { Auth } from "@/context/authContext";

const FormSchema = z.object({
  userAsignado: z.string({
    required_error: "Por favor, selecciona un usuario",
  }),
});

export function SelectForm({ setIsOpenDialog, currentTarea }) {
  const { data: listaUsuarios } = useQuery({
    queryKey: ["listaUsuarios"],
    queryFn: async () => await getAllUsers(),
  });


  const currentUser = useContext(Auth)

  const [listaFiltrada, setListaFiltrada] = useState([])

  const form = useForm({
    resolver: zodResolver(FormSchema),
  });
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess, } = useMutation({
    mutationFn: async (newTarea) => {
      await updateTarea(currentTarea.id, newTarea);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listaTasks"] }),
        queryClient.invalidateQueries({ queryKey: ["listaAsign"] }),
        toast.success(`Asignaste un usuario a la tarea ${currentTarea.titulo}`);
      setIsOpenDialog(false);
    }
  });

  function onSubmit(data) {
    mutate({ asignadoId: data.userAsignado })
  }

  useEffect(() => {
    if (listaUsuarios && currentUser) {
      console.log(currentUser, "xddddadasdasd")
      const filtrados = listaUsuarios.filter(x => x.email?.toLowerCase() !== currentUser.currentUser.email?.toLowerCase());
      setListaFiltrada(filtrados);
    }
  }, [listaUsuarios, currentUser]);


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
                  {Array.isArray(listaFiltrada) && listaFiltrada.map((user) => (
                    <SelectItem key={user.id} value={user.id}>{user.nombre}</SelectItem>
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
