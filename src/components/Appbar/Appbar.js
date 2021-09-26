import React, { useState } from "react";
import {
  AppbarWrapper,
  SearchWrapper,
  SearchInput,
  SearchBtn,
} from "./Appbar.styles";
import { FaSearch } from "react-icons/fa";
import { BtnOutline } from "styles/Button.styles";
import { useHistory } from "react-router";

const Appbar = () => {
  const [query, setQuery] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      history.push("/results/" + query);
    }

    setQuery("");
  };

  return (
    <AppbarWrapper>
      <SearchWrapper>
        <form onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <SearchBtn>
            <FaSearch />
          </SearchBtn>
        </form>
      </SearchWrapper>
      <BtnOutline round size="sm">
        Login
      </BtnOutline>
    </AppbarWrapper>
  );
};

export default Appbar;
