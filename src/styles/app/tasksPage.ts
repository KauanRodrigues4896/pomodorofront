import styled from "styled-components";

export const TasksContainer = styled.div `
    height: 100vh;
    width: 100%;
    padding: 4rem 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 0.8rem;
`
export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    input {
        width: 40rem;
        height: 3rem;
        border: none;
        background-color: buttonface;
        border-radius: 6px;
        padding-left: 4px;
    }

    button {
        height: 3rem;
        width: 7rem;
        border: none;
        border-radius: 6px;
    }
`

export const TableContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.8rem;
`

export const TableHead = styled.div`
    width: 47.8rem;
    height: 4rem;
    display:flex;
    justify-content: space-around;
    align-items: center;
    background-color: #1e90ff;
    color: #fff;
    border-radius: 6px;
`

export const TableBody = styled.div`
    width: 47.8rem;
    height: 100%;
    display:flex;
    justify-content: space-around;
    align-items: center; 
    flex-direction: column;
    background-color: buttonface;
    border-radius: 6px;
    padding: 1rem;
`

interface ItemsProp {
    status: boolean;
}

export const Itens = styled.div<ItemsProp>`
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child) {
        border-bottom: 1px solid rgba(0,0,0,0.5)
    };

    span#status{
        height: 2rem;
        width: 2rem;
        background-color: ${(props) => props.status ? "green":"red"};
        border-radius: 50%;

    }
`