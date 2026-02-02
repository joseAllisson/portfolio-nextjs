import styled from "styled-components";

export interface TextStyledProps {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  display?: string;
  textOverflow?: string;
  lineClamp?: string;
  maxWidth?: string;
  maxHeight?: string;
  overflow?: string;
  padding?: string;
  whiteSpace?: "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line" | "break-spaces";
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
}

export const Text = styled.p<TextStyledProps>`
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color: ${({ color }) => color || "inherit"};
  display: ${({ display }) => display || "block"};
  text-overflow: ${({ textOverflow }) => textOverflow || "ellipsis"};
  -webkit-line-clamp: ${({ lineClamp }) => lineClamp || "none"};
  overflow: ${({ overflow }) => overflow || "visible"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  max-height: ${({ maxHeight }) => maxHeight || "none"};
  padding: ${({ padding }) => padding || "0"};
  white-space: ${({ whiteSpace }) => whiteSpace || "normal"};
  text-align: ${({ textAlign }) => textAlign || "left"};
  line-height: 1.6;
`;

Text.defaultProps = {
  color: "inherit",
};
