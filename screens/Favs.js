import React, {useState, useEffect} from 'react'
import {View, Text} from 'react-native';
import { movieApi } from '../API';

function Favs() {
    const [discover, setDiscover]= useState({
        movie: [],
        movieError: null
    });

    console.log(discover)

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
        <View>
            <Text>{discover.movie?.length}</Text> 
        </View>
    )
}

export default Favs;
