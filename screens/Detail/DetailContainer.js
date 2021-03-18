import React, { useLayoutEffect, useState }  from 'react';
import { useEffect } from 'react';
import { movieApi, tvApi } from '../../API';
import DetailPresenter from './DetailPresenter';
import * as WebBrowser from 'expo-web-browser';

function DetailContainer({navigation, route: {params: {isTv, id, backgroundImage, title, poster, votes, overview}}}) {
    // param에서 온데이터를 state에 저장 
    const [detail, setDetail] = useState({
        loading:true,
        result: {
            title,
            backgroundImage,
            poster,
            votes,
            overview,
            videos: {
                results: []
            }
        }
    })


    const getData = async() => {
        // API에서 가져온 모든 데이터를 이용해 params에서 온 데이터를 덮어 쓸것 
        const [getDetail, getDetailError] = isTv ? await tvApi.show(id) : await movieApi.movie(id);

        setDetail({ 
            loading: false,
            result: {
                ...getDetail,
                title: getDetail.title || getDetail.name,
                backgroundImage: getDetail.backdrop_path,
                poster: getDetail.poster_path,
                votes: getDetail.vote_average,
                overview: getDetail.overview
            }
        })
    
    }

    useLayoutEffect(()=> {
        // Detail Screen Name change 
        navigation.setOptions({title: title});
    }, []);

    useEffect(()=>{
        getData();
    }, [id])


    const openBrowser = async(url) => {
        await WebBrowser.openBrowserAsync(url);
    }

    return (
        <DetailPresenter openBrowser={openBrowser} {...detail} />
    )
}

export default DetailContainer
