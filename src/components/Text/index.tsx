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

// v1
// export const TextStyled = styled.p<TextStyledProps>`
//     font-size: ${({ fontSize }) => fontSize};
//     font-weight: ${({ fontWeight }) => fontWeight};
//     color: ${({ color }) => color};
//     display: ${({ display }) => display};
//     text-overflow: ${({ textOverflow }) => textOverflow};
//     -webkit-line-clamp: ${({ lineClamp }) => lineClamp};
//     overflow: ${({ overflow }) => overflow};
//     max-width: ${({ maxWidth }) => maxWidth};
//     max-height: ${({ maxHeight }) => maxHeight};
// `;

// v2
export const Text = styled.p<TextStyledProps>(({ lineClamp, ...props }: TextStyledProps) => ({
  ...props,
  webkitLineClamp: lineClamp,
}));
