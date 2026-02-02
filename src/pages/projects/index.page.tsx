import { GetStaticProps } from "next";
import { useState } from "react";

import { Card, CardProps } from "../../components/Card";
import { ProjectModal } from "../../components/ProjectModal";
import { ProjectsPageStyled } from "./_style";

interface ProjectsProps {
  cards: CardProps[];
}

const ProjectsPage = ({ cards }: ProjectsProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentProjectIndex(index);
    setModalOpen(true);
  };

  return (
    <ProjectsPageStyled>
      <div className="page-header">
        <h1>Meus Projetos</h1>
        <p>Uma coleção completa dos projetos que desenvolvi ao longo da minha jornada como desenvolvedor</p>
      </div>
      <div className="projects-grid">
        {cards.map((card, index) => (
          <Card 
            key={card.id} 
            {...card} 
            onPreview={() => openModal(index)}
          />
        ))}
      </div>

      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        projects={cards}
        currentIndex={currentProjectIndex}
        onNavigate={setCurrentProjectIndex}
      />
    </ProjectsPageStyled>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const cards = [
    {
      id: 1,
      title: "Trocafone",
      description:
        "Manutenção e criação de novas funcionalidades no site da Trocafone. A Trocafone é uma empresa que compra e vende smartphones e tablets seminovos, com a garantia que funcionam como aparelhos novos.",
      img: "/img/portfolio/trocafone.png",
      link: "https://www.trocafone.com.br",
    },
    {
      id: 2,
      title: "Sua Música",
      description:
        "Projeto desenvolvido em time, reconstruído utilizando Nextjs, serviço prestado para Sua Música, uma plataforma de lançamento de Artistas independentes do Brasil.",
      img: "/img/portfolio/suamusica.jpg",
      link: "https://suamusica.com.br",
    },
    {
      id: 3,
      title: "WDB",
      description:
        "Web Dev Brasil, site criado em grupo para TCC, uma Startup, focada em criação de sites e aplicativos.",
      img: "/img/portfolio/wdb.png",
      link: "https://wdb-five.vercel.app/",
    },
    {
      id: 4,
      title: "Moments",
      description:
        "Projeto angular para registrar seus momentos, sem login apenas registre seus melhores momentos com direito a comentários para todo o mundo, feito com testes unitários e scss.",
      img: "/img/portfolio/moments-angular.png",
      link: "",
      github: "https://github.com/joseAllisson/angular-moments",
    },
    {
      id: 5,
      title: "Ranek",
      description:
        "Projeto Vue.js para criar uma loja virtual, compras, vendas, cadastro de produtos, a api reseta os dados a cada 10 minutos, feito com Vue e Pinia.",
      img: "/img/portfolio/ranek.png",
      link: "https://js-ranek.vercel.app",
      github: "https://github.com/joseAllisson/vue-ranek",
    },
    {
      id: 6,
      title: "PetWash",
      description:
        "Um Petshop, para vários tipos de Pets! Site responsivo e com estruturas otimizadas. Segundo site desenvolvido em grupo para TCC, feito com HTML puro.",
      img: "/img/portfolio/pet.png",
      link: "https://petwash.vercel.app",
      github: "https://github.com/joseAllisson/petwash",
    },
    {
      id: 7,
      title: "Dogs",
      description:
        "Uma rede social para Postar fotos de seus Pets. Criado com React.js utilizando uma API WordPress para cadastrar usuários e posts.",
      img: "/img/portfolio/dogs.png",
      link: "",
      github: "https://github.com/joseAllisson/Dogs",
    },
    {
      id: 8,
      title: "Sistema controle de acesso",
      description:
        "A aplicação Access foi desenvolvida para solucionar problemas de gestão de um condomínio, sendo uma iniciativa totalmente original e gratuita. A aplicação foi desenvolvida em PHP MVC puro em português como desafio.",
      img: "/img/portfolio/sistema-controle-acesso.png",
      link: "",
      github: "https://github.com/joseAllisson/sistema-controle-acesso",
    },
    {
      id: 9,
      title: "Notícias cidade",
      description:
        "Seu portal de notícias diário! um blog otimizado e simplificado com WordPress.",
      img: "/img/portfolio/portal.png",
      link: "",
    },
    {
      id: 10,
      title: "WDB blog",
      description:
        "Web Dev Brasil transformado em um blog utilizando WordPress.",
      img: "/img/portfolio/wdb-blog.png",
      link: "",
    },
  ];

  return {
    props: {
      cards,
    },
  };
};

export default ProjectsPage;
