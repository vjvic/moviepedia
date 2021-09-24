import React from "react";
import Sidebar from "components/Sidebar/Sidebar";
import Appbar from "components/Appbar/Appbar";
import { Container, LayoutWrapper } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      {/* sidebar */}
      <Sidebar />

      <Container>
        {/* appbar */}
        <Appbar />

        {/*  main */}
        <main>{children}</main>
      </Container>
    </LayoutWrapper>
  );
};

export default Layout;
