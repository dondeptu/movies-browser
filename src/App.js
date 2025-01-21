import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from "react-redux";
import { store } from "./store";
import { Navigation } from "./common/Navigation";
import MovieList from "./features/Movies/MovieList";
import PeoplePage from "./features/People/PeoplePage";
import { Pagination } from "./common/Pagination";
import { toMovieList, toPeople } from "./routes";

export const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Navigation />
      <Switch>
        <Route path={toMovieList()}>
          <MovieList />
        </Route>
        <Route path={toPeople()}>
          <PeoplePage />
        </Route>
        <Route path="/">
          <Redirect to={toMovieList()} />
        </Route>
      </Switch>
      <Pagination />
    </HashRouter>
  </Provider>
);
