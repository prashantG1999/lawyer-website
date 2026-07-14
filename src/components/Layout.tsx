import React, { type ReactNode } from 'react';
import Header from './Header.tsx';
import Footer from './Footer.tsx';
import DisclaimerModal from './DisclaimerModal.tsx';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <DisclaimerModal />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
