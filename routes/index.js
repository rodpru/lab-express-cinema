const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
    try {
        const allMovies = await Movie.find()
        res.render('movies', {movies: allMovies});
    } catch (error) {
        res.render(error);
    }
})

router.get('/movies/:id', async (req, res) =>{
    try {
        let movieId = req.params.id;
        const movieById = await Movie.findById(movieId);
        res.render('movie-detail', {movie: movieById})
    } catch (error) {
        res.render(error);
    }
})

module.exports = router;
