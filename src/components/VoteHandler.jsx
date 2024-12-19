import { useState } from "react"
import { postVote } from "../utils/api"
import Button from '@mui/material/Button';

const VoteHandler = ({ article }) => {
    const [votesAdded, setVotesAdded] = useState(0)

    const handleClick = (vote) => {

        if (vote === "inc-vote") {
            postVote(article.article_id, +1).catch(() => {
                setVotesAdded((currVotesAdded) => {
                    return currVotesAdded -1
                })
            })
            setVotesAdded((currVotesAdded) => {
                return currVotesAdded + 1
            })
        } else if (vote === "dec-vote") {
            postVote(article.article_id, -1).catch(() => {
                setVotesAdded((currVotesAdded) => {
                    return currVotesAdded +1
                })
            })
            setVotesAdded((currVotesAdded) => {
                return currVotesAdded - 1
            })
        }
    }

    return (
        <>
        <Button size="small" onClick={() => handleClick("inc-vote")}>+1 Vote</Button>
        <Button size="small" onClick={() => handleClick("dec-vote")}>-1 Vote</Button>
        <p>{article.votes + votesAdded} votes</p>
        </>
    )

}

export default VoteHandler