"use client";

import { api } from "@/service/api";
import {
  ButtonsContainer,
  DeleteContainer,
  NoButton,
  YesButton,
} from "@/styles/app/deletePage";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface dataTask {
  title: string;
}

export default function Delete() {
  const [data, setdata] = useState<dataTask>({} as dataTask);
  const pathname = usePathname();
  const [, id] = pathname ? pathname.replace("/", "").split("/") : [];

  const router = useRouter();
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
    <DeleteContainer>
      <h1>Deletar {data.title}</h1>
      <p>Deseja deletar {data.title}?</p>
      <ButtonsContainer>
        <NoButton onClick={() => router.push("/tasks")}>Não</NoButton>
        <YesButton
          onClick={() => {
            api.delete(`/task/${id}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            });
            router.push("/tasks");
          }}
        >
          Sim
        </YesButton>
      </ButtonsContainer>
    </DeleteContainer>
  );
}
