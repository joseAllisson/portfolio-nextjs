import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { ContentStyled, LayoutStyled, LeafStyled } from "./style";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoadingLinearProgress } from "../../LoadingLinearProgress";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { asPath, events } = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const start = () => setLoading(true);
      const end = async () => setLoading(false);

      events.on("routeChangeStart", start);
      events.on("routeChangeComplete", end);
      events.on("routeChangeError", end);
      return () => {
        events.off("routeChangeStart", start);
        events.off("routeChangeComplete", end);
        events.off("routeChangeError", end);
      };
    } catch (e) {
      // eslint-disable-next-line no-console
      return console.error("Erro ao carregar loading: useEffect in layout", e);
    }
  }, [asPath, events]);

  return (
    <>
      <Header />
      <LayoutStyled>
        <ContentStyled>
          <LeafStyled>{loading ? <LoadingLinearProgress /> : children}</LeafStyled>
        </ContentStyled>
      </LayoutStyled>
      <Footer />
    </>
  );
};
