import { GetStaticProps } from "next";

import { Card, CardProps } from "../components/Card";

import HomeStyled from "./style";

interface HomeProps {
  cards: CardProps[];
}

const HomePage = ({ cards }: HomeProps) => {
  return (
    <HomeStyled>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </HomeStyled>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // adicionar projetos
  const cards = [
    {
      id: 1,
      title: "Sua Música",
      description:
        "Projeto desenvolvido em time, reconstruído utilizando Nextjs, serviço prestado para Sua Música, uma plataforma de lançamento de Artistas independentes do Brasil.",
      img: "/img/portfolio/suamusica.jpg",
      link: "https://suamusica.com.br",
    },
    {
      id: 2,
      title: "WDB",
      description:
        "Web Dev Brasil, site criado em grupo para TCC, uma Startup, focada em criação de sites e aplicativos.",
      img: "/img/portfolio/wdb.png",
      // link: "https://wdb-five.vercel.app/",
      link: "https://wdb-five.vercel.app/",
    },
    {
      id: 3,
      title: "Moments",
      description:
        "Projeto angular para registrar seus momentos, sem login apenas registre seus melhores momentos com direito a comentários para todo o mundo, feito com testes unitários e scss.",
      img: "/img/portfolio/moments-angular.png",
      link: "",
      github: "https://github.com/joseAllisson/angular-moments",
    },
    {
      id: 4,
      title: "PetWash",
      description:
        "Um Petshop, para vários tipos de Pets! Site responsivo e com estruturas otimizadas. Segunda site desenvolvido em grupo para TCC, feito com HTML puro.",
      img: "/img/portfolio/pet.png",
      // link: "http://petwash.epizy.com",
      link: "https://petwash.vercel.app",
      github: "https://github.com/joseAllisson/petwash",
    },
    {
      id: 5,
      title: "Dogs",
      description:
        "Uma rede social para Postar fotos de seus Pets. Criado com React.js utilizando uma API WordPress para cadastrar usuários e posts.",
      img: "/img/portfolio/dogs.png",
      // link: "http://rede-cachorro.epizy.com",
      link: "",
      github: "https://github.com/joseAllisson/Dogs",
    },
    {
      id: 6,
      title: "Sistema controle de acesso",
      description:
        "A aplicação Access foi desenvolvida para solucionar problemas de gestão de um condomínio, sendo uma iniciativa totalmente original e gratuita. A aplicação foi desenvolvida em PHP MVC puro em português como desafio.",
      img: "/img/portfolio/sistema-controle-acesso.png",
      // link: "http://rede-cachorro.epizy.com",
      link: "",
      github: "https://github.com/joseAllisson/sistema-controle-acesso",
    },
    {
      id: 8,
      title: "Notícias cidade",
      description: "Seu portal de notícias diário! um blog otimizado e simplificado com WordPress.",
      img: "/img/portfolio/portal.png",
      // link: "http://portalcidade.epizy.com/",
      link: "",
    },
    {
      id: 9,
      title: "WDB blog",
      description: "Web Dev Brasil transformado em um blog utilizando WordPress.",
      img: "/img/portfolio/wdb-blog.png",
      // link: "http://wdb.epizy.com/blog/",
      link: "",
    },
  ];

  return {
    props: {
      cards,
    },
  };
};

export default HomePage;
