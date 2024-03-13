import { deleteTarea } from "@/api/deleteTarea";
import MiniLoading from "@/components/MiniLoading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function DeleteTareaDialog({ tareaInfo }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const queryClient = useQueryClient();
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (newTarea) => {
      console.log(newTarea, "new");
      await deleteTarea(tareaInfo.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listaTasks"] }),
        toast.success(`Tarea eliminada`);
    },
  });
  return (
    <Dialog open={isDialogOpen} onOpenChange={(open) => setIsDialogOpen(open)}>
      <DialogTrigger asChild>
        <Label>Eliminar</Label>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Estas seguro que deseas eliminar"{tareaInfo.titulo}"
          </DialogTitle>
          <DialogDescription>
            Por favor, tenga en cuenta que los comentarios realizados en esta
            tarea serán eliminados. Una vez que se proceda con esta acción, no
            será posible recuperar dicha información
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4"></div>
        <DialogFooter>
          {isPending ? (
            <Button type="submit" onClick={mutate}>
              Si
            </Button>
          ) : (
            <MiniLoading />
          )}
          <Button type="submit">No</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
