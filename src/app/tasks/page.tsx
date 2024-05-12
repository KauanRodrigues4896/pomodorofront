"use client"

import { TasksContainer, FormContainer, TableContainer, TableHead, TableBody, Itens } from "@/styles/app/tasksPage";
import Link from "next/link";

export default function Tasks() {
  return (
    <TasksContainer>
        <FormContainer>
            <input type="text"/> <button>Criar</button>
        </FormContainer>
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
                    <span><Link href="/edit">Editar</Link> | <Link href="/delete">Deletar</Link> | <Link href="/start">Iniciar</Link></span>
                </Itens>
                <Itens status={false}>
                    <span>Lavar Louça</span>
                    <span id="status" />
                    <span><Link href="/edit">Editar</Link> | <Link href="/delete">Deletar</Link> | <Link href="/start">Iniciar</Link></span>
                </Itens>
            </TableBody>
        </TableContainer>
    </TasksContainer>    
  );
}

