import "~/config/ReactotronConfig";
import React from "react";
import Routes from "~/Routes";
import store from "~/store";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);
export default App;
