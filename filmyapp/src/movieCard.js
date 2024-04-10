import React from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";


function MovieCard({ movie }) {
    console.log(movie, 'movieCAesid renvu')
    // console.log(' aali ek ', movie)
    // return
    const addFavouriteMovie = (movie) => {
        console.log(movie, 'movie after clicking')

        // const newFavouriteList = [...favourites, movie];
        // setFavourites(newFavouriteList);
        // saveToLocalStorage(newFavouriteList);
    };
    return (
        <Card style={{ maxWidth: 300, margin: '16px' }}>
            {/* <IconButton
                style={{ right: '0px', color: '#000' }}
                aria-label="add to watchlist"
            >
                <BookmarkAddIcon />
            </IconButton> */}
            <CardMedia
                style={{ height: 300 }}
                image={movie.Poster}
                title={movie.Title}

            />

            <CardContent >
                <IconButton
                    style={{ top: '8px', right: '8px', color: '#000', backgroundColor: 'rgba(255,255,255,0.7)' }}
                    aria-label="add to watchlist"
                >
                    <BookmarkAddIcon onClick={() => console.log(movie, 'movie')} />
                </IconButton>
                <Typography gutterBottom variant="h5" component="div"
                >
                    {movie.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {movie.description}
                </Typography>
            </CardContent>

        </Card>
    );
}

export default MovieCard;
