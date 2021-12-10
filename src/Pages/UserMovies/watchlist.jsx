import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "styles/Grid";
import Item from "./Item/Item";
import { UserMovieContainer } from "./UserMovies.styles";
import Text from "./Text";
import Spinner from "components/Spinner/Spinner";

const Watchlist = () => {
  const { watchlist, loading } = useSelector((state) => state.watchlist);

  const { token } = useSelector((state) => state.auth);

  if (!token) return <Text text={"Please login to use this feature"} />;

  if (loading) return <Spinner />;

  return (
    <UserMovieContainer>
      <h2>Watchlist</h2>

      <Grid>
        {watchlist && watchlist.length <= 0 ? (
          <Text text={"No watchlist"} />
        ) : (
          watchlist &&
          watchlist.map((item) => (
            <Item item={item} key={item.id} collection={"watchlist"} />
          ))
        )}
      </Grid>
    </UserMovieContainer>
  );
};

export default Watchlist;
