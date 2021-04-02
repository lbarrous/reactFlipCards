import React from "react";
import "./App.css";
import MainView from "./Views/MainView";
import { Provider } from "react-redux";
import store from "./Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainView />
      </Provider>
    </div>
  );
}

export default App;
