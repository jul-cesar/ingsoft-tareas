import { CreditCard, Edit, EllipsisVertical, Trash, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";


import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComentario } from "@/api/deleteComentario";
import { toast } from "sonner";

export function DropdownComentarios({ comentarioData }) {
    const queryClient = useQueryClient();
    const { mutate, isPending, isError, isSuccess } = useMutation({
        mutationFn: async () => {
            console.log("del");
            await deleteComentario(comentarioData.id);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["listaComentarios"] }),

                toast.success(`Comentario eliminado`);
        },
    });
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <EllipsisVertical />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52">
                <DropdownMenuLabel>Opciones</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {/* <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        <Link to={"login"}>
                            {" "}
                            <span>Editar</span>
                        </Link>
                    </DropdownMenuItem> */}


                    <DropdownMenuItem onClick={mutate}>
                        <Trash className="mr-2 h-4 w-4" />

                        <span>Eliminar</span>

                    </DropdownMenuItem>

                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
