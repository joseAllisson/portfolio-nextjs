import styled from "styled-components";
import { mediaDevice } from "../../styles/responsive/mediaDevice";

export const ProjectsPageStyled = styled.section`
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 32px 40px;
  animation: fadeIn 0.6s ease-out;

  @media ${mediaDevice.mobile} {
    padding: 50px 20px 30px;
  }

  .page-header {
    text-align: center;
    margin-bottom: 32px;

    h1 {
      font-size: clamp(2.5rem, 6vw, 4rem);
      font-weight: 800;
      background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }

    p {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors?.textSecondary || "#64748b"};
      max-width: 700px;
      margin: 0 auto;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 32px;

    @media ${mediaDevice.tablet} {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
    }

    @media ${mediaDevice.mobile} {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }
`;
