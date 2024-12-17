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