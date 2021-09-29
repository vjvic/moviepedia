import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "styles/Grid";
import Item from "./Item/Item";
import { UserMovieContainer } from "./UserMovies.styles";
import Text from "./Text";

const Favorites = () => {
  const { favorites, favoritesLoading } = useSelector(
    (state) => state.firestore
  );

  const { currentUser } = useSelector((state) => state.auth);

  if (!currentUser) return <Text />;

  if (favoritesLoading) return "loading...";

  return (
    <UserMovieContainer>
      <h2>Favorites</h2>

      <Grid>
        {favorites.map((item) => (
          <Item item={item} key={item.id} collection={"favorites"} />
        ))}
      </Grid>
    </UserMovieContainer>
  );
};

export default Favorites;
