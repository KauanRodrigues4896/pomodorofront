"use client"

import { TasksForm } from "@/components/Forms/Tasks";
import { UpdateContainer } from "@/styles/updatePage";

export default function Update() {
  return (
    <UpdateContainer>
        <h1>Atualizar Task 1</h1>
        <TasksForm />
    </UpdateContainer>
  );
}

