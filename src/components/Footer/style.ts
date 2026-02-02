import styled from "styled-components";

export const FooterStyled = styled.footer`
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    padding: 32px 24px 24px;
    margin-top: 64px;
    position: relative;
    z-index: 1;

    .social-section {
        margin-bottom: 24px;
    }

    .social-title {
        font-size: 0.875rem;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.textSecondary};
        margin-bottom: 12px;
        padding: 0;
        text-align: center;
        width: 100%;
        display: block;
    }

    .buttons-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 16px;

        a {
            text-decoration: none;
        }

        button {
            padding: 14px;
            font-size: 1.5rem;
            background: ${({ theme }) => theme.colors.background};
            border: 2px solid ${({ theme }) => theme.colors.border};
            border-radius: 16px;
            color: ${({ theme }) => theme.colors.text};
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: ${({ theme }) => theme.shadows.sm};
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
                background: ${({ theme }) => theme.colors.gradient};
                transform: translate(-50%, -50%);
                transition: width 0.6s, height 0.6s;
                z-index: 0;
            }

            &:hover {
                color: ${({ theme }) => theme.colors.secondary};
                border-color: ${({ theme }) => theme.colors.primary};
                transform: translateY(-4px) scale(1.1);
                box-shadow: ${({ theme }) => theme.shadows.lg}, ${({ theme }) => theme.shadows.glow};
            }

            &:hover::before {
                width: 300px;
                height: 300px;
            }

            svg {
                position: relative;
                z-index: 1;
            }
        }
    }
    
    .background-primary {
        background: ${({ theme }) => theme.colors.gradient};
        color: ${({ theme }) => theme.colors.secondary};
        padding: 16px 32px;
        border-radius: 12px;
        display: inline-block;
        font-weight: 600;
        box-shadow: ${({ theme }) => theme.shadows.md};
        margin-top: 24px;
    }
`;