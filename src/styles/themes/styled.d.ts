
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      primaryHover: string;
      secondary: string;
      text: string;
      textSecondary: string;
      background: string;
      backgroundSecondary: string;
      border: string;
      accent: string;
      gradient: string;
    };
    fontFamily: {
      primary: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      glow: string;
    };
  }
}