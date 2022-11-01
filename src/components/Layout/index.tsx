interface LayoutProps {
    children: React.ReactNode;
}

export const LayoutComponent = ({ children }: LayoutProps) => {
    return (
        <>
            teste
            {children}
        </>
    );
}
