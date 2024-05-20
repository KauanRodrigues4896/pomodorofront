"use client";

import { SaveButton } from "@/components/Buttons/Save";
import { TasksForm } from "@/components/Forms/Tasks";
import { api } from "@/service/api";
import {
  TasksContainer,
  TableContainer,
  TableHead,
  TableBody,
  Itens,
} from "@/styles/app/tasksPage";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Tasks {
  id: string;
  title: string;
  description: string;
  status: string;
  expirationDate: Date;
}

export default function Tasks() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function gettask() {
      const response = await api.get("/task", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setdata(response.data);
    }

    gettask();
  }, []);
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
          {data.map((d: Tasks) => (
            <>
              <Itens status={d.status !== "DONE" ? false : true}>
                <span>{d.title}</span>
                <span id="status" />
                <span>
                  <Link href={`/update/${d.id}`}>Editar</Link> |{" "}
                  <Link href={`/delete/${d.id}`}>Deletar</Link> |{" "}
                  <Link href={`/times/${d.id}`}>Iniciar</Link>
                </span>
              </Itens>
            </>
          ))}
        </TableBody>
      </TableContainer>
    </TasksContainer>
  );
}
