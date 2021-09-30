import React, { useEffect } from "react";
import {
  SidebarContainer,
  Header,
  List,
  ListItem,
  Divider,
  CloseBtn,
} from "./Sidebar.styles";
import logo from "assets/image/logo.png";
import { menu } from "./sidebarData";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "Redux/actions/genreAction";
import { FaTimes } from "react-icons/fa";
import { closeSidebar } from "Redux/actions/uiAction";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genres);
  const { isSidebar } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <SidebarContainer isSidebar={isSidebar}>
      {/* sidebar close button */}
      <CloseBtn onClick={() => dispatch(closeSidebar())}>
        <FaTimes />
      </CloseBtn>

      {/* header */}
      <Header>
        <img src={logo} alt="logo" />
        <h1>Moviepedia</h1>
      </Header>

      <Divider />

      {/* menu */}
      <List>
        <small>Menu</small>
        {menu.map(({ text, icon, path }) => (
          <ListItem
            key={text}
            background={location.pathname === path ? "active" : null}
          >
            {icon}
            <Link to={path}>
              <div>{text}</div>
            </Link>
          </ListItem>
        ))}
      </List>

      {/*   genres */}
      <List>
        <small>Genres</small>
        {genres
          ? genres.map(({ name, id }) => (
              <ListItem
                key={name}
                background={
                  location.pathname === `/genre/${id}` ? "active" : null
                }
              >
                <Link to={`/genre/${id}`}>{name}</Link>
              </ListItem>
            ))
          : null}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
