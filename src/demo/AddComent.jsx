import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { useMediaQuery } from "@uidotdev/usehooks";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTaskComentarios } from "@/api/getTaskComentarios";
import { Auth } from "@/context/authContext";
import { createComentario } from "@/api/createComentario";

export function DrawerDialogDemo({ namet, tareaInfo }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">+ Comentar</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Comentarios</DialogTitle>
            <DialogDescription>
              Agrega notas o comentarios sobre el progreso de esta tarea
            </DialogDescription>
          </DialogHeader>
          <ProfileForm namet={namet} tareaInfo={tareaInfo} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">+ Comentar</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Comentarios</DrawerTitle>
          <DrawerDescription>
            Agrega notas o comentarios sobre el progreso de esta tarea
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" namet={namet} tareaInfo={tareaInfo} />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className, namet, tareaInfo }) {
  const queryClient = useQueryClient();

  const { currentUser } = React.useContext(Auth);
  const id = currentUser.uid;
  const idTarea = tareaInfo.id;

  const { data: listaComentarios } = useQuery({
    queryKey: ["listaComentarios", idTarea],
    queryFn: async () => getTaskComentarios(idTarea),
    enabled: !!idTarea,
  });

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (newComentario) => {
      console.log(newComentario, "new");
      await createComentario(newComentario);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listaComentarios"] });
    },
  });

  const formScheme = z.object({
    contenido: z
      .string()
      .min(4, { message: "minimo 4 caracteres" })
      .max(200, { message: "Maximo 44 caracteres" }),
  });

  const form = useForm({
    resolver: zodResolver(formScheme),
    mode: "onChange",
  });

  const OnSubmit = (data) => {
    mutate({ tareaId: tareaInfo.id, authorId: id, contenido: data.contenido });
    console.log(data);
  };
  return (
    <>
      <Form {...form}>
        <form
          className={cn("grid items-start gap-4", className)}
          onSubmit={form.handleSubmit(OnSubmit)}
        >
          <div className="grid gap-2">
            <FormField
              name="contenido"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Haz un comentario para "{namet}" </FormLabel>
                  <FormControl>
                    <Textarea type="email" id="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit">Guardar</Button>
        </form>
      </Form>
      {Array.isArray(listaComentarios) &&
        listaComentarios.map((comentario) => (
          <div class="flex items-start gap-2.5">
            <img
              class="w-8 h-8 rounded-full"
              src="/docs/images/people/profile-picture-3.jpg"
              alt="Jese image"
            />
            <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <div class="flex items-center space-x-2 rtl:space-x-reverse">
                <span class="text-sm font-semibold text-gray-900 dark:text-white">
                  {}
                </span>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  11:46
                </span>
              </div>
              <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                {comentario.contenido}
              </p>
              <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                Delivered
              </span>
            </div>
          </div>
        ))}
    </>
  );
}
