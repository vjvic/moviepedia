import React, { useState } from "react";
import {
  AppbarContainer,
  SearchWrapper,
  SearchInput,
  SearchBtn,
  User,
  Bars,
} from "./Appbar.styles";
import { FaBars, FaSearch } from "react-icons/fa";
import { BtnOutline } from "styles/Button.styles";
import { useHistory } from "react-router";
import Modal from "components/Modal/Modal";
import Login from "components/Forms/Login";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal, toggleLoginForm } from "redux/actions/uiAction";
import Signup from "components/Forms/Signup";
import { HiOutlineLogout } from "react-icons/hi";
import { logout } from "redux/actions/authAction";
import spinner from "assets/spinner/spinner.gif";
import { openSidebar } from "redux/actions/uiAction";

const Appbar = () => {
  const [query, setQuery] = useState("");

  const { currentUser, loading } = useSelector((state) => state.auth);
  const { toggleForm, isForm } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      history.push("/results/" + query);
    }

    setQuery("");
  };

  const userIsLogin = (
    <User round size="sm" onClick={() => dispatch(logout())}>
      <div>{currentUser && currentUser[0].displayName}</div>

      <HiOutlineLogout size={20} />
    </User>
  );

  return (
    <>
      {isForm && (
        <Modal
          close={() => dispatch(closeModal())}
          toggle={() => dispatch(toggleLoginForm())}
        >
          {toggleForm ? <Login /> : <Signup />}
        </Modal>
      )}

      <AppbarContainer>
        <Bars onClick={() => dispatch(openSidebar())}>
          <FaBars size={28} />
        </Bars>

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
        {loading ? (
          <img src={spinner} alt="spinner" className="spinner" />
        ) : currentUser ? (
          userIsLogin
        ) : (
          <BtnOutline round size="sm" onClick={() => dispatch(openModal())}>
            Login
          </BtnOutline>
        )}
      </AppbarContainer>
    </>
  );
};

export default Appbar;
