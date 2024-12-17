import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react"
import { getArticle } from '../utils/api'
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ArticleView = () => {

    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const { article_id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        getArticle(article_id).then(({ article }) => {
            setArticle(article)
            setIsLoading(false)
        })
    },[])

    if (isLoading) {

        return (
            <React.Fragment>
        <CssBaseline />
            <Container maxWidth="md">
            <Stack spacing={1}>   
                <Skeleton variant="rectangular" height={400} />
                <Skeleton variant="rectangular" height={100} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            </Stack>

            </Container>
            </React.Fragment>
          );

    }

    return (
        <React.Fragment>
        <CssBaseline />
            <Container maxWidth="md">
                <Box sx={{ height: '100vh' }}>
                <Button size="small"><Link to={`/`}>Back to articles</Link></Button>
                <CardMedia
                    sx={{ height: 400 }}
                    image={article.article_img_url}
                    title={article.title}
                />
                <h1>{ article.title }</h1>
                <p>By { article.author }</p>
                <Button size="small">+1 Vote</Button>
                <p>{ article.vote_count}</p>
                <Button size="small">{article.comment_count} Comments</Button>
                <p>{ article.body }</p>
                </Box>
            </Container>
        </React.Fragment>
    );

}


export default ArticleView