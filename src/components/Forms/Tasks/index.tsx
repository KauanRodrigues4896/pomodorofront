import { SaveButton } from "@/components/Buttons/Save";
import { FormContainer } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "@/service/api";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type TaskInputs = {
  title: string;
};
interface TaskFormProps {
  value?: string;
  id?: string;
}

export function TasksForm({ value, id }: TaskFormProps) {
  const [task, setTask] = useState("");

  useEffect(() => {
    value && setTask(value);
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TaskInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<TaskInputs> = async (data) => {
    if (value) {
      try {
        console.log({ id, ...data, status: "TO_DO" });
        const response = (
          await api.put(
            `/task/${id}`,
            { ...data, id, status: "TO_DO" },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
        ).data;
        router.push("/tasks");
      } catch (e) {
        console.log(e);
      }
    } else {
      try {
        const response = (
          await api.post(
            "/task",
            { ...data, status: "TO_DO" },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
        ).data;
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={task} {...register("title")} type="text" />{" "}
      <SaveButton label="Criar" />
    </FormContainer>
  );
}
