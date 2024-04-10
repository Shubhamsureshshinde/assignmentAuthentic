import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import MovieCard from "./movieCard";

function SearchPage() {
    const [movie, setMovie] = React.useState('')
    const [movieData, setMovieData] = React.useState([])
    console.log('useState is working', movie)
    const searchMovie = () => {
        // Replace 'YOUR_URL_HERE' with the actual URL you want to fetch
        const url = `http://www.omdbapi.com/?s=${movie}&apiKey=10158ead`

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setMovieData(data)
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={8} style={{
                border: "1px solid #ccc",
                padding: "16px",
                borderRadius: "8px",
                borderColor: 'red',
                marginBottom: '16px' // Added margin bottom for spacing
            }}>
                <Typography variant="h4">
                    Welcome to <span style={{ color: "red" }}>Watchlists</span>
                </Typography>
                <Typography>
                    Browse movies, add them to your watch lists, and share them with friends.<br />
                    Just click the <span style={{ alignItems: "center" }}><BookmarkAddIcon /></span> to add a movie,
                    and click on <span style={{ alignItems: "center" }}><CheckRoundedIcon /></span> to mark it as watched.
                </Typography>
            </Grid>
            <Grid item xs={8} container alignItems="center" spacing={4}>
                <Grid item xs={10}>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Search"
                        onChange={(e) => setMovie(e?.target.value)}
                    />
                </Grid>
                <Grid item xs={2}>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ backgroundColor: 'red', height: '48px' }}
                        size="large"
                        onClick={searchMovie}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
            {console.log(movieData, 'at the kk')}
            {movieData && movieData?.Search?.length > 0 && (
                <Grid item xs={8}>
                    <Typography variant="h5" style={{ marginTop: '16px' }}>Search Results</Typography>
                    <Grid container spacing={2}>
                        {movieData?.Search?.map((result, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                                <MovieCard movie={result} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            )}
        </Grid>
    );
}

export default SearchPage;
