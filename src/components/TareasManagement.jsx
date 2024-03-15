import React, { useState } from "react";
import { Toaster, toast } from "sonner";

import { DialogTareaForm } from "@/demo/DialogTareaForm";

const TareasManagement = ({ listaTareas, setListaTareas }) => {
  return (
    <div className="w-full flex justify-center">
      <Toaster />

      <DialogTareaForm
        listaTareas={listaTareas}
        setListaTareas={setListaTareas}
      />
    </div>
  );
};

export default TareasManagement;
