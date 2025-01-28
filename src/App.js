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
import MoviePage from "./features/Movies/MoviePage";
import PeopleList from "./features/People/PeopleList";
import { Pagination } from "./common/Pagination";
import { toMovieList, toMoviePage, toPeople } from "./routes";
import { Error } from "./common/Error";

export const App = () => (
  <Provider store={store}>
    <HashRouter>
      <Navigation />   
      <Error />  
      <Switch>
        <Route path={toMoviePage()}>
          <MoviePage />
        </Route>
        <Route path={toMoviePage()}>
          <MoviePage />
        </Route>
        <Route path={toMovieList()}>
          <MovieList />
        </Route>
        <Route path={toPeople()}>
          <PeopleList />
        </Route>
        <Route path="/">
          <Redirect to={toMovieList()} />
        </Route>
      </Switch>
      <Pagination />
    </HashRouter>
  </Provider>
);
