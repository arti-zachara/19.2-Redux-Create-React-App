import React from "react";
import "./App.css";
import CommentsListContainer from "./CommentsListContainer";
import CommentInputContainer from "./CommentInputContainer";
import DevTools from "./DevTools";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp,
  faThumbsDown,
  faTrashAlt,
  faEdit,
  faPlusSquare
} from "@fortawesome/free-regular-svg-icons";

library.add(faThumbsUp, faThumbsDown, faTrashAlt, faEdit, faPlusSquare);

const App = () => {
  return (
    <div className="app">
      <h1>Comments:</h1>
      <CommentsListContainer />
      <h3>Add a comment</h3>
      <CommentInputContainer />
      <DevTools />
    </div>
  );
};

export default App;
