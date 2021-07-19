import React from 'react';

class Searcher extends React.Component {
    state = {
        search: '',
        type: 'all',
    };

    handleKey = (event) => {};
    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className='row'>
                <div className='input-field'>
                    <input
                        id='searcher'
                        type='search'
                        className='validate'
                        placeholder='Search'
                        value={this.state.search}
                        onChange={(e) =>
                            this.setState({ search: e.target.value })
                        }
                        onKeyDown={this.handleKey}
                    />
                    <button
                        className='btn waves-effect waves-light'
                        type='submit'
                        name='action'
                        onClick={() =>
                            this.props.searchMovies(
                                this.state.search,
                                this.state.type
                            )
                        }>
                        Search
                    </button>
                </div>

                <div>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='all'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'}
                        />
                        <span>All</span>
                    </label>{' '}
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='movie'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'}
                        />
                        <span>Movies</span>
                    </label>{' '}
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='series'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'}
                        />
                        <span>Series</span>
                    </label>
                </div>
            </div>
        );
    }
}
export { Searcher };
