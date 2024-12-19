import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { postComment, getComments } from "../utils/api";

const PostCommentCard = ({ article_id, setComments, comments }) => {
  const { user } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, {
      username: user.username,
      body: e.target.body.value,
    });
    setComments(comments);
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
      />
      <Button type="submit" size="small">
        Submit
      </Button>
    </form>
  );
};
export default PostCommentCard;
