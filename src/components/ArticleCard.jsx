import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router'
import VoteHandler from './VoteHandler';


const ArticleCard = ({article}) => {
    return (
        <>
            <Card sx={{ width: 400 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={article.article_img_url}
                title={article.title}
                component='img'
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {article.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Posted by {article.author}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {article.votes} votes
                </Typography>
            </CardContent>
            <CardActions>
                <VoteHandler article={article}/>
                <Button size="small">{article.comment_count} Comments</Button>
                <Button size="small"><Link to={`/article/${article.article_id}`}>Read more</Link></Button>
            </CardActions>
            </Card>
        </>
            
    )
}

export default ArticleCard