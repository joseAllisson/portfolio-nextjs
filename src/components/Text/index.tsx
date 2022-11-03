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
  color: "inherit",
  display: "inline-block",
  textOverflow: "inherit",
  lineClamp: "inherit",
  overflow: "inherit",
  maxWidth: "none",
  maxHeight: "none",
  padding: "0",
  whiteSpace: "wrap",
};
