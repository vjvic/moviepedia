import Layout from "components/Layout/Layout";
import GlobalStyles from "styles/GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "Pages/Home";
import Genre from "Pages/Genre";
import Results from "Pages/Results";
import Watchlist from "Pages/Watchlist";
import Favorites from "Pages/Favorites";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/genre/:id" component={Genre} />
            <Route path="/results/:value" component={Results} />
            <Route path="/watchlist" component={Watchlist} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
