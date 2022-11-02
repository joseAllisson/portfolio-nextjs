import { TextStyled, TextStyledProps } from "./style";

interface TextProps extends TextStyledProps {
  children: React.ReactNode;
}

// TODO - se não existir alguma lógica, retornar apenas o Style direto
export const Text = ({ children, ...props }: TextProps) => {
  return <TextStyled {...props}>{children}</TextStyled>;
};

Text.defaultProps = {
  fontSize: "inherit",
  fontWeight: "inherit",
  color: "initial",
  display: "initial",
  textOverflow: "initial",
  lineClamp: "initial",
  overflow: "initial",
  maxWidth: "none",
  maxHeight: "none",
};
