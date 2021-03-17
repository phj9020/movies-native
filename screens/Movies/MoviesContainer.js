import React, {useEffect, useState} from 'react';
import { movieApi } from '../../API';
import MoviesPresenter from './MoviesPresenter';

function Movies() {
    const [movies, setMovies] = useState({
        loading: true,
        nowPlaying:[],
        nowPlayingError:null,
        popular:[],
        popularError: null,
        upcoming:[],
        upcomingError: null
    });

    const getData = async()=> {
        const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
        const [popular, popularError] = await movieApi.popular();
        const [upcoming, upcomingError] = await movieApi.upcoming();
        setMovies({
            loading: false,
            nowPlaying:nowPlaying,
            nowPlayingError:nowPlayingError,
            popular:popular,
            popularError:popularError,
            upcoming: upcoming,
            upcomingError: upcomingError
        })
    }

    useEffect(()=> {
        getData();
    }, [])


    return (
        <MoviesPresenter refreshFn={getData} {...movies} />
    )
}

export default Movies;
