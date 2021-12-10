import React, { useEffect } from "react";
import Layout from "components/Layout/Layout";
import GlobalStyles from "styles/GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "redux/actions/authAction";
import { getFavorites, getWatchlist } from "redux/actions/movieAction";
import {
  Genre,
  Home,
  Results,
  MovieDetails,
  Favorites,
  Watchlist,
} from "./pages";

function App() {
  const { token, currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //set user
  useEffect(() => {
    if (token) {
      dispatch(getUserData(token));
    }
  }, [dispatch, token]);

  //get user movie
  useEffect(() => {
    if (currentUser) {
      const userID = currentUser[0].localId;
      dispatch(getWatchlist(userID));
      dispatch(getFavorites(userID));
    }
  }, [dispatch, currentUser]);

  return (
    <div>
      <GlobalStyles />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/genre/:id" component={Genre} />
            <Route path="/results/:value" component={Results} />
            <Route path="/movie/:id" component={MovieDetails} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/watchlist" component={Watchlist} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
