import axios from "axios"

const newsApi = axios.create({
    baseURL: "https://my-news-2.onrender.com/api"
})

export const getArticles = (topic) => {
    return newsApi.get("/articles", {
        params: {
            topic: topic
        }
    }).then((response) => {
        return response.data
    })
}

export const getArticle = (article_id) => {
    console.log(article_id)
    return newsApi.get(`/articles/${article_id}`, {
        params: {
            article_id: article_id
        }
    }).then((response) => {
        console.log(response.data, "<--- response.data")
        return response.data
    })
}