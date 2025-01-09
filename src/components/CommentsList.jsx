import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import handleSubmit from './CommentsForm'
import CommentsForm from './CommentsForm'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const CommentsList = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [handleSubmit]);

  return (
    <ul>
      <CommentsForm setComments={setComments} article_id={article_id}/>

      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>


      {comments.map((comment) => {
        return (
          <Box key={comment.comment_id} className="comment-card">
            <Typography variant="caption" sx={{display: 'flex', alignItems: 'flex-start',}}>{comment.author} at {comment.created_at}</Typography>
            <Typography sx={{display: 'flex', alignItems: 'flex-start',}}>{comment.body}</Typography>
            <p>{comment.votes} votes</p>
          </Box>
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



