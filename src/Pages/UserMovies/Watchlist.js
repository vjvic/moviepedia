import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "styles/Grid";
import Item from "./Item/Item";
import { UserMovieContainer } from "./UserMovies.styles";
import Text from "./Text";

const Watchlist = () => {
  const { watchlist, watchlistLoading } = useSelector(
    (state) => state.firestore
  );

  const { currentUser } = useSelector((state) => state.auth);

  if (!currentUser) return <Text />;

  if (watchlistLoading) return "loading...";

  return (
    <UserMovieContainer>
      <h2>Watchlist</h2>

      <Grid>
        {watchlist.map((item) => (
          <Item item={item} key={item.id} collection={"watchlist"} />
        ))}
      </Grid>
    </UserMovieContainer>
  );
};

export default Watchlist;
