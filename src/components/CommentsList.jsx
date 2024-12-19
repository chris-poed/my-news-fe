import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../utils/api";
import PostCommentCard from "./PostCommentCard";
import Divider from "@mui/material/Divider";

const CommentsList = ({ comments, article_id, setComments }) => {
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <div key={comment.comment_id}>
            <p>
              Posted by {comment.author} at {comment.created_at}
            </p>
            <p>{comment.body}</p>
            <p>{comment.votes} votes</p>
            <Divider variant="inset" />
          </div>
        );
      })}
      <PostCommentCard
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />
    </ul>
  );
};

export default CommentsList;
