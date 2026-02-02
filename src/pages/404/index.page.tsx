import { GetStaticProps } from "next";

const page404 = () => {
  return <h2>404</h2>;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default page404;
