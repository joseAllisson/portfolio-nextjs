import { createContext, ReactNode, useEffect, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { getCookie, setCookie } from "cookies-next";

import { darkTheme } from "../styles/themes/dark";
import { lightTheme } from "../styles/themes/light";

export interface GlobalContextProps {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalContext = createContext<GlobalContextProps>({
  theme: darkTheme,
  toggleTheme: () => {},
});

// Função para garantir que o tema tenha todas as propriedades necessárias
function ensureCompleteTheme(theme: any): DefaultTheme {
  if (!theme || !theme.shadows || !theme.colors?.gradient) {
    return theme?.title === "light" ? lightTheme : darkTheme;
  }
  
  const defaultTheme = theme.title === "light" ? lightTheme : darkTheme;
  
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

function getThemeFromCookie(): DefaultTheme {
  const stored = getCookie("theme");
  if (stored === "light") return lightTheme;
  if (stored === "dark") return darkTheme;
  // Fallback: tenta parsear JSON antigo
  if (stored && typeof stored === "string") {
    try {
      const parsed = JSON.parse(stored);
      if (parsed?.title === "light") return lightTheme;
    } catch {
      // ignora
    }
  }
  return darkTheme; // padrão
}

export function GlobalProvider({ children }: GlobalProviderProps) {
  const [theme, setTheme] = useState<DefaultTheme>(darkTheme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = getThemeFromCookie();
    setTheme(ensureCompleteTheme(savedTheme));
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme.title !== "light" ? lightTheme : darkTheme;
    setCookie("theme", newTheme.title, { maxAge: 60 * 60 * 24 * 365 });
    setTheme(newTheme);
  };

  // Sempre renderiza com o Provider para evitar undefined
  return (
    <GlobalContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={theme}>
        {/* Esconde conteúdo até carregar tema do cookie para evitar flash */}
        <div style={{ visibility: mounted ? "visible" : "hidden" }}>
          {children}
        </div>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}
