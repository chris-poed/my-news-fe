import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import handleSubmit from './CommentsForm'
import CommentsForm from './CommentsForm'
import CommentCard from './CommentCard'
import { Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [handleSubmit]);

  return (
    <ul>
      <CommentsForm setComments={setComments} article_id={article_id} sx={{margin: 10}}/>

      {comments.map((comment) => {
        return (
          <CommentCard key={comment.comment_id} comment={comment} sx={{margin: 30}}/>
        );
      })}
    </ul>
  );
};

export default CommentsList;


/* 

// Attempted to add the useOptimistic react hook, but causes a 'not a function' 
// error which prevents the page from rendering

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



  return (
    <ul>
      <CommentsForm handlePostComment={handlePostComment} />
      {comments.map((comment) => {
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
}; */



