import { ButtonContainer } from "./styles";

interface SaveButtonProps {
    label: string
}

export function SaveButton({ label }: SaveButtonProps) {
    return (
        <ButtonContainer>{label}</ButtonContainer>
    )
}