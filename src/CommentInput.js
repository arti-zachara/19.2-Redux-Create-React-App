import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CommentInput.css";

export class CommentInput extends React.Component {
  state = {
    input: ""
  };

  handleChange(e) {
    this.setState({
      input: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state.input);
    this.setState({
      input: ""
    });
  }

  render() {
    return (
      <form className="comment-input-form" onSubmit={e => this.handleSubmit(e)}>
        <textarea
          name="input"
          placeholder="Your new comment"
          rows="4"
          cols="30"
          value={this.state.input}
          onChange={e => this.handleChange(e)}
        />
        <button type="submit">
          Add your comment <FontAwesomeIcon icon={["far", "plus-square"]} />
        </button>
      </form>
    );
  }
}

export default CommentInput;
