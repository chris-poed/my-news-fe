import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "../components/ArticleCard";
import * as React from "react";
import Grid2 from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import { useParams } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {Array.from(new Array(9)).map((item, index) => (
          <Card key={index} sx={{ width: 400, height: 310, margin: 3 }}>
            <Skeleton
              sx={{ height: 100 }}
              animation="wave"
              variant="rectangular"
            />
            <Skeleton animation="wave" height={100} style={{ margin: 5 }} />
            <Skeleton
              animation="wave"
              height={20}
              width="40%"
              style={{ margin: 5 }}
            />
            <Skeleton
              animation="wave"
              height={20}
              width="20%"
              style={{ margin: 5 }}
            />
          </Card>
        ))}
      </Box>
    );
  }

  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Typography variant="h6">Topic</Typography>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              article={article}
              topic={topic}
            />
          );
        })}
      </Box>
    </>
  );
};

export default ArticleList;
