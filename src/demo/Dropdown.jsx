import { CreditCard, EllipsisVertical, Trash, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTarea } from "@/api/deleteTarea";

export function DropdownMenuDemo({ tareaInfo }) {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (newTarea) => {
      console.log(newTarea, "new");
      await deleteTarea(tareaInfo.id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listaTasks"] });
    },
  });
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Opciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <Link to={"login"}>
              {" "}
              <span>Ver comentarios</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={mutate}>
            <Trash className="mr-2 h-4 w-4" />
            <span >Eliminar</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
