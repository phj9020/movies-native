import React,{useState, useEffect} from 'react'
import {View, Text} from 'react-native';
import { tvApi } from '../API';

function TV() {
    const [tvs, setTvs]= useState({
        today: [],
        todayError: null,
        thisWeek:[],
        thisWeekError: null,
        topRated:[],
        topRatedError: null,
        popular: [],
        popularError: null
    });
    console.log(tvs);

    const getData = async () => {
        const [today, todayError] = await tvApi.today();
        const [thisWeek, thisWeekError] = await tvApi.thisWeek();
        const [topRated, topRatedError] = await tvApi.topRated();
        const [popular, popularError] = await tvApi.popular();
        
        setTvs({
            today: today,
            todayError: todayError,
            thisWeek: thisWeek,
            thisWeekError: thisWeekError,
            topRated: topRated,
            topRatedError: topRatedError,
            popular: popular,
            popularError: popularError
        })
    }

    useEffect(()=> {
        getData();
    },[])

    return (
        <View style={{flex:1, backgroundColor:"black"}}>
            <Text>TV</Text>
        </View>
    )
}

export default TV;
