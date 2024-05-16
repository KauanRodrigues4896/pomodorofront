import { SaveButton } from "@/components/Buttons/Save";
import { FormContainer } from "./styles";

export function TasksForm() {
    return (
        <FormContainer>
            <input type="text"/> <SaveButton label="Criar" />
        </FormContainer>
    )
}