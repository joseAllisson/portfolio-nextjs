import { Header } from "../../Header";
import { Footer } from "../../Footer";
import { LayoutStyled, ContentStyled } from "./style";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoadingLinearProgress } from "../../LoadingLinearProgress";

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { asPath, events } = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    events.on("routeChangeStart", start);
    events.on("routeChangeComplete", end);
    events.on("routeChangeError", end);
    return () => {
      events.off("routeChangeStart", start);
      events.off("routeChangeComplete", end);
      events.off("routeChangeError", end);
    };
  }, [asPath, events]);

  return (
    <>
      <Header />
      <LayoutStyled>
        {loading && <LoadingLinearProgress />}
        <ContentStyled>{children}</ContentStyled>
      </LayoutStyled>
      <Footer />
    </>
  );
};
