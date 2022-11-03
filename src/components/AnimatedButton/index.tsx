import { AnimatedButtonStyled, AnimatedButtonStyledProps } from "./style";

interface AnimatedButtonProps extends AnimatedButtonStyledProps {
  icon: JSX.Element;
  onClick?: () => void;
}

export const AnimatedButton = ({ icon, ...props }: AnimatedButtonProps) => {
  return <AnimatedButtonStyled {...props}>{icon}</AnimatedButtonStyled>;
};

AnimatedButton.defaultProps = {
  onClick: () => {},
};
