import styled from "styled-components";
import { mediaDevice } from "../styles/responsive/mediaDevice";

export const HomeStyled = styled.main`
  width: 100%;
`;

export const HeroSection = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 32px 40px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 600px;
    height: 600px;
    background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
    border-radius: 50%;
    opacity: 0.1;
    filter: blur(80px);
    animation: float 20s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 500px;
    height: 500px;
    background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
    border-radius: 50%;
    opacity: 0.08;
    filter: blur(60px);
    animation: float 15s ease-in-out infinite reverse;
  }

  .hero-content {
    max-width: 1400px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;

    @media ${mediaDevice.tablet} {
      grid-template-columns: 1fr;
      gap: 60px;
      text-align: center;
    }
  }

  .hero-text {
    animation: fadeIn 0.8s ease-out;

    .greeting {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors?.textSecondary || "#64748b"};
      margin-bottom: 16px;
      font-weight: 500;
    }

    h1 {
      font-size: clamp(2.5rem, 6vw, 5rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 24px;
      letter-spacing: -0.03em;

      .name {
        background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        display: block;
      }

      .role-line {
        display: block;
        margin-top: 8px;
        min-height: 1.2em;
        line-height: 1.2;
      }

      .role-static {
        color: ${({ theme }) => theme.colors?.text || "#1e293b"};
      }

      .role-dynamic {
        display: inline;
        color: ${({ theme }) => theme.colors?.primary || "#6366f1"};
      }

      .role-dynamic .typewriter-hero {
        display: inline-block;
        /* Reserva espaço da palavra mais longa (Fullstack) para evitar salto de layout */
        min-width: 9.5ch;
      }

      .role-dynamic .typewriter-text {
        display: inline;
      }

      .role-dynamic .typewriter-cursor {
        display: inline-block;
        width: 3px;
        min-width: 3px;
        height: 0.9em;
        background: currentColor;
        margin-left: 2px;
        vertical-align: text-bottom;
        animation: typewriter-blink 1s step-end infinite;
      }

      @keyframes typewriter-blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
    }

    .description {
      font-size: 1.125rem;
      line-height: 1.8;
      color: ${({ theme }) => theme.colors?.textSecondary || "#64748b"};
      margin-bottom: 40px;
      max-width: 600px;

      @media ${mediaDevice.tablet} {
        max-width: 100%;
      }
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      flex-wrap: wrap;

      @media ${mediaDevice.tablet} {
        justify-content: center;
      }

      .btn-primary,
      .btn-secondary {
        padding: 16px 32px;
        border-radius: 12px;
        font-weight: 600;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        cursor: pointer;
        border: none;
      }

      .btn-primary {
        background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
        color: ${({ theme }) => theme.colors?.secondary || "#ffffff"};
        box-shadow: ${({ theme }) => theme.shadows?.lg || "0 10px 15px -3px rgba(0, 0, 0, 0.1)"};

        &:hover {
          transform: translateY(-2px);
          box-shadow: ${({ theme }) => theme.shadows?.xl || "0 20px 25px -5px rgba(0, 0, 0, 0.1)"}, 
                      ${({ theme }) => theme.shadows?.glow || "0 0 20px rgba(99, 102, 241, 0.3)"};
        }
      }

      .btn-secondary {
        background: ${({ theme }) => theme.colors?.backgroundSecondary || "#f8fafc"};
        color: ${({ theme }) => theme.colors?.text || "#1e293b"};
        border: 1px solid ${({ theme }) => theme.colors?.border || "#e2e8f0"};

        &:hover {
          background: ${({ theme }) => theme.colors?.background || "#ffffff"};
          border-color: ${({ theme }) => theme.colors?.primary || "#6366f1"};
          transform: translateY(-2px);
        }
      }
    }
  }

  .hero-image {
    position: relative;
    animation: fadeIn 0.8s ease-out 0.2s both;

    @media ${mediaDevice.mobile} {
      display: none;
    }

    .image-wrapper {
      position: relative;
      width: 100%;
      max-width: 500px;
      margin: 0 auto;

      .profile-image {
        width: 100%;
        height: auto;
        border-radius: 24px;
        box-shadow: ${({ theme }) => theme.shadows?.xl || "0 20px 25px -5px rgba(0, 0, 0, 0.1)"};
        border: 4px solid ${({ theme }) => theme.colors?.backgroundSecondary || "#f8fafc"};
        animation: float 6s ease-in-out infinite;
      }

      .floating-badge {
        position: absolute;
        padding: 12px 20px;
        background: ${({ theme }) => theme.colors?.backgroundSecondary || "#f8fafc"};
        border: 1px solid ${({ theme }) => theme.colors?.border || "#e2e8f0"};
        border-radius: 50px;
        font-weight: 600;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors?.text || "#1e293b"};
        box-shadow: ${({ theme }) => theme.shadows?.md || "0 4px 6px -1px rgba(0, 0, 0, 0.1)"};
        backdrop-filter: blur(10px);
        animation: float 4s ease-in-out infinite;

        &.badge-1 {
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        &.badge-2 {
          top: 50%;
          right: -15%;
          animation-delay: 1s;
        }

        &.badge-3 {
          bottom: 20%;
          left: -5%;
          animation-delay: 2s;
        }

        &.badge-4 {
          top: 30%;
          right: -10%;
          animation-delay: 1.5s;
        }

        @media ${mediaDevice.mobile} {
          display: none;
        }
      }
    }
  }

  .scroll-indicator {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    animation: fadeIn 1s ease-out 1s both;

    @media ${mediaDevice.mobile} {
      display: none;
    }

    .mouse {
      width: 24px;
      height: 40px;
      border: 2px solid ${({ theme }) => theme.colors?.textSecondary || "#64748b"};
      border-radius: 12px;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 8px;
        background: ${({ theme }) => theme.colors?.primary || "#6366f1"};
        border-radius: 2px;
        animation: pulse 2s infinite;
      }
    }
  }
`;

export const ProjectsSection = styled.section`
  padding: 60px 32px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  @media ${mediaDevice.mobile} {
    padding: 40px 20px;
  }

  .section-divider {
    height: 2px;
    background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
    margin: 0 auto 40px;
    max-width: 200px;
    border-radius: 2px;
    opacity: 0.6;
    box-shadow: ${({ theme }) => theme.shadows?.glow || "0 0 20px rgba(99, 102, 241, 0.3)"};
    animation: fadeIn 0.6s ease-out;
  }

  .section-header {
    text-align: center;
    margin-bottom: 64px;
    animation: fadeIn 0.6s ease-out;

    h2 {
      font-size: clamp(2rem, 5vw, 3.5rem);
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
      max-width: 600px;
      margin: 0 auto;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    gap: 32px;
    animation: fadeIn 0.6s ease-out 0.2s both;

    @media ${mediaDevice.tablet} {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 24px;
    }

    @media ${mediaDevice.mobile} {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: 16px;
      padding-bottom: 16px;
      margin: 0 -20px;
      padding-left: 20px;
      padding-right: 20px;
      -webkit-overflow-scrolling: touch;

      &::-webkit-scrollbar {
        height: 6px;
      }

      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors?.primary || "#6366f1"};
        border-radius: 3px;
      }

      &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors?.border || "#e2e8f0"};
        border-radius: 3px;
      }

      > * {
        flex: 0 0 280px;
        scroll-snap-align: start;
      }
    }
  }

  .view-more-container {
    display: flex;
    justify-content: center;
    margin-top: 24px;
    animation: fadeIn 0.6s ease-out 0.3s both;
  }

  .view-more-btn {
    padding: 16px 32px;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
    color: ${({ theme }) => theme.colors?.secondary || "#ffffff"};
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${({ theme }) => theme.shadows?.lg || "0 10px 15px -3px rgba(0, 0, 0, 0.1)"};

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows?.xl || "0 20px 25px -5px rgba(0, 0, 0, 0.1)"}, 
                  ${({ theme }) => theme.shadows?.glow || "0 0 20px rgba(99, 102, 241, 0.3)"};
    }
  }
`;

export default HomeStyled;
