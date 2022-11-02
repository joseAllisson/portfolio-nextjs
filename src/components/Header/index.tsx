import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Text } from "../Text";
import { HeaderStyled } from "./style";
import Profile from "../../assets/img/perfil.png";
import { NavTabs } from "../Tabs";

// import "./style.css";

export const Header = () => {
  const location = useRouter();
  const path = location.pathname;

  return (
    <HeaderStyled>
      <section className="background-image">
        {/* criar componentes expecificos para isso */}
        {/* <Link href="/cv" target="_blank" className="btn btn-header btn-docs" title="Currículo PDF">
                <i className="far fa-file-alt"></i>
            </Link>

            <a href="#section" className="btn btn-header btn-arrow-bottom">
                <i className="far fa-arrow-down"></i>
            </a> 
        */}

        <div className="profile-container">
          <Image
            src={Profile}
            alt="Jose Alisson"
            height={150}
            width={150}
            className="profile-img"
            priority
          />

          {/* <div> */}
          <h1>José Alisson Bezerra</h1>
          <Text fontSize="1.2rem">Portfólio</Text>
          {/* </div> */}
        </div>
      </section>

      <section id="content" className="menu">
        {/* tabs */}
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
