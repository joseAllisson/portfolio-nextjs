import { createContext } from "react";
import { Theme, ThemeProvider } from "styled-components";

import { darkTheme } from "../../styles/themes/dark";
import { defaultTheme } from "../../styles/themes/default";

import usePersistedState from "../utils/hooks/usePersistedState";

export interface GlobalContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextProps);

// !resolver bug de iniciar tema errada
export function GlobalProvider({ children }: GlobalProviderProps) {
  const [theme, setTheme] = usePersistedState<Theme>("theme", defaultTheme);

  const toggleTheme = () => {
    setTheme(theme.title !== "default" ? defaultTheme : darkTheme);
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
