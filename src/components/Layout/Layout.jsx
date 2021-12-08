import React from "react";
import Sidebar from "components/Sidebar/Sidebar";
import Appbar from "components/Appbar/Appbar";
import { Layoutontainer } from "./Layout.styles";
import { Container } from "styles/Container";

const Layout = ({ children }) => {
  return (
    <>
      <Layoutontainer>
        {/* appbar */}
        <Appbar />

        {/* sidebar */}
        <Sidebar />

        <Container>
          {/*  main */}
          <main>{children}</main>
        </Container>
      </Layoutontainer>
    </>
  );
};

export default Layout;
