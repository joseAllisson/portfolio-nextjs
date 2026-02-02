import styled from "styled-components";
import { mediaDevice } from "../../styles/responsive/mediaDevice";

interface CardStyledProps {
    background: string;
}

export const CardStyled = styled.article<CardStyledProps>`
    position: relative;
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
    border-radius: 24px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadows?.lg || '0 10px 15px -3px rgba(0, 0, 0, 0.1)'};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeIn 0.6s ease-out;

    @media ${mediaDevice.mobile} {
        height: 320px;
        border-radius: 20px;
    }

    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: ${({ theme }) => theme.shadows?.xl || '0 20px 25px -5px rgba(0, 0, 0, 0.1)'}, ${({ theme }) => theme.shadows?.glow || '0 0 20px rgba(99, 102, 241, 0.3)'};
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(0, 0, 0, 0.3) 50%,
            rgba(0, 0, 0, 0.85) 100%
        );
        opacity: 0;
        transition: opacity 0.4s ease;
        z-index: 1;
    }

    &:hover::before {
        opacity: 1;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.4) 70%,
            rgba(0, 0, 0, 0.95) 100%
        );
        backdrop-filter: blur(2px);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        padding: 32px;
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 2;

        @media ${mediaDevice.mobile} {
            padding: 20px;
        }

        &:hover {
            opacity: 1;
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.7) 40%,
                rgba(0, 0, 0, 0.9) 80%,
                rgba(0, 0, 0, 0.98) 100%
            );
        }

            .card-content {
            width: 100%;
            text-align: center;
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

            h3 {
                background: ${({ theme }) => theme.colors.gradient};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                font-size: clamp(1.75rem, 3vw, 2.5rem);
                font-weight: 700;
                margin-bottom: 16px;
                line-height: 1.2;
                color: ${({ theme }) => theme.colors.secondary};

                @media ${mediaDevice.mobile} {
                    font-size: 1.5rem;
                    margin-bottom: 10px;
                }
            }
            
            p {
                width: 100%;
                line-height: 1.6;
                color: ${({ theme }) => theme.colors.secondary};
                padding: 0;
                margin-bottom: 24px;
                font-size: 1rem;
                text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

                @media ${mediaDevice.mobile} {
                    font-size: 0.85rem;
                    margin-bottom: 16px;
                    line-height: 1.5;
                    display: -webkit-box;
                    -webkit-line-clamp: 4;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            }

            .button-container {
                display: flex;
                justify-content: center;
                gap: 12px;
                flex-wrap: wrap;

                @media ${mediaDevice.mobile} {
                    gap: 8px;
                }

                button {
                    height: 56px;
                    width: 56px;

                    @media ${mediaDevice.mobile} {
                        height: 44px;
                        width: 44px;
                    }
                    background: ${({ theme }) => theme.colors.gradient};
                    color: ${({ theme }) => theme.colors.secondary};
                    border-radius: 16px;
                    font-size: 1.5rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: ${({ theme }) => theme.shadows?.md || '0 4px 6px -1px rgba(0, 0, 0, 0.1)'};
                    position: relative;
                    overflow: hidden;

                    &::before {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 0;
                        height: 0;
                        border-radius: 50%;
                        background: rgba(255, 255, 255, 0.);
                        transform: translate(-50%, -50%);
                        transition: width 0.6s, height 0.6s;
                    }

                    &:hover {
                        transform: translateY(-4px) scale(1.1);
                        box-shadow: ${({ theme }) => theme.shadows?.lg || '0 10px 15px -3px rgba(0, 0, 0, 0.1)'}, ${({ theme }) => theme.shadows?.glow || '0 0 20px rgba(99, 102, 241, 0.3)'};
                    }

                    &:hover::before {
                        width: 300px;
                        height: 300px;
                    }

                    &:active {
                        transform: translateY(-2px) scale(1.05);
                    }

                    &:disabled {
                        cursor: not-allowed;
                        opacity: 0.5;
                        filter: grayscale(100%);
                        transform: none;
                    }

                    a {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: inherit;
                        position: relative;
                        z-index: 1;
                    }
                }
            }
        }
    }

    &:hover .overlay {
        opacity: 1;
    }

    &:hover .card-content {
        opacity: 1;
        transform: translateY(0);
    }
`;