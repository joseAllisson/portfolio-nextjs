import { Tooltip } from "@mui/material";
import { AnimatedButton } from "../AnimatedButton";
import { BsFillGearFill } from "react-icons/bs";
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
      <FloatingMenuContentStyled className={open ? "open" : "closed"}>{children}</FloatingMenuContentStyled>
    </FloatingMenuStyled>
  );
};

// item do menu, usado para animação do floatingMenu
export const FloatingMenuItem = ({
  tooltip,
  children,
  index,
  onClick,
}: FloatingMenuItemProps) => {
  return (
    <FloatingMenuItemStyled index={index}>
      <Tooltip title={tooltip}>
          <AnimatedButton onClick={onClick}>{children}</AnimatedButton>
      </Tooltip>
    </FloatingMenuItemStyled>
  );
};

// TODO
// [] - Criar componente de menu flutuante
// [] - Criar componente de item de menu flutuante
// [] - Tentar não passar o icone como props, mas sim como children
