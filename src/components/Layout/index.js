import React, { Fragment, useContext } from "react";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";

import { AppContext } from "@context/AppContext";

export const Layout = ({ children }) => {
  const anime  = useContext(AppContext);
  console.log(anime);
  return (
    <Fragment>
      <Header />
      <div className="Main">{children}</div>
      <Footer />
    </Fragment>
  );
};

// export default Layout;
