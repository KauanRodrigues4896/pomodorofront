import styled from "styled-components";

export const DeleteContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.8rem;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;
`

export const NoButton = styled.button`
    width: 4rem;
    background-color: transparent;
    border: none;
    &:hover{
        color: red;
        border-bottom: 1px solid red;
    }
`

export const YesButton = styled.button`
    width: 4rem;
    background-color: transparent;
    border: none;
    &:hover{
        color: green;
        border-bottom: 1px solid green;
    }
`