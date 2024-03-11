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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Auth } from "@/context/authContext";
import { zodResolver } from "@hookform/resolvers/zod";

import React, { useContext, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const Login = () => {
  const navigate = useNavigate();

  const { logIn, googleAuth, currentUser } = useContext(Auth);
  const formScheme = z.object({
    email: z
      .string()
      .min(1, { message: "Este campo es obligatorio" })
      .email("Esto no es un email valido"),
    password: z
      .string()
      .min(1, { message: "Por favor, ingresa una contraseña" }),
  });

  const form = useForm({
    resolver: zodResolver(formScheme),
    mode: "onChange",
  });

  useEffect(() => {
    if (currentUser != null) {
      navigate("/");
    }
  }, [currentUser]);

  const onSubmit = async (data) => {
    try {
      await logIn(data.email, data.password);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col  items-center justify-center w-screen h-screen">
      <div
        className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                px-6 py-10 sm:px-10 sm:py-6 "
      >
        <Label className="m-2">Ingresar</Label>
      </div>

      <div
        className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
                px-6 py-10 sm:px-10 sm:py-6 
                bg-white rounded-lg shadow-md lg:shadow-lg"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo</FormLabel>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="ejemplo@ejemplo.com"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col justify-center items-center m-4 gap-2">
              <Link className="self-start" to={"/register"}>
                Registrate
              </Link>
              <Button className="">Ingresar</Button>

              <Label> O</Label>

              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();

                  googleAuth();
                }}
                class="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
              >
                <img
                  class="w-6 h-6"
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  loading="lazy"
                  alt="google logo"
                />
                <span>Inicia con Google</span>
              </button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
