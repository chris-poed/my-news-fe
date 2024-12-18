import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { getComments } from '../utils/api'

const CommentsList = () => {
    const { article_id } = useParams()
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(article_id).then(({ comments }) => {
            setComments(comments)
        })
    },[setComments])

    return (
        <ul>
        {comments.map((comment) => {
            return (
            <>
            <p>Posted by {comment.author} at {comment.created_at}</p>
            <p>{comment.body}</p>
            <p>{comment.votes}</p>
            </>
            )
        })}
    </ul>
    )

}

export default CommentsList