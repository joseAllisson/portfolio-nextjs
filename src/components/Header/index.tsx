import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { VscFilePdf } from "react-icons/vsc";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";

import { GlobalContext } from "../../context/GlobalContext";
import { HeaderStyled, NavStyled, MobileMenuStyled } from "./style";

export const Header = () => {
  const { theme, toggleTheme } = useContext(GlobalContext);
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", link: "/", path: "/" },
    { label: "Sobre", link: "/about", path: "/about" },
    { label: "Projetos", link: "/projects", path: "/projects" },
    { label: "Contato", link: "/contact", path: "/contact" },
  ];

  const isActive = (path: string) => router.pathname === path;

  return (
    <HeaderStyled $isScrolled={isScrolled}>
      <div className="header-container">
        <Link href="/" className="logo">
          <div className="logo-circle">
            <Image
              src="/img/perfil2.jpg"
              alt="José Bezerra"
              width={40}
              height={40}
              className="logo-img"
              priority
            />
          </div>
          <span className="logo-text">JB</span>
        </Link>

        <NavStyled>
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.link}
              className={`nav-link ${isActive(item.path) ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </NavStyled>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {theme.title === "dark" ? <MdLightMode size={22} /> : <MdDarkMode size={22} />}
          </button>

          <button
            className="cv-button"
            onClick={() => window.open("/docs/cv.pdf", "_blank")}
            aria-label="Baixar currículo"
          >
            <VscFilePdf size={18} />
            <span>CV</span>
          </button>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      <MobileMenuStyled $isOpen={mobileMenuOpen}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.link}
            className={`mobile-nav-link ${isActive(item.path) ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </MobileMenuStyled>
    </HeaderStyled>
  );
};
