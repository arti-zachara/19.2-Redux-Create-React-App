import React from "react";
import "./App.css";
import CommentsListContainer from "./CommentsListContainer";
import DevTools from "./DevTools";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp,
  faThumbsDown,
  faTrashAlt,
  faEdit
} from "@fortawesome/free-regular-svg-icons";

library.add(faThumbsUp, faThumbsDown, faTrashAlt, faEdit);

const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};

export default App;
