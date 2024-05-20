"use client";

import { TasksForm } from "@/components/Forms/Tasks";
import { api } from "@/service/api";
import { UpdateContainer } from "@/styles/updatePage";
import { useRouter } from "next/dist/client/router";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface dataTask {
  title: string;
}

export default function Update() {
  const [data, setdata] = useState<dataTask>({} as dataTask);
  const pathname = usePathname();
  const [, id] = pathname ? pathname.replace("/", "").split("/") : [];
  useEffect(() => {
    console.log(id);
    async function gettask() {
      const response = await api.get(`/task/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setdata(response.data);
    }

    gettask();
  }, []);
  return (
    <UpdateContainer>
      <h1>Atualizar {data.title}</h1>
      <TasksForm value={data.title} id={id} />
    </UpdateContainer>
  );
}
