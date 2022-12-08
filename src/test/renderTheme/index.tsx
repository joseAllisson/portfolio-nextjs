import { ReactNode } from "react";
import { render } from "@testing-library/react";

import { GlobalProvider } from "../../context/GlobalContext";
import { GlobalStyle } from "../../styles/globalStyle";

export const renderTheme = (component: ReactNode) => {
  return render(
    <GlobalProvider>
      <GlobalStyle />
      {component}
    </GlobalProvider>
  );
};
