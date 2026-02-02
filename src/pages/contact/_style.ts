import styled from "styled-components";
import { mediaDevice } from "../../styles/responsive/mediaDevice";

const ContactStyled = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 24px 24px;
    animation: fadeIn 0.6s ease-out;

    h2 {
        background: ${({ theme }) => theme.colors.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 800;
        text-align: center;
        margin-bottom: 24px;
        letter-spacing: -0.02em;
    }

    h3 {
        color: ${({ theme }) => theme.colors.text};
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 8px;
    }

    hr {
        margin: 24px 0;
        border: none;
        height: 2px;
        background: ${({ theme }) => theme.colors.gradient};
        opacity: 0.3;
    }

    .contact-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 32px;
        margin-top: 24px;

        @media ${mediaDevice.tablet} {
            grid-template-columns: 1fr;
            gap: 24px;
            text-align: center;
        }
    
        article {
            padding: 40px 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            background: ${({ theme }) => theme.colors.backgroundSecondary};
            border: 1px solid ${({ theme }) => theme.colors.border};
            border-radius: 24px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: ${({ theme }) => theme.shadows.md};
            position: relative;
            overflow: hidden;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 4px;
                background: ${({ theme }) => theme.colors.gradient};
                transform: scaleX(0);
                transition: transform 0.3s ease;
            }

            &:hover {
                transform: translateY(-8px);
                box-shadow: ${({ theme }) => theme.shadows.xl}, ${({ theme }) => theme.shadows.glow};
                border-color: ${({ theme }) => theme.colors.primary};

                &::before {
                    transform: scaleX(1);
                }
            }

            @media ${mediaDevice.mobile} {
                padding: 32px 24px;
            }

            h3 {
                display: flex;
                align-items: center;
                gap: 12px;
                width: 100%;
                justify-content: center;
            }

            p {
                color: ${({ theme }) => theme.colors.textSecondary};
                font-size: 1rem;
                line-height: 1.6;
                text-align: center;

                strong {
                    color: ${({ theme }) => theme.colors.text};
                    font-weight: 600;
                }
            }

            button {
                font-size: 2.5rem;
                color: ${({ theme }) => theme.colors.primary};
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                padding: 12px;
                border-radius: 16px;
                background: ${({ theme }) => theme.colors.background};
                box-shadow: ${({ theme }) => theme.shadows.sm};

                a {
                    color: inherit;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                &:hover {
                    color: ${({ theme }) => theme.colors.primaryHover};
                    transform: translateY(-4px) scale(1.1);
                    box-shadow: ${({ theme }) => theme.shadows.lg}, ${({ theme }) => theme.shadows.glow};
                    background: ${({ theme }) => theme.colors.gradient};
                    
                    a {
                        color: ${({ theme }) => theme.colors.secondary};
                    }
                }
            }
        }
    }
`;

export default ContactStyled;