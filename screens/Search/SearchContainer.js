import React, {useState} from 'react'
import { movieApi, tvApi } from '../../API';
import SearchPresenter from './SearchPresenter'

function Search() {
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState({
        movies: [],
        moviesError: null,
        shows: [],
        showsError: null
    });
    
    const onChange = (text) => {
        setKeyword(text)
    }

    const search = async () => {
        // when refresh keyword could be empty
        if(keyword === "") {
            return;
        }
        const [movies, moviesError] = await movieApi.search(keyword);
        const [shows, showsError] = await tvApi.search(keyword);
        setResults({ movies: movies, moviesError: moviesError, shows: shows, showsError: showsError})

    }

    return (
        <SearchPresenter 
            onChange={onChange} 
            onSubmit={search} 
            keyword={keyword} 
            {...results}
        />
    )
}

export default Search;
