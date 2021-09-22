import React from "react";
import Sidebar from "components/Sidebar/Sidebar";
import { LayoutWrapper } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      {/* sidebar */}
      <Sidebar />

      {/*  main */}
      <main>{children}</main>
    </LayoutWrapper>
  );
};

export default Layout;
