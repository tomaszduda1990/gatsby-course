import React, { ReactNode } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import Footer from './Footer';
import Nav from './Nav';

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout ({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Nav />
        { children }
      <Footer />
    </>
  )
}