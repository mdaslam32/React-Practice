import React from "react";
import ReactDOM from "react-dom/client";
import StateHook from "./StateHook";
import EffectHook from "./EffectHook";
import RefHook from "./RefHook";
import MemoHook from "./MemoHook";
import ContextHook from "./Context Hook/ContextHook";
import ReducerHook from "./ReducerHook";
import Router from "./Router/Router";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import "../index.css";
import Counter from "./Redux/Counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <StateHook /> <hr /> */}
      {/* <EffectHook /> <hr /> */}
      {/* <RefHook /> <hr /> */}
      {/* <MemoHook /> <hr /> */}
      {/* <ContextHook /> <hr /> */}
      {/* <ReducerHook /> <hr /> */}
      {/* <Router /> <hr/>*/}
      {/* <Counter /> <hr /> */}
    </Provider>
  </React.StrictMode>
);
