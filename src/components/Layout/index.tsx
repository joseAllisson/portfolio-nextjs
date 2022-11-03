import { DefaultLayout } from "./Default";

interface LayoutProps {
  children: React.ReactNode;
  layout?: "default" | "none";
}

export const LayoutComponent = ({ children, layout }: LayoutProps) => {
  return layout === "default" ? <DefaultLayout>{children}</DefaultLayout> : <>{children}</>;
};

LayoutComponent.defaultProps = {
  layout: "default",
};
