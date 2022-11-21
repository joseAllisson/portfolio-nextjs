import styled from "styled-components";

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
        font-size: 2rem;
        font-weight: 400;
        text-align: center;
        display: flex;
        justify-content: center;
        gap: 8px;
    }

    hr {
        margin: 16px 0;
    }

    .profile-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 28px;
    }

    .course-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;

        article {
            padding: 24px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 8px;

            h3 {
                font-size: 1.5rem;
            }
        }
    }
`;

export default AboutStyled;