import React, { useEffect, useState } from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Searcher } from '../components/Searcher';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (str, type = 'all') => {
        setLoading(false);
        fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
                type !== 'all' ? `&type=${type}` : ' '
            }`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoading(false);
                setMovies(data.Search);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <main className='container content'>
            <Searcher searchMovies={searchMovies} />
            {!loading ? <Movies movies={movies} /> : <Preloader />}
        </main>
    );
}
export { Main };
