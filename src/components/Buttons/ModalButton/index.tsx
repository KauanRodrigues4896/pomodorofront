import { ButtonContainer } from "./styles";

interface OpenModalButtonProps{
    label: string;
    OpenModal:() => void
}

export function OpenModalButton({OpenModal, label}:OpenModalButtonProps) {
    return (<ButtonContainer onClick={OpenModal}>{label}</ButtonContainer>)
}