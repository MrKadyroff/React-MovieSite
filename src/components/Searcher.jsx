import React, { useState } from 'react';

const Searcher = (props) => {
    const { searchMovies = Function.prototype } = props;
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const handleKey = (event) => {};
    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    };

    return (
        <div className='row'>
            <div className='input-field'>
                <input
                    id='searcher'
                    type='search'
                    className='validate'
                    placeholder='Search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className='btn waves-effect waves-light'
                    type='submit'
                    name='action'
                    onClick={() => searchMovies(search, type)}>
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
                        onChange={handleFilter}
                        checked={type === 'all'}
                    />
                    <span>All</span>
                </label>{' '}
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='movie'
                        onChange={handleFilter}
                        checked={type === 'movie'}
                    />
                    <span>Movies</span>
                </label>{' '}
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='series'
                        onChange={handleFilter}
                        checked={type === 'series'}
                    />
                    <span>Series</span>
                </label>
            </div>
        </div>
    );
};

export { Searcher };
