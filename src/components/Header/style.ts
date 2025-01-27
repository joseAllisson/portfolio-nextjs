import styled from "styled-components";
import { mediaDevice } from "../../styles/responsive/mediaDevice";

export const HeaderStyled = styled.header`
    position: relative;

    .background-image {
        width: 100%;
        height: 30vh;
        min-height: 280px;
        max-height: 1170px;
        background-image: url("../img/header.jpg");
        background-position: center;
        background-size: cover;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // overflow-y: hidden;
        overflow-x: hidden;

        .profile-img {
            border-radius: 50%;
            border: 4px solid ${({ theme }) => theme.colors.background};
        }

        @media ${mediaDevice.tablet} {
            height: 40vh;
        }

        .animated-button-container {
            position: absolute;
            top: 10%;
            right: 10%;
            display: flex;
            flex-direction: column;
            gap: 40px;
            z-index: 10;

            @media ${mediaDevice.tablet} {
                top: 28px;
                right: 28px;
            }

            @media ${mediaDevice.mobile} {
                top: 16px;
                right: 28px;
            }
        }
    
        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: ${({ theme }) => theme.colors.secondary};
        }

        p {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }

    .menu {
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        box-shadow: 5px 5px 15px #1111113d;
        position: relative;
        z-index: 1;

        button {
            color: ${({ theme }) => theme.colors.text};
        }
    }

    .desktop {
        
        @media ${mediaDevice.tablet} {
            display: none;
        }
    }
`;