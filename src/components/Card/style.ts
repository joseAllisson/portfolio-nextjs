import styled from "styled-components";
import { mediaDevice } from "../../styles/responsive/mediaDevice";

interface CardStyledProps {
    background: string;
}

export const CardStyled = styled.article<CardStyledProps>`
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 300px;
    max-height: 300px;

    .overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: relative;
        height: 100%;
        width: 100%;
        transition: 0.3s;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0;

        &:hover {
            opacity: 1;
        }

        .card-content {
            width: 100%;
            opacity: 0;
            transform: translateY(50px);
            transition: 0.5s;

            h3 {
                background-color: ${({ theme }) => theme.colors.primary};
                color: #ffffff;
                font-size: 2.5rem;
                font-weight: 400;
                padding: 4px 8px;
            }
            
            p {
                width: 100%;
                line-height: 1.5;
                background-color: rgba(0, 0, 0, 0.85);
                color: #ffffff;
                padding: 8px;
            }

            .button-container {
                padding: 8px;
                display: flex;
                gap: 8px;

                button {
                    height: 50px;
                    width: 50px;
                    padding: 12px;
                    background-color: ${({ theme }) => theme.colors.primary};
                    color: ${({ theme }) => theme.colors.secondary};
                    border-radius: 50%;
                    font-size: 1.25rem;
                    transition: 0.3s;

                    &:hover {
                        filter: brightness(0.85);
                    }

                    &:disabled {
                        cursor: not-allowed;
                        filter: grayscale(60%);
                    }
                }
            }
        }

        &:hover .card-content {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;