import styled from "styled-components";

export const NavTabsStyled = styled.div`
    height: 60px;
    

    div {
        height: 100%;
    }

    .tabs {
        .tab {
            font-family: ${({ theme }) => theme.fontFamily.primary};
            font-size: 0.95rem;

            &:hover {
                color: ${({ theme }) => theme.colors.primary};
            }
        }
    
        .active {
            color: ${({ theme }) => theme.colors.primary};
        }
    
        .indicator {
            background-color: ${({ theme }) => theme.colors.primary};
        }
    }
`;