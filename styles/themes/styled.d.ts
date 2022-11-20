
import 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      text: string;
      background: string;
      border: string;
    };
    fontFamily: {
      primary: string;
    }
  }
}