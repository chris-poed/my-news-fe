import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";
import VoteHandler from "./VoteHandler";
import CommentIcon from "@mui/icons-material/Comment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

const ArticleCard = ({ article }) => {
  return (
    <>
      <Card
        sx={{
          width: 400,
          marginTop: 3,
          marginLeft: 1.5,
          marginRight: 1.5,
          marginBottom: 3,
        }}
      >
        <CardMedia
          sx={{ height: 100 }}
          image={article.article_img_url}
          title={article.title}
          component="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Posted by {article.author}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {article.votes} votes
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Box>
            <VoteHandler article={article} />
          </Box>
          <Box>
            <IconButton aria-label="comments">
              <CommentIcon />
              <Typography
                variant="body2"
                sx={{ color: "text.secondary", padding: 1 }}
              >
                {article.comment_count}
              </Typography>
            </IconButton>
          </Box>
          <Box>
            {" "}
            <Button
              size="small"
              variant="contained"
              href={`/article/${article.article_id}`}
            >
              Read more
            </Button>
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

export default ArticleCard;
