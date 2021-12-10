import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "styles/Grid";
import Item from "./Item/Item";
import { UserMovieContainer } from "./UserMovies.styles";
import Text from "./Text";
import Spinner from "components/Spinner/Spinner";

const Favorites = () => {
  const { favorites, loading } = useSelector((state) => state.favorites);

  const { token } = useSelector((state) => state.auth);

  if (!token) return <Text text={"Please login to use this feature"} />;

  if (loading) return <Spinner />;

  return (
    <UserMovieContainer>
      <h2>Favorites</h2>

      <Grid>
        {favorites && favorites.length <= 0 ? (
          <Text text={"No favorites"} />
        ) : (
          favorites &&
          favorites.map((item) => (
            <Item item={item} key={item.id} collection={"favorites"} />
          ))
        )}
      </Grid>
    </UserMovieContainer>
  );
};

export default Favorites;
