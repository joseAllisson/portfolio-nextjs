import { BsFillGearFill } from "react-icons/bs";
import Tooltip from "@mui/material/Tooltip";

import { AnimatedButton } from "../AnimatedButton";

import { FloatingMenuContentStyled, FloatingMenuItemStyled, FloatingMenuStyled } from "./style";

export interface FloatingMenuItemProps {
  index: number;
  tooltip: string;
  children: React.ReactNode;
  onClick: () => void;
}

interface FloatingMenuProps {
  open: boolean;
  onChange: (newValue: boolean) => void;
  children: React.ReactNode;
}

// Funcional apenas se usado com o FloatingMenuItem
export const FloatingMenu = ({ open, onChange, children }: FloatingMenuProps) => {
  return (
    <FloatingMenuStyled>
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
export const FloatingMenuItem = ({ tooltip, children, index, onClick }: FloatingMenuItemProps) => {
  return (
    <Tooltip title={tooltip}>
      <FloatingMenuItemStyled index={index}>
        <AnimatedButton onClick={onClick}>{children}</AnimatedButton>
      </FloatingMenuItemStyled>
    </Tooltip>
  );
};
