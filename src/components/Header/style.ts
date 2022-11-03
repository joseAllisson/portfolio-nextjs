import styled from "styled-components";

export const HeaderStyled = styled.header`
    
    .background-image {
        width: 100%;
        height: 80vh;
        max-height: 1170px;
        background-image: url("../img/header.jpg");
        background-position: center;
        background-size: cover;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .animated-button-container {
            position: absolute;
            right: 10%;
            top: 10%;
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
    
        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.secondary};
        }

        p {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    .menu {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        box-shadow: 5px 5px 15px #1111113d;
        position: relative;
        z-index: 1;
    }
`;