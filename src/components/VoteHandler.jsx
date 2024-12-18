import { useState } from "react"
import { postVote } from "../utils/api"
import Button from '@mui/material/Button';

const VoteHandler = ({ article }) => {
    const [votesAdded, setVotesAdded] = useState(article.votes)

    const handleClick = () => {
        postVote(article.article_id).catch(() => {
            setVotesAdded((currVotesAdded) => {
                return currVotesAdded -1
            })
        })
        setVotesAdded((currVotesAdded) => {
            return currVotesAdded + 1
        })
    }

    return (
        <>
        <Button size="small" onClick={handleClick}>+1 Vote</Button>
        <p>{article.votes + votesAdded} votes</p>
        </>
    )

}

export default VoteHandler