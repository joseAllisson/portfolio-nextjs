import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { ContentStyled, LayoutStyled } from "./style";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
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
