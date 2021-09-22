import React, { useState, useEffect } from "react";
import {
  SidebarWrapper,
  Header,
  List,
  ListItem,
  Divider,
} from "./Sidebar.styles";
import logo from "assets/image/logo.png";
import { menu } from "./sidebarData";
import movieApi from "components/Apis/movieApi";
import request from "Request/request";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    movieApi
      .get(request.genre)
      .then((response) => {
        setGenres(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return "";
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
        {menu.map((menu) => (
          <ListItem
            key={menu.text}
            background={location.pathname === menu.path ? "active" : null}
          >
            {menu.icon}
            <Link to={menu.path}>
              <div>{menu.text}</div>
            </Link>
          </ListItem>
        ))}
      </List>

      {/*   genres */}
      <List>
        <small>Genres</small>
        {genres.genres.map((genre) => (
          <ListItem key={genre.name}>
            <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
          </ListItem>
        ))}
      </List>
    </SidebarWrapper>
  );
};

export default Sidebar;
