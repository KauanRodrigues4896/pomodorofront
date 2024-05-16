"use client"

import { SaveButton } from "@/components/Buttons/Save";
import { TasksForm } from "@/components/Forms/Tasks";
import { TasksContainer, TableContainer, TableHead, TableBody, Itens } from "@/styles/app/tasksPage";
import Link from "next/link";

export default function Tasks() {
  return (
    <TasksContainer>
       <TasksForm />
        <TableContainer>
            <TableHead>
                <span id="tasks">Atividades</span>
                <span id="status">Status</span>
                <span id="actions"></span>
            </TableHead>
            <TableBody>
                <Itens status={true}>
                    <span>Lavar Louça</span>
                    <span id="status"/>
                    <span><Link href="/update">Editar</Link> | <Link href="/delete">Deletar</Link> | <Link href="/times">Iniciar</Link></span>
                </Itens>
                <Itens status={false}>
                    <span>Lavar Louça</span>
                    <span id="status" />
                    <span><Link href="/update">Editar</Link> | <Link href="/delete">Deletar</Link> | <Link href="/times">Iniciar</Link></span>
                </Itens>
            </TableBody>
        </TableContainer>
    </TasksContainer>    
  );
}

