import React, { Fragment, useContext } from "react";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";


export const Layout = ({ children }) => {

  return (
    <Fragment>
      <Header />
      <div className="Main">{children}</div>
      <Footer />
    </Fragment>
  );
};

// export default Layout;
