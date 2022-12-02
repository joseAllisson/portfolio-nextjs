import { ReactNode } from "react";
import { BsFillGearFill } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";

import { AnimatedButton } from "../AnimatedButton";

import { FloatingMenuContentStyled, FloatingMenuItemStyled, FloatingMenuStyled } from "./style";

export interface FloatingMenuItemProps {
  index: number;
  tooltip: string;
  children: ReactNode;
  link?: string;
  className?: string;
  onClick?: () => void;
}

interface FloatingMenuProps {
  open: boolean;
  onChange: (newValue: boolean) => void;
  children: ReactNode;
}

// Funcional apenas se usado com o FloatingMenuItem
export const FloatingMenu = ({ open, onChange, children }: FloatingMenuProps) => {
  return (
    <FloatingMenuStyled id="floating-menu">
      <AnimatedButton onClick={() => onChange(!open)} animation="moveRight">
        <BsFillGearFill size={28} />
      </AnimatedButton>
      <FloatingMenuContentStyled className={open ? "open" : "closed"}>
        {children}
      </FloatingMenuContentStyled>
    </FloatingMenuStyled>
  );
};

// item do menu, usado para animação do floatingMenu
export const FloatingMenuItem = ({
  tooltip,
  children,
  index,
  link,
  className,
  onClick,
}: FloatingMenuItemProps) => {
  return (
    <Tooltip title={tooltip} className={className}>
      <FloatingMenuItemStyled index={index}>
        {link ? (
          <a href={link}>
            <AnimatedButton onClick={onClick}>{children}</AnimatedButton>
          </a>
        ) : (
          <AnimatedButton onClick={onClick}>{children}</AnimatedButton>
        )}
      </FloatingMenuItemStyled>
    </Tooltip>
  );
};

FloatingMenuItem.defaultProps = {
  onClick: null,
  link: "",
  className: "",
};
