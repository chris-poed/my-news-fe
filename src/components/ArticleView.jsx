import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticle, getComments } from "../utils/api";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import CommentsList from "./CommentsList";
import Collapsible from "./Collapsible";
import VoteHandler from "./VoteHandler";

const ArticleView = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    getComments(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [setComments]);

  if (isLoading) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Stack spacing={1}>
            <Skeleton variant="rectangular" height={400} />
            <Skeleton variant="rectangular" height={100} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </Stack>
        </Container>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ height: "auto" }}>
          <Button size="small">
            <Link to={`/`}>Back to articles</Link>
          </Button>
          <CardMedia
            sx={{ height: 400 }}
            image={article.article_img_url}
            title={article.title}
            component="img"
          />
          <h1>{article.title}</h1>
          <p>By {article.author}</p>
          <VoteHandler article={article} />
          <p>{article.vote_count}</p>
          <p>{article.body}</p>
        </Box>
        <Collapsible contentDescriptor={` ${article.comment_count} comments`}>
          <CommentsList comments={comments} article_id={article_id} setComments={setComments}/>
        </Collapsible>
      </Container>
    </React.Fragment>
  );
};

export default ArticleView;
