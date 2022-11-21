import { createContext } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { darkTheme } from "../styles/themes/dark";
import { lightTheme } from "../styles/themes/light";

import usePersistedState from "../utils/hooks/usePersistedState";

export interface GlobalContextProps {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextProps);

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", darkTheme);

  const toggleTheme = () => {
    setTheme(theme.title !== "light" ? lightTheme : darkTheme);
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </GlobalContext.Provider>
  );
}
