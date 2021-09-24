import React, { useEffect } from "react";
import {
  SidebarWrapper,
  Header,
  List,
  ListItem,
  Divider,
} from "./Sidebar.styles";
import logo from "assets/image/logo.png";
import { menu } from "./sidebarData";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres } from "Redux/actions/genreAction";

const Sidebar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <SidebarWrapper>
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
    </SidebarWrapper>
  );
};

export default Sidebar;
