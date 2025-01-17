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

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

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
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </Box>
  );
};

export default ArticleList;
