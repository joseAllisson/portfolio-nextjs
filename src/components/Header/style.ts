import styled from "styled-components";
import { mediaDevice } from "../../styles/responsive/mediaDevice";

interface HeaderStyledProps {
  $isScrolled: boolean;
}

export const HeaderStyled = styled.header<HeaderStyledProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme, $isScrolled }) =>
    $isScrolled
      ? theme.title === "dark"
        ? "rgba(15, 23, 42, 0.8)"
        : "rgba(255, 255, 255, 0.8)"
      : "transparent"};
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid
    ${({ theme, $isScrolled }) =>
      $isScrolled ? theme.colors?.border || "rgba(255, 255, 255, 0.1)" : "transparent"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  .header-container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;

    @media ${mediaDevice.tablet} {
      padding: 16px 24px;
    }

    @media ${mediaDevice.mobile} {
      padding: 12px 20px;
    }
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    .logo-circle {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid ${({ theme }) => theme.colors?.primary || "#6366f1"};
      box-shadow: ${({ theme }) => theme.shadows?.md || "0 4px 6px -1px rgba(0, 0, 0, 0.1)"};
      transition: all 0.3s ease;

      &:hover {
        box-shadow: ${({ theme }) => theme.shadows?.glow || "0 0 20px rgba(99, 102, 241, 0.3)"};
      }

      .logo-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .logo-text {
      font-size: 1.5rem;
      font-weight: 800;
      background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .header-actions {
    display: flex;
    align-items: center;
    gap: 12px;

    .theme-toggle {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: ${({ theme }) => theme.colors?.backgroundSecondary || "#f8fafc"};
      border: 1px solid ${({ theme }) => theme.colors?.border || "#e2e8f0"};
      color: ${({ theme }) => theme.colors?.text || "#1e293b"};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
        transform: translate(-50%, -50%);
        transition: width 0.4s, height 0.4s;
        opacity: 0.1;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows?.lg || "0 10px 15px -3px rgba(0, 0, 0, 0.1)"};
        border-color: ${({ theme }) => theme.colors?.primary || "#6366f1"};

        &::before {
          width: 200px;
          height: 200px;
        }
      }

      &:active {
        transform: translateY(0);
      }
    }

    .cv-button {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: ${({ theme }) => theme.colors?.backgroundSecondary || "#f8fafc"};
      border: 1px solid ${({ theme }) => theme.colors?.border || "#e2e8f0"};
      color: ${({ theme }) => theme.colors?.text || "#1e293b"};
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
        transform: translate(-50%, -50%);
        transition: width 0.4s, height 0.4s;
        opacity: 0.1;
      }

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows?.lg || "0 10px 15px -3px rgba(0, 0, 0, 0.1)"};
        border-color: ${({ theme }) => theme.colors?.primary || "#6366f1"};

        &::before {
          width: 200px;
          height: 200px;
        }
      }

      &:active {
        transform: translateY(0);
      }
    }

    .cv-button {
      width: auto;
      padding: 0 16px;
      gap: 8px;
      font-weight: 600;
      font-size: 0.875rem;

      span {
        position: relative;
        z-index: 1;
      }
    }

    .mobile-menu-toggle {
      display: none;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: ${({ theme }) => theme.colors?.backgroundSecondary || "#f8fafc"};
      border: 1px solid ${({ theme }) => theme.colors?.border || "#e2e8f0"};
      color: ${({ theme }) => theme.colors?.text || "#1e293b"};
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;

      @media ${mediaDevice.tablet} {
        display: flex;
      }

      &:hover {
        background: ${({ theme }) => theme.colors?.primary || "#6366f1"};
        color: ${({ theme }) => theme.colors?.secondary || "#ffffff"};
      }
    }
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  justify-content: center;

  @media ${mediaDevice.tablet} {
    display: none;
  }

  .nav-link {
    padding: 10px 20px;
    border-radius: 12px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors?.textSecondary || "#64748b"};
    font-weight: 500;
    font-size: 0.95rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 60%;
      height: 2px;
      background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
      border-radius: 2px;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: ${({ theme }) => theme.colors?.text || "#1e293b"};
      background: ${({ theme }) => theme.colors?.backgroundSecondary || "#f8fafc"};

      &::after {
        transform: translateX(-50%) scaleX(1);
      }
    }

    &.active {
      color: ${({ theme }) => theme.colors?.primary || "#6366f1"};
      background: ${({ theme }) => theme.colors?.backgroundSecondary || "#f8fafc"};
      font-weight: 600;

      &::after {
        transform: translateX(-50%) scaleX(1);
      }
    }
  }
`;

interface MobileMenuStyledProps {
  $isOpen: boolean;
}

export const MobileMenuStyled = styled.nav<MobileMenuStyledProps>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: ${({ $isOpen }) => ($isOpen ? "20px" : "0")};
  background: ${({ theme }) => theme.colors?.background || "#ffffff"};
  border-top: ${({ $isOpen }) => ($isOpen ? "1px solid" : "none")} ${({ theme }) => theme.colors?.border || "#e2e8f0"};
  max-height: ${({ $isOpen }) => ($isOpen ? "400px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};

  @media ${mediaDevice.tablet} {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  }

  .mobile-nav-link {
    padding: 16px 20px;
    border-radius: 12px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors?.text || "#1e293b"};
    font-weight: 500;
    transition: all 0.3s ease;
    margin-bottom: 8px;

    &:hover {
      background: ${({ theme }) => theme.colors?.backgroundSecondary || "#f8fafc"};
      color: ${({ theme }) => theme.colors?.primary || "#6366f1"};
    }

    &.active {
      background: ${({ theme }) => theme.colors?.gradient || "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"};
      color: ${({ theme }) => theme.colors?.secondary || "#ffffff"};
      font-weight: 600;
    }
  }
`;
