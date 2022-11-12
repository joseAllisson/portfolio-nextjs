import styled from "styled-components";

export const LayoutStyled = styled.main`
    background-image: url("../img/fundo.jfif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    min-height: 360px;
    display: flex;
    justify-content: center;
`;

export const ContentStyled = styled.section`
    background-color: ${({ theme }) => theme.colors.background};
    position: relative;
    width: 1200px;
    padding: 20px;
`;

export const LeafStyled = styled.section`
    height: 100%;
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 20px;
`;