import { useEffect, useState } from "react"
import { getArticles } from "../utils/api"
import ArticleCard from "./ArticleCard"


const ArticleList = () => {

    const [articles, setArticles] = useState([])
    
    useEffect(() => {
        getArticles().then(({ articles }) => {
            setArticles(articles)
        })
    },[])



    return (
    <ul className="article-list-container">
        {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article}/>
        })}
    </ul>
    )
}


export default ArticleList