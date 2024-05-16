import Link from "next/link";
import styled from "styled-components";

export const LoginContainer = styled.div `
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginButton = styled(Link)`
    width: 6rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: radius 6px;
`