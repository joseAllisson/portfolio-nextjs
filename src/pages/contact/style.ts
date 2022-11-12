import styled from "styled-components";

export const ContactStyled = styled.section`
    h2, h3 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 2rem;
        font-weight: 600;
    }

    h2 {
        text-align: center;
    }

    hr {
        margin: 16px 0;
    }

    .contact-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    
        article {
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 8px;

            button {
                font-size: 2rem;
                margin-left: 8px;
                color: #808080;

                &:hover {
                    color: currentColor;
                }
            }
        }
    }
`;