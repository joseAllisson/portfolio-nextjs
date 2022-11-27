import styled from "styled-components";
import { mediaDevice } from "../../styles/responsive/mediaDevice";

const AboutStyled = styled.section`
    section {
        padding: 24px;
        color: ${({ theme }) => theme.colors.text};
    }
    
    h2 {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
    }

    .animated-text {
        display: flex;
        justify-content: center;
        gap: 8px;

        h3 {
            font-size: 2rem;
            font-weight: 400;
            text-align: center;
            display: flex;
            justify-content: center;
            gap: 8px;
        }

        @media ${mediaDevice.tablet} {
            flex-direction: column;
            gap: 0;
        }
    }

    hr {
        margin: 16px 0;
    }

    .profile-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 28px;

        @media ${mediaDevice.tablet} {
            flex-wrap: wrap;
        }
    }

    .course-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;

        @media ${mediaDevice.tablet} {
            grid-template-columns: 1fr;
        }

        article {
            padding: 24px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 8px;
            border: 1px solid ${({ theme }) => theme.colors.border};

            h3 {
                font-size: 1.5rem;
            }
        }

        a {
            text-decoration: none;
            cursor: pointer;
            transition: 0.2s;

            &:hover {
                background-color: ${({ theme }) => theme.colors.primary};
                color: #ffffff;

                h3 {
                    color: #ffffff;
                }
            }
        }
    }
`;

export default AboutStyled;