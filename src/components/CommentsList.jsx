import { UserContext } from "../contexts/UserContext";
import { useEffect, useState, useContext, useOptimistic } from "react";
import { getComments, postComment } from "../utils/api";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [optimisticComments, addOptimisticComment] = useOptimistic(comments);
  const { user } = useContext(UserContext);

  const [commentInput, setCommentInput] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toISOString()
  );

  const handleInput = (e) => {
    e.preventDefault();
    setCommentInput(e.target.value);
  };

  const newComment = {
    username: user.username,
    body: commentInput,
  };

  const handlePostComment = async (newComment) => {
    addOptimisticComment(newComment);
    try {
      await PostComment(newComment);
    } catch (error) {
      setComments((prevComments) =>
        prevComments.filter((comment) => comment !== newComment)
      );
    }
    setCommentInput("");
  };

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [handlePostComment]);

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, {
      username: user.username,
      body: commentInput,
    });
    setCommentInput("");
  };

  return (
    <ul>
      <form onSubmit={handlePostComment}>
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
      {optimisticComments.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <p>
              Posted by {comment.author} at{" "}
              {comment.created_at ? comment.created_at : currentDateTime}
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

/*

const CommentsList = ({ article_id }) => {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [newComment, setNewPost] = useState("");
  const [currentDateTime, setCurrentDateTime] = useState(
    new Date().toISOString()
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(article_id, {
      username: user.username,
      body: commentInput,
    });
    setCommentInput("");
  };

  const handleInput = (e) => {
    e.preventDefault();
    setCommentInput(e.target.value);
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
          value={commentInput}
        />
        <Button type="submit" size="small">
          Submit
        </Button>
      </form>
      <div>
        <p>
          Posted by {user.username} at {currentDateTime}
        </p>
        <p>a test comment</p>
        <p>test votes</p>
        <Divider variant="inset" />
      </div>
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

*/

export default CommentsList;
