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
import { Label } from "@radix-ui/react-label";
import { toast } from "sonner";
import MiniLoading from "@/components/MiniLoading";
import { formatCustomDate } from "@/utils/fechaFormat";
import ComentariosSection from "@/components/ComentariosSection";
import { MessageSquarePlus, Text } from "lucide-react";

export function AddComent({ namet, tareaInfo }) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button > <MessageSquarePlus/> </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-w-96 min-h-12 max-h-[600px] overflow-y-auto">
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

function ProfileForm({ className, namet, tareaInfo }) {
  const queryClient = useQueryClient();

  const { currentUser } = React.useContext(Auth);
  const id = currentUser.uid;
  const idTarea = tareaInfo.id;

  const { data: listaComentarios, isLoading } = useQuery({
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
      queryClient.invalidateQueries({ queryKey: ["listaComentarios"] }),
        toast.success("Comentario agregado");
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
    form.reset({ contenido: "" });
  };
  return (
    <div >
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

          {!isPending ? (
            <Button type="submit"> Agregar</Button>
          ) : (
            <MiniLoading />
          )}
        </form>
      </Form>
      <ComentariosSection listaComentarios={listaComentarios} isLoading={isLoading} currentUser={currentUser} />
    </div>
  );
}
