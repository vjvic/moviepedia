import React from "react";
import Sidebar from "components/Sidebar/Sidebar";
import Appbar from "components/Appbar/Appbar";
import { Container, Layoutontainer } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <Layoutontainer>
      {/* sidebar */}
      <Sidebar />

      <Container>
        {/* appbar */}
        <Appbar />

        {/*  main */}
        <main>{children}</main>
      </Container>
    </Layoutontainer>
  );
};

export default Layout;
