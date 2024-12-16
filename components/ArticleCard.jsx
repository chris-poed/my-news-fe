
const ArticleCard = ({article}) => {
    console.log(article)
    return (

        
        <div className="article-card-container">
            <h2>{article.title}</h2>
            <p>Posted by {article.author}</p>
            <img className="article-list-image" src={article.article_img_url}/>
            <button>+1 vote</button>
            <p>{article.votes} votes</p>
            <p>{article.comment_count} comments</p>
        </div>

        
    )
}

export default ArticleCard