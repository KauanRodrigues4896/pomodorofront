"use client";

import { api } from "@/service/api";
import { Timer, TimesContainer } from "@/styles/app/timesPage";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface dataTask {
  title: string;
}

const Times = ({ data }) => {
  const [dataTaskValues, setdataTaskValues] = useState<dataTask>(
    {} as dataTask
  );
  const pathname = usePathname();
  const [, id] = pathname ? pathname.replace("/", "").split("/") : [];

  const router = useRouter();
  useEffect(() => {
    console.log(id);
    async function gettask() {
      const response = await api.get(`/task/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setdataTaskValues(response.data);
    }

    gettask();
  }, []);
  const [totalTimesInSeconds, setTotalTimeSeconds] = useState(25 * 60);
  const [totalTimesInSecondsPause, setTotalTimeSecondsPause] = useState(5 * 60);
  const [isFocusTime, setIsFocusTime] = useState(true);

  const minutes = Math.floor(totalTimesInSeconds / 60);
  const seconds = totalTimesInSeconds % 60;

  const minutesPause = Math.floor(totalTimesInSecondsPause / 60);
  const secondsPause = totalTimesInSecondsPause % 60;

  useEffect(() => {
    if (isFocusTime && totalTimesInSeconds === 0) {
      alert("O tempo de foco acabou!");
      setIsFocusTime(false);
      setTotalTimeSeconds(totalTimesInSecondsPause);
      return;
    } else if (!isFocusTime && totalTimesInSecondsPause === 0) {
      alert("O tempo de descanso acabou!");
      setIsFocusTime(true);
      setTotalTimeSeconds(25 * 60);
      setTotalTimeSecondsPause(5 * 60);
      return;
    }

    const timerId = setTimeout(() => {
      if (isFocusTime) {
        setTotalTimeSeconds(totalTimesInSeconds - 1);
      } else {
        setTotalTimeSecondsPause(totalTimesInSecondsPause - 1);
      }
    }, 1000);

    return () => clearTimeout(timerId);
  }, [totalTimesInSeconds, totalTimesInSecondsPause, isFocusTime]);

  return (
    <TimesContainer>
      {isFocusTime ? <h1>Foco</h1> : <h1>Descanso</h1>}
      {isFocusTime ? (
        <Timer>
          <span>{minutes.toString().padStart(2, "0")}</span>
          <span>:</span>
          <span>{seconds.toString().padStart(2, "0")}</span>
        </Timer>
      ) : (
        <Timer>
          <span>{minutesPause.toString().padStart(2, "0")}</span>
          <span>:</span>
          <span>{secondsPause.toString().padStart(2, "0")}</span>
        </Timer>
      )}

      <h1>{dataTaskValues.title}</h1>
    </TimesContainer>
  );
};

export default Times;
