import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getComments } from '../utils/api'

const CommentsList = ({comments}) => {


    return (
        <ul>
        {comments.map((comment) => {
            return (
            <div key={comment.comment_id} >
                <p>Posted by {comment.author} at {comment.created_at}</p>
                <p>{comment.body}</p>
                <p>{comment.votes}</p>
            </div>
            )
        })}
    </ul>
    )

}

export default CommentsList