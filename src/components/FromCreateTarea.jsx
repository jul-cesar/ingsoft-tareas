
import React, { useState } from "react";
import { Toaster, toast } from "sonner";

import { DialogTareaForm } from "@/demo/DialogTareaForm";

const FromCreateTarea = ({ listaTareas, setListaTareas }) => {

  return (
    <div className="">
      <Toaster />



      <DialogTareaForm listaTareas={listaTareas} setListaTareas={setListaTareas} />



    </div>
  );
};

export default FromCreateTarea;
