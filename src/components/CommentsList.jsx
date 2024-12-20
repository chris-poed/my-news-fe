import { UserContext } from "../contexts/UserContext";
import { useEffect, useState, useContext } from "react";
import { getComments, postComment } from "../utils/api";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CommentsList = ({ article_id }) => {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [commentToPost, setCommentToPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, {
      username: user.username,
      body: commentToPost,
    });
    setCommentToPost("");
  };

  const handleInput = (e) => {
    e.preventDefault();
    setCommentToPost(e.target.value);
  };

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [handleSubmit]);

  return (
    <ul>
      <form onSubmit={handleSubmit}>
        <p>Posting as {user.username}:</p>
        <TextField
          name="body"
          fullWidth
          required
          id="outlined-required"
          label="Type your comment"
          onChange={handleInput}
          value={commentToPost}
        />
        <Button type="submit" size="small">
          Submit
        </Button>
      </form>
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <p>
              Posted by {comment.author} at {comment.created_at}
            </p>
            <p>{comment.body}</p>
            <p>{comment.votes} votes</p>
            <Divider variant="inset" />
          </div>
        );
      })}
    </ul>
  );
};

export default CommentsList;
