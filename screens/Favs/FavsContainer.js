import React, {useState, useEffect} from 'react'
import { movieApi } from '../../API';
import FavsPresenter from './FavsPresenter';

function Favs() {
    const [movies, setMovies] = useState({
        results: [],
        error: null
      });


    const getData = async () => {
        const [results, error] = await movieApi.discover();
        setMovies({
            results,
            error
        });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <FavsPresenter {...movies} />
    )
}

export default Favs;