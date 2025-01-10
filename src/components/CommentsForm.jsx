import { UserContext } from "../contexts/UserContext";
import { useContext, useState, useEffect } from "react";
import { postComment, getComments } from "../utils/api";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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

  const authorFirstLetter = Array.from(user.username)[0]

    return (
      <Card sx={{ maxWidth: 'sm', mb: 2 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {authorFirstLetter}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={user.username}
            />
            <CardContent>
            <form onSubmit={handleSubmit}>
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
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
          </Card>
          )

}

export default CommentsForm