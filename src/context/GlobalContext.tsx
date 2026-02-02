import { createContext, ReactNode, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";

import { darkTheme } from "../styles/themes/dark";
import { lightTheme } from "../styles/themes/light";

import usePersistedState from "../utils/hooks/usePersistedState";

export interface GlobalContextProps {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalContext = createContext({} as GlobalContextProps);

// Função para garantir que o tema tenha todas as propriedades necessárias
function ensureCompleteTheme(theme: any): DefaultTheme {
  // Se o tema não existe ou não tem a propriedade shadows, usa o tema padrão
  if (!theme || !theme.shadows || !theme.colors?.gradient) {
    return theme?.title === "light" ? lightTheme : darkTheme;
  }
  
  const defaultTheme = theme.title === "light" ? lightTheme : darkTheme;
  
  // Mescla o tema carregado com o tema padrão para garantir todas as propriedades
  return {
    ...defaultTheme,
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...(theme?.colors || {}),
    },
    shadows: {
      ...defaultTheme.shadows,
      ...(theme?.shadows || {}),
    },
    fontFamily: {
      ...defaultTheme.fontFamily,
      ...(theme?.fontFamily || {}),
    },
  };
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [persistedTheme, setPersistedTheme] = usePersistedState<any>("theme", darkTheme);
  const [theme, setTheme] = useState<DefaultTheme>(ensureCompleteTheme(persistedTheme));

  useEffect(() => {
    setTheme(ensureCompleteTheme(persistedTheme));
  }, [persistedTheme]);

  const toggleTheme = () => {
    const newTheme = theme.title !== "light" ? lightTheme : darkTheme;
    setPersistedTheme(newTheme);
    setTheme(newTheme);
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
