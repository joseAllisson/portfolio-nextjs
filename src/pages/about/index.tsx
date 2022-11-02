import { GetStaticProps } from "next";

const Home = () => {
  return <div>sobre</div>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default Home;
