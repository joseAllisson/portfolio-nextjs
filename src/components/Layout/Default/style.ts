import styled from "styled-components";

export const LayoutStyled = styled.main`
    background-image: url("../img/fundo.jfif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 1000px;
    display: flex;
    justify-content: center;
`;

export const ContentStyled = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    width: 1200px;
    padding: 40px;

    &::before {
        content: "";
        top: 16px;
        left: 16px;
        right: 16px;
        bottom: 16px;
        position: absolute;
        background-color: transparent;
        width: calc(100% -32px);
        height: calc(100% -32px);
        border: 1px solid ${({ theme }) => theme.colors.border};
    }
`;