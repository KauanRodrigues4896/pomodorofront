"use client"

import { LoginContainer, LoginButton } from "@/styles/app/loginPage";

export default function Home() {
  return (
    <LoginContainer>
      <LoginButton href="/tasks">Login com o Google</LoginButton>
    </LoginContainer>
  );
}

