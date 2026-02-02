import styled from "styled-components";
import { mediaDevice } from "../../styles/responsive/mediaDevice";

const AboutStyled = styled.section`
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px 24px;
    animation: fadeIn 0.6s ease-out;

    section {
        padding: 16px 0;
        color: ${({ theme }) => theme.colors.text};

        @media ${mediaDevice.mobile} {
            padding: 12px 0;
        }
    }
    
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

    .animated-text {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin-bottom: 24px;
        flex-wrap: wrap;

        h3 {
            font-size: clamp(1.75rem, 3vw, 2.5rem);
            font-weight: 600;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;

            &.locked {
                color: ${({ theme }) => theme.colors.text};
            }
        }

        @media ${mediaDevice.tablet} {
            flex-direction: column;
            gap: 8px;
        }
    }

    .profile-img {
        border-radius: 50%;
        border: 6px solid ${({ theme }) => theme.colors.secondary};
        box-shadow: ${({ theme }) => theme.shadows.xl}, ${({ theme }) => theme.shadows.glow};
        transition: all 0.3s ease;
        animation: float 6s ease-in-out infinite;

        &:hover {
            transform: scale(1.05);
            box-shadow: ${({ theme }) => theme.shadows.xl}, 0 0 40px rgba(99, 102, 241, 0.4);
        }
    }

    hr {
        margin: 24px 0;
        border: none;
        height: 2px;
        background: ${({ theme }) => theme.colors.gradient};
        opacity: 0.3;
    }

    .profile-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 24px;
        margin-bottom: 24px;
        padding: 24px;
        background: ${({ theme }) => theme.colors.backgroundSecondary};
        border-radius: 24px;
        box-shadow: ${({ theme }) => theme.shadows.md};

        @media ${mediaDevice.tablet} {
            flex-direction: column;
            gap: 16px;
            text-align: center;
        }
    }

    .course-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 24px;
        margin-top: 32px;

        @media ${mediaDevice.mobile} {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        article {
            padding: 32px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 12px;
            background: ${({ theme }) => theme.colors.backgroundSecondary};
            border: 1px solid ${({ theme }) => theme.colors.border};
            border-radius: 20px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: ${({ theme }) => theme.shadows.sm};

            &:hover {
                transform: translateY(-4px);
                box-shadow: ${({ theme }) => theme.shadows.lg};
                border-color: ${({ theme }) => theme.colors.primary};
            }

            h3 {
                font-size: 1.5rem;
                font-weight: 600;
                color: ${({ theme }) => theme.colors.text};
                margin-bottom: 8px;
            }
        }

        a {
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

            article {
                &:hover {
                    background: ${({ theme }) => theme.colors.gradient};
                    transform: translateY(-6px) scale(1.02);
                    box-shadow: ${({ theme }) => theme.shadows.xl}, ${({ theme }) => theme.shadows.glow};

                    h3, p {
                        color: ${({ theme }) => theme.colors.secondary};
                    }
                }
            }
        }
    }
`;

export default AboutStyled;