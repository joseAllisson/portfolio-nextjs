import type { AppProps } from "next/app";

import { GlobalStyle } from "../../styles/globalStyle";
import { LayoutComponent } from "../components/Layout";

import { GlobalProvider } from "../context/GlobalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </GlobalProvider>
  );
}
