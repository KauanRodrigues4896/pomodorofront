"use client"

import { ButtonsContainer, DeleteContainer, NoButton, YesButton } from "@/styles/app/deletePage";

export default function Delete() {
  return (
    <DeleteContainer>
        <h1>Deletar Task 1</h1>
        <p>Deseja deletar Task 1?</p>
        <ButtonsContainer>
            <NoButton>Não</NoButton>
            <YesButton>Sim</YesButton>
        </ButtonsContainer>
    </DeleteContainer>
  );
}

