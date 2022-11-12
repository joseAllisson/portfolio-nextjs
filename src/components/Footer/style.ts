import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: #212529;
    color: #fff;
    text-align: center;

    .buttons-container {
        margin: 8px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;

        button {
            padding: 8px;
            font-size: 1.25rem;
            border: 2px solid currentColor;
            border-radius: 100%;

            &:hover {
                transition: 0.3s;
                color: ${({ theme }) => theme.colors.primary};
            }
        }
    }
    
    .background-primary {
        background-color: ${({ theme }) => theme.colors.primary};;
    }
`;