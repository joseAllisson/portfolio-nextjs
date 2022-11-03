import Image from "next/image";
import { VscFilePdf } from "react-icons/vsc";
import { AiOutlineArrowDown } from "react-icons/ai";

import { Text } from "../Text";
import Profile from "../../assets/img/perfil.png";
import { NavTabs } from "../Tabs";
import { AnimatedButton } from "../AnimatedButton";

import { HeaderStyled } from "./style";

export const Header = () => {
  return (
    <HeaderStyled>
      <section className="background-image">
        <div className="animated-button-container">
          <a href="/docs/cv.pdf" target="_blank">
            <AnimatedButton animation="moveRight" icon={<VscFilePdf size={28} />} />
          </a>
          <a href="#content">
            <AnimatedButton animation="moveLeft" icon={<AiOutlineArrowDown size={28} />} />
          </a>
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
