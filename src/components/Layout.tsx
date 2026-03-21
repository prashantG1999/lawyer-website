import React, { type ReactNode } from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ padding: '2rem' }}>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
