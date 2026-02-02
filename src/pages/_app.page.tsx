import type { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

import { GlobalStyle } from "../styles/globalStyle";
import { LayoutComponent } from "../components/Layout";
import { GlobalProvider } from "../context/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Head>
        <title>José Alisson Bezerra | Desenvolvedor Fullstack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
      <Analytics />
    </GlobalProvider>
  );
}
