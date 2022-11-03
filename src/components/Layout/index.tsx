import Footer from "../Footer";
import { Header } from "../Header";
import { ContentStyled, LayoutStyled } from "./style";

interface LayoutProps {
  children: React.ReactNode;
}

export const LayoutComponent = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <LayoutStyled>
        <ContentStyled>{children}</ContentStyled>
      </LayoutStyled>
      <Footer />
    </>
  );
};
