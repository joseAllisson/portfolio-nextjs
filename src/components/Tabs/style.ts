import styled from "styled-components";

export const NavTabsStyled = styled.div`
    height: 72px;
    max-width: 600px;
    margin: 0 auto;

    div {
        height: 100%;
    }

    .tabs {
        .tab {
            font-family: ${({ theme }) => theme.fontFamily.primary};
            font-size: 1rem;
            font-weight: 500;
            text-transform: none;
            letter-spacing: 0.01em;
            min-width: 120px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            color: ${({ theme }) => theme.colors.textSecondary};

            &:hover {
                color: ${({ theme }) => theme.colors.primary};
                background-color: ${({ theme }) => theme.colors.backgroundSecondary};
            }
        }
    
        .active {
            color: ${({ theme }) => theme.colors.primary};
            font-weight: 600;
        }
    
        .indicator {
            background: ${({ theme }) => theme.colors.gradient};
            height: 3px;
            border-radius: 3px 3px 0 0;
        }
    }
`;