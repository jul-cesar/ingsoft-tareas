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

import { DeleteTareaDialog } from "./DeleteTareaDialog";

export function DropdownMenuDemo({ tareaInfo }) {
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
          <div className="flex items-center m-2 cursor-pointer h-full">
            <Trash className="mr-2 h-4 w-4" />
            <DeleteTareaDialog tareaInfo={tareaInfo} className="cursor-pointer" />
          </div>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
