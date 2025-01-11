import { Provider } from "react-redux";
import {store} from "./store"
import { Navigation } from "./components/Navigation";
import { Pagination } from "./components/Pagination";

export const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
      <Pagination />
    </Provider>
  );
};
