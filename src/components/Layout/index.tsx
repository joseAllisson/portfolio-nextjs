import { ReactNode } from "react";

import { DefaultLayout } from "./Default";

interface LayoutProps {
  children: ReactNode;
  layout?: "default" | "none";
}

export const LayoutComponent = ({ children, layout }: LayoutProps) => {
  return layout === "default" ? <DefaultLayout>{children}</DefaultLayout> : <>{children}</>;
};

LayoutComponent.defaultProps = {
  layout: "default",
};
