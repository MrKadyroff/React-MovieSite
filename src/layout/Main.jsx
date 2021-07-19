import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Searcher } from '../components/Searcher';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        console.log('api key', API_KEY);
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=matrix`)
            .then((response) => {
                return response.json();
            })
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${str}${
                type !== 'all' ? `&type=${type}` : ' '
            }`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    };

    render() {
        const { movies, loading } = this.state;
        return (
            <main className='container content'>
                <Searcher searchMovies={this.searchMovies} />
                {!loading ? <Movies movies={movies} /> : <Preloader />}
            </main>
        );
    }
}
export { Main };