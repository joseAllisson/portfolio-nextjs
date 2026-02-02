import styled, { keyframes } from "styled-components";
import { mediaDevice } from "../../styles/responsive/mediaDevice";

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const shimmer = keyframes`
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    z-index: 999999;
    animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalWrapper = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9999999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 80px;

    @media ${mediaDevice.tablet} {
        padding: 0;
        align-items: flex-start;
    }
`;

export const NavButton = styled.button`
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 99999999;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

    &:hover {
        background: ${({ theme }) => theme.colors.gradient};
        color: ${({ theme }) => theme.colors.secondary};
        border-color: transparent;
        transform: translateY(-50%) scale(1.1);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4),
                    ${({ theme }) => theme.shadows?.glow};
    }

    &:active {
        transform: translateY(-50%) scale(0.95);
    }

    &.prev {
        left: 16px;
    }

    &.next {
        right: 16px;
    }

    @media ${mediaDevice.tablet} {
        position: relative;
        top: auto;
        bottom: auto;
        left: auto !important;
        right: auto !important;
        transform: none;
        width: 44px;
        height: 44px;
        font-size: 1.125rem;
        flex-shrink: 0;

        &:hover {
            transform: scale(1.05);
        }

        &:active {
            transform: scale(0.95);
        }
    }
`;

export const MobileNavBar = styled.div`
    display: none;

    @media ${mediaDevice.tablet} {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99999999;
        background: ${({ theme }) => theme.colors.backgroundSecondary};
        border-top: 1px solid ${({ theme }) => theme.colors.border};
        padding: 12px 20px;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }

    .nav-dots {
        display: flex;
        gap: 6px;
        align-items: center;
        justify-content: center;
        flex: 1;

        .dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${({ theme }) => theme.colors.border};
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;
            padding: 0;

            &:hover {
                background: ${({ theme }) => theme.colors.textSecondary};
            }

            &.active {
                background: ${({ theme }) => theme.colors.primary};
                width: 20px;
                border-radius: 4px;
            }
        }
    }
`;

export const ModalContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    max-height: 85vh;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    border-radius: 24px;
    overflow: hidden;
    animation: ${slideIn} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 25px 80px -12px rgba(0, 0, 0, 0.6),
                ${({ theme }) => theme.shadows?.glow || '0 0 60px rgba(99, 102, 241, 0.2)'};
    border: 1px solid ${({ theme }) => theme.colors.border};
    display: flex;
    flex-direction: row;
    position: relative;

    @media ${mediaDevice.tablet} {
        flex-direction: column;
        max-height: 100vh;
        height: 100vh;
        max-width: 100%;
        border-radius: 0;
        border: none;
        overflow-y: auto;
        padding-bottom: 80px;
    }

    .modal-image-section {
        flex: 1.2;
        position: relative;
        min-height: 450px;
        background: ${({ theme }) => theme.colors.background};
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        @media ${mediaDevice.tablet} {
            min-height: 220px;
            height: 220px;
            flex: none;
        }

        .image-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
        }

        .image-skeleton {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                90deg,
                ${({ theme }) => theme.colors.background} 0%,
                ${({ theme }) => theme.colors.backgroundSecondary} 50%,
                ${({ theme }) => theme.colors.background} 100%
            );
            background-size: 200% 100%;
            animation: ${shimmer} 1.5s infinite;
            z-index: 1;
        }

        &::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
                90deg,
                transparent 60%,
                ${({ theme }) => theme.colors.backgroundSecondary} 100%
            );
            pointer-events: none;
            z-index: 2;

            @media ${mediaDevice.tablet} {
                background: linear-gradient(
                    180deg,
                    transparent 40%,
                    ${({ theme }) => theme.colors.backgroundSecondary} 100%
                );
            }
        }
    }

    .modal-content-section {
        flex: 1;
        padding: 48px 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;

        @media ${mediaDevice.tablet} {
            padding: 20px 24px 24px;
            margin-top: -50px;
            position: relative;
            z-index: 3;
        }

        .project-number {
            font-size: 0.875rem;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.primary};
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 12px;
            opacity: 0.8;
        }

        h2 {
            background: ${({ theme }) => theme.colors.gradient};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-size: clamp(1.75rem, 4vw, 2.75rem);
            font-weight: 800;
            margin-bottom: 20px;
            line-height: 1.1;
            letter-spacing: -0.02em;
        }

        .description {
            color: ${({ theme }) => theme.colors.textSecondary};
            font-size: 1.05rem;
            line-height: 1.8;
            margin-bottom: 32px;

            @media ${mediaDevice.tablet} {
                font-size: 0.95rem;
                margin-bottom: 24px;
            }
        }

        .modal-actions {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;

            @media ${mediaDevice.tablet} {
                flex-direction: row;
                gap: 10px;
            }

            a, button {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                padding: 14px 24px;
                border-radius: 12px;
                font-weight: 600;
                font-size: 0.95rem;
                text-decoration: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                border: none;
                cursor: pointer;

                @media ${mediaDevice.tablet} {
                    flex: 1;
                    padding: 12px 16px;
                    font-size: 0.85rem;
                    gap: 6px;
                    border-radius: 10px;
                }

                svg {
                    font-size: 1rem;

                    @media ${mediaDevice.tablet} {
                        font-size: 0.9rem;
                    }
                }
            }

            .btn-primary {
                background: ${({ theme }) => theme.colors.gradient};
                color: ${({ theme }) => theme.colors.secondary};
                box-shadow: ${({ theme }) => theme.shadows?.md};

                &:hover {
                    transform: translateY(-2px);
                    box-shadow: ${({ theme }) => theme.shadows?.lg},
                                ${({ theme }) => theme.shadows?.glow};
                }
            }

            .btn-secondary {
                background: ${({ theme }) => theme.colors.background};
                color: ${({ theme }) => theme.colors.text};
                border: 1px solid ${({ theme }) => theme.colors.border};

                &:hover {
                    border-color: ${({ theme }) => theme.colors.primary};
                    transform: translateY(-2px);
                }
            }

            .btn-disabled {
                opacity: 0.4;
                cursor: not-allowed;
                pointer-events: none;
            }
        }
    }

    .close-button {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: white;
        font-size: 1.125rem;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        z-index: 100;

        &:hover {
            background: ${({ theme }) => theme.colors.primary};
            transform: rotate(90deg);
            border-color: transparent;
        }

        @media ${mediaDevice.tablet} {
            position: fixed;
            top: 40px;
            right: 16px;
            width: 44px;
            height: 44px;
            z-index: 99999999;
            background: ${({ theme }) => theme.colors.backgroundSecondary};
            border: 1px solid ${({ theme }) => theme.colors.border};
            color: ${({ theme }) => theme.colors.text};
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

            &:hover {
                background: ${({ theme }) => theme.colors.primary};
                color: ${({ theme }) => theme.colors.secondary};
            }
        }
    }

    .project-counter {
        position: absolute;
        bottom: 16px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 8px;
        z-index: 10;

        @media ${mediaDevice.tablet} {
            display: none;
        }

        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${({ theme }) => theme.colors.border};
            transition: all 0.3s ease;
            cursor: pointer;
            border: none;

            &:hover {
                background: ${({ theme }) => theme.colors.textSecondary};
            }

            &.active {
                background: ${({ theme }) => theme.colors.primary};
                width: 28px;
                border-radius: 5px;
            }
        }
    }
`;
