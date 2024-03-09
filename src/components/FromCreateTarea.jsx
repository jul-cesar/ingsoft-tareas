import { SelectDemo } from "@/demo/SelectDemo";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { Button } from "./ui/button";
import { CardWithForm } from "@/demo/FormCardDemo";

const FromCreateTarea = ({ listaTareas, setListaTareas }) => {
  const [open, setOpen] = useState(false);
 
  return (
    <div className="">
      <Toaster />
      <Button onClick={() => {
        setOpen(!open);
      }}>
        Crear tarea
      </Button>

      <div className={`${open ? "flex" : "hidden"} fixed inset-0 bg-black bg-opacity-50 items-center justify-center`}>
        <CardWithForm open={open} setOpen={setOpen} listaTareas={listaTareas} setListaTareas={setListaTareas}  />
      </div>


    </div>
  );
};

export default FromCreateTarea;
