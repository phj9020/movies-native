import React, {useState, useEffect} from 'react'
import { movieApi } from '../../API';
import FavsPresenter from './FavsPresenter';

function Favs() {
    const [discover, setDiscover]= useState({
        movie: [],
        movieError: null
    });


    const getData = async () => {
        const [discover, discoverError] = await movieApi.discover();
        setDiscover({
            movie: discover,
            movieError: discoverError
        })
    }

    useEffect(()=> {
        getData();
    },[])

    return (
        <FavsPresenter {...discover} />
    )
}

export default Favs;