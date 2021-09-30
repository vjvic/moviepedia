import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "styles/Grid";
import Item from "./Item/Item";
import { UserMovieContainer } from "./UserMovies.styles";
import Text from "./Text";
import Spinner from "components/Spinner/Spinner";

const Favorites = () => {
  const { favorites, favoritesLoading } = useSelector(
    (state) => state.firestore
  );

  const { currentUser } = useSelector((state) => state.auth);

  if (favoritesLoading) return <Spinner />;

  if (!currentUser) return <Text text={"Please login to use this feature"} />;

  if (favorites.length <= 0) return <Text text={"No favorites"} />;

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
