import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Searcher } from '../components/Searcher';

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=78584b3c&s=matrix')
            .then((response) => {
                return response.json();
            })
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }

    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=78584b3c&s=${str}${
                type !== 'all' ? `&type=${type}` : ' '
            }`
        )
            .then((response) => {
                return response.json();
            })
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
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
