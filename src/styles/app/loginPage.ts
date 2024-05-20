import styled from "styled-components";

export const LoginContainer = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.8rem;
    
    form#content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 0.8rem;
        width: 100%;
    }
`

export const LoginButton = styled.button`
    width: 10rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: radius 6px;
`
export const FormItem = styled.div`
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    align-items: center;
    width: 100%;

    input {
        width: 90%;
    }
`
