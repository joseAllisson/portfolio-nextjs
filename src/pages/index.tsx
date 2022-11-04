import { GetStaticProps } from "next";

import { Card } from "../components/Card";

import { HomeStyled } from "./style";

// adicionar projetos
const cards = [
  {
    id: 1,
    title: "WDB",
    description:
      "Web Dev Brasil, site criado em grupo para TCC, uma empresa, Startup, focada em criação de sites e aplicativos.",
    img: "/img/portfolio/wdb.png",
    // link: "http://wdb-c.epizy.com",
    link: "",
  },
  {
    id: 2,
    title: "PetWash",
    description:
      "Um Petshop, para vários tipos de Pets! Site responsivo e com estruturas otimizadas.",
    img: "/img/portfolio/pet.png",
    // link: "http://petwash.epizy.com",
    link: "",
  },
  {
    id: 3,
    title: "Dogs",
    description:
      "Uma rede social para Postar fotos de seus Pets. Criado com React.js utilizando uma API WordPress para cadastrar usuários e posts.",
    img: "/img/portfolio/dogs.png",
    // link: "http://rede-cachorro.epizy.com",
    link: "",
  },
  {
    id: 4,
    title: "Notícia cidade",
    description: "Seu portal de notícias diário! um blog otimizado e simplificado com WordPress.",
    img: "/img/portfolio/portal.png",
    // link: "http://portalcidade.epizy.com/",
    link: "",
  },
  {
    id: 5,
    title: "WDB blog",
    description: "Web Dev Brasil transformado em um blog utilizando WordPress.",
    img: "/img/portfolio/wdb-blog.png",
    // link: "http://wdb.epizy.com/blog/",
    link: "",
  },
];

const Home = () => {
  return (
    <HomeStyled>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </HomeStyled>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
