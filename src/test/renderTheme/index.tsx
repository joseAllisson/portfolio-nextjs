import { ReactNode } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { darkTheme } from "../../styles/themes/dark";

export const renderTheme = (component: ReactNode) => {
  return render(<ThemeProvider theme={darkTheme}>{component}</ThemeProvider>);
};
