import { GetStaticProps } from "next";

const AboutPage = () => {
  return <div>sobre</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default AboutPage;
