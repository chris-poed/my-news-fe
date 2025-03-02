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
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import { useParams } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedSort, setSelectedSort] = useState("created_at");
  let { topic } = useParams();

  const handleSort = (event) => {
    setSelectedSort(event.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    getArticles(topic, selectedSort).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic, selectedSort]);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Skeleton
          animation="wave"
          height={100}
          width="90%"
          style={{ margin: 3 }}
        />
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
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          justifyContent: "space-between",
          marginTop: 3,
          marginRight: 3,
          marginLeft: 3,
        }}
      >
        <Typography variant="h5">
          {!topic ? <>ALL ARTICLES</> : <>{topic.toUpperCase()}</>}
        </Typography>
        <FormControl size="small">
          <InputLabel variant="standard" htmlFor="sort-selector">
            Sort by
          </InputLabel>
          <NativeSelect
            value={selectedSort}
            onChange={handleSort}
            inputProps={{
              name: "sort",
              id: "sort-selector",
            }}
          >
            <option value="created_at">Date (default)</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comments</option>
          </NativeSelect>
        </FormControl>
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
