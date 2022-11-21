import { AnimatedButtonStyled, AnimatedButtonStyledProps } from "./style";

interface AnimatedButtonProps extends AnimatedButtonStyledProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const AnimatedButton = ({ children, ...props }: AnimatedButtonProps) => {
  return <AnimatedButtonStyled {...props} className="animated-button">{children}</AnimatedButtonStyled>;
};

AnimatedButton.defaultProps = {
  onClick: () => {},
};
