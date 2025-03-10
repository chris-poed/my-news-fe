import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function CommentCard({comment}) {
  const authorfirstletter = Array.from(comment.author)[0]
  return (
    <Card sx={{ maxWidth: 'sm', mb: 2 }}>
      <CardHeader authorfirstletter={authorfirstletter}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <>{authorfirstletter}</>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={comment.author}
        subheader={comment.created_at}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
{comment.body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
                  <Typography>{comment.votes} votes</Typography>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
