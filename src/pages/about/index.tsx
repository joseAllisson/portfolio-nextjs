import { GetStaticProps } from "next";
import Image from "next/image";

import Profile from "../../assets/img/perfil.png";
import { Text } from "../../components/Text";

import { AboutStyled } from "./style";

interface coursesProps {
  id: number;
  title: string;
  institution: string;
  time: string;
}
interface AboutProps {
  formation: coursesProps[];
  courses: coursesProps[];
}

const AboutPage = ({ formation, courses }: AboutProps) => {
  return (
    <AboutStyled>
      <h2>Sobre</h2>
      <hr />
      <p>Desenvolvedor ...</p>
      <section className="profile-container">
        <Image src={Profile} width={280} height={280} alt="José Alisson" />
        <Text textAlign="justify">
          Bem vindo! sou programador, desde criança sempre gostei de tecnologia, mas quando conheci
          o mundo da programação, me apaixonei, e desde então venho estudando e me aperfeiçoando
          para me tornar um profissional cada vez melhor. Nada melhor que trabalhar com o que se
          gosta!
        </Text>
      </section>
      <hr />
      <h2>Formação</h2>
      <section className="course-container">
        {formation.map((course) => (
          <article key={course.id}>
            <h3>{course.title}</h3>
            <Text>{course.time}</Text>
            <Text fontWeight="600">{course.institution}</Text>
          </article>
        ))}
      </section>
      <h2>Cursos</h2>
      <section className="course-container">
        {courses.map((course) => (
          <article key={course.id}>
            <h3>{course.title}</h3>
            <Text>{course.time}</Text>
            <Text fontWeight="600">{course.institution}</Text>
          </article>
        ))}
      </section>
    </AboutStyled>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const formation = [
    {
      id: 1,
      title: "Técnico em analise e desenvolvimento de sistemas",
      time: "2019 - 2020",
      institution: "ETEC Paulistano",
    },
    {
      id: 2,
      title: "Faculdade em analise e desenvolvimento de sistemas",
      time: "2022 - 2024",
      institution: "Faculdade Impacta",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "Operador de microcomputador",
      time: "Carga Horária: 160 horas",
      institution: "SENAI Theobaldo De Nigris – SP",
    },
    {
      id: 2,
      title: "Programação Web",
      time: "Carga horaria: 106 horas",
      institution: "Udemy",
    },
  ];

  return {
    props: {
      formation,
      courses,
    },
  };
};

export default AboutPage;
