import { useState } from "react";
import { useRouter } from "next/router";
import { VscFilePdf } from "react-icons/vsc";
import { AiOutlineArrowDown } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import Image from "next/image";

import Profile from "../../assets/img/perfil.png";
import { Text } from "../Text";
import { NavTabs } from "../Tabs";
import { FloatingMenu, FloatingMenuItem, FloatingMenuItemProps } from "../FloatingMenu";

import { HeaderStyled } from "./style";

export const Header = () => {
  const { push  } = useRouter();
  const [open, setOpen] = useState(false);
  const menu: FloatingMenuItemProps[] = [
    {
      index: 1,
      onClick: () => push("#content"),
      children: <MdDarkMode size={28} />,
      tooltip: "Rolar para baixo",
    },
    {
      index: 2,
      onClick: () => window.open("/docs/cv.pdf", '_blank'),
      children: <VscFilePdf size={28} />,
      tooltip: "Currículo em PDF",
    },
    {
      index: 3,
      onClick: () => push("#content"),
      children: <AiOutlineArrowDown size={28} />,
      tooltip: "Rolar para baixo",
    },
  ];

  return (
    <HeaderStyled>
      <section className="background-image">
        <div className="animated-button-container">
          <FloatingMenu open={open} onChange={(newValue) => setOpen(newValue)}>
            {menu.map(({ index, children, ...item }) => (
              <FloatingMenuItem {...item} index={index} key={index}>
                {children}
              </FloatingMenuItem>
            ))}
          </FloatingMenu>
        </div>

        <div className="profile-container">
          <Image
            src={Profile}
            alt="Jose Alisson"
            height={150}
            width={150}
            className="profile-img"
            priority
          />
          <h1>José Alisson Bezerra</h1>
          <Text fontSize="1.2rem">Portfólio</Text>
        </div>
      </section>

      <section id="content" className="menu">
        <NavTabs
          tabs={[
            { label: "Sobre", link: "/about" },
            { label: "Portfólio", link: "/" },
            { label: "Contato", link: "/contact" },
          ]}
        />
      </section>
    </HeaderStyled>
  );
};
