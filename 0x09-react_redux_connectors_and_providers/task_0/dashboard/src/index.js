import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App/App";
import uiReducer, { initialState } from "./reducers/uiReducer";
import { Map } from "immutable";

const store = createStore(uiReducer, Map(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
	<App />
	</React.StrictMode>
);
