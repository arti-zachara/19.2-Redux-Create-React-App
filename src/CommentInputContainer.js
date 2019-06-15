import { connect } from "react-redux";
// ------------ inside-app imports ----------------------------------
import { CommentInput } from "./CommentInput";
import { addComment } from "./actions";

const mapDispatchToProps = dispatch => ({
  addComment: id => dispatch(addComment(id))
});

export default connect(
  null,
  mapDispatchToProps
)(CommentInput);
