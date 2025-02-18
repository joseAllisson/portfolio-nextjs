import { GetStaticProps } from "next";
import Image from "next/image";
import Typewriter from "typewriter-effect";

import { Text } from "../../components/Text";

import AboutStyled from "./style";

interface coursesProps {
  id: number;
  title: string;
  institution: string;
  time: string;
  link?: string;
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
      <div className="animated-text">
        <h3 className="locked">Desenvolvedor</h3>
        <h3>
          <Typewriter
            options={{
              strings: ["Frontend", "Backend", "Fullstack"],
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
            }}
          />
        </h3>
      </div>
      <section className="profile-container">
        <Image src="/img/perfil2.jpg" className="profile-img" width={280} height={280} alt="José Alisson" />
        <Text textAlign="justify">
          Bem vindo! Eu sou Técnico e Tecnólogo em análise e desenvolvimento de sistemas, apaixonado por desenvolvimento web! Sou programador Fullstack focado no frontend, sempre procurando aprimorar meus conhecimentos e desenvolver novas habilidades. Tenho conhecimento sólido em Javascript / Typescript, React, Next, Nest e PHP. Experiência em projetos legados, novos, backoffice e integrações.
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
          <a key={course.id} target="_blank" href={course.link} rel="noreferrer">
            <article>
              <h3>{course.title}</h3>
              <Text>Carga Horária: {course.time} horas</Text>
              <Text fontWeight="600">{course.institution}</Text>
            </article>
          </a>
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
      institution: "Faculdade Unicesumar",
    },
  ];

  const courses = [
    {
      id: 1,
      title: "React Completo",
      time: "36",
      institution: "Origamid",
      link: "https://www.origamid.com/certificate/4df2861c",
    },
    {
      id: 2,
      title: "Javacript Completo ES6",
      time: "74",
      institution: "Origamid",
      link: "https://www.origamid.com/certificate/3f1e329c/",
    },
    {
      id: 3,
      title: "Programação Web",
      time: "106",
      institution: "Udemy",
      link: "https://www.udemy.com/certificate/UC-22c3a1cb-ac13-4b5f-b51f-f9a4be2870fc/",
    },
    {
      id: 4,
      title: "Operador de microcomputador",
      time: "160",
      institution: "SENAI Theobaldo De Nigris – SP",
      link: "#",
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
