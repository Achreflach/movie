import { Card, CardActions, CardContent, CardMedia, Rating, Typography } from '@mui/material';
import React from 'react'

const MovieCard = ({ movie }) => {

    return (
        <Card sx={{ width: 345 }}>
            <CardMedia
                sx={{ height: 500 }}
                image={movie.posterUrl}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {movie.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Rating name="read-only" value={movie.rating} readOnly />
            </CardActions>
        </Card>
    );
}



export default MovieCard