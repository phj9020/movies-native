import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { movieApi } from '../API';

function Movies() {
    const [movies, setMovies] = useState({
        nowPlaying:[],
        nowPlayingError:null,
        popular:[],
        popularError: null,
        upcoming:[],
        upcomingError: null
    });
    console.log(movies)
    const getData = async()=> {
        const [nowPlaying, nowPlayingError] = await movieApi.nowPlaying();
        const [popular, popularError] = await movieApi.popular();
        const [upcoming, upcomingError] = await movieApi.upcoming();
        setMovies({
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
        <View style={{ flex:1, backgroundColor: "black"}} >
            <Text style={styles.text}>{movies.nowPlaying.map(item => item.title)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white"
    }
})
export default Movies;
