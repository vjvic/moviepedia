import React from "react";
import {
  AppbarWrapper,
  SearchWrapper,
  SearchInput,
  SearchBtn,
} from "./Appbar.styles";
import { FaSearch } from "react-icons/fa";
import { BtnOutline } from "styles/Button.styles";

const Appbar = () => {
  return (
    <AppbarWrapper>
      <SearchWrapper>
        <form>
          <SearchInput type="text" placeholder="Search..." />
          <SearchBtn>
            <FaSearch />
          </SearchBtn>
        </form>
      </SearchWrapper>
      <BtnOutline>Login</BtnOutline>
    </AppbarWrapper>
  );
};

export default Appbar;
