import { useState } from "react";
import { postVote } from "../utils/api";
import Button from "@mui/material/Button";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const VoteHandler = ({ article }) => {
  const [votesAdded, setVotesAdded] = useState(0);

  const handleClick = (vote) => {
    if (vote === "inc-vote") {
      postVote(article.article_id, +1).catch(() => {
        setVotesAdded((currVotesAdded) => {
          return currVotesAdded - 1;
        });
      });
      setVotesAdded((currVotesAdded) => {
        return currVotesAdded + 1;
      });
    } else if (vote === "dec-vote") {
      postVote(article.article_id, -1).catch(() => {
        setVotesAdded((currVotesAdded) => {
          return currVotesAdded + 1;
        });
      });
      setVotesAdded((currVotesAdded) => {
        return currVotesAdded - 1;
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <IconButton
        aria-label="thumbs-up"
        onClick={() => handleClick("inc-vote")}
      >
        <ThumbUpAltIcon />
      </IconButton>
      <IconButton
        aria-label="thumbs-down"
        onClick={() => handleClick("dec-vote")}
      >
        <ThumbDownAltIcon />
      </IconButton>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        {article.votes + votesAdded} votes
      </Typography>
    </Box>
  );
};

export default VoteHandler;
