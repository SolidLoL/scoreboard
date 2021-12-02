import React from 'react';
import {Header} from './Header.js';
import {Footer} from './Footer.js';

export const Layout = ({ children }) => (
  <div className="Main">
    <Header />
    {children}
    <Footer />
  </div>
);

// export default Layout;