"use client";

import { api } from "@/service/api";
import { LoginContainer, LoginButton, FormItem } from "@/styles/app/loginPage";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type Inputs = {
  username: string;
  password: string;
};

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = (await api.post("/auth/login", data)).data;
      localStorage.setItem("expiresIn", response.expiresIn);
      localStorage.setItem("token", response.token);
      if (response.expiresIn && response.token) {
        router.push("/tasks");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LoginContainer>
      <form onSubmit={handleSubmit(onSubmit)} id="content">
        <FormItem>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" {...register("username")} />
        </FormItem>
        <FormItem>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" {...register("password")} />
        </FormItem>
        <LoginButton type="submit">Entrar</LoginButton>
      </form>
    </LoginContainer>
  );
}
