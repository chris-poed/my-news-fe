import { UserContext } from "../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { postComment, getComments } from "../utils/api";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CommentsForm = ({ article_id, setComments }) => {

  const { user } = useContext(UserContext);
  const [commentInput, setCommentInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, {
      username: user.username,
      body: commentInput,
    });
    setCommentInput("");
  };

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [handleSubmit]);

  const handleInput = (e) => {
    e.preventDefault();
    setCommentInput(e.target.value);
  };

    return (
        <form onSubmit={handleSubmit}>
        <p>Posting as {user.username}:</p>
        <TextField
          name="body"
          fullWidth
          required
          id="outlined-required"
          label="Type your comment"
          onChange={handleInput}
          value={commentInput}
        />
        <Button type="submit" size="small">
          Submit
        </Button>
      </form>
    )

}

export default CommentsForm