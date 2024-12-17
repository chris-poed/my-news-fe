import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const ArticleCard = ({article}) => {
    console.log(article)
    return (
        <>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image={article.article_img_url}
            title={article.title}
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
            <Button size="small">+1 Vote</Button>
            <Button size="small">{article.comment_count} Comments</Button>
            <Button size="small">Read more</Button>

        </CardActions>
        </Card>
            </>
            
    )
}

export default ArticleCard