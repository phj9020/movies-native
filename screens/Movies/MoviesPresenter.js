import React from "react";
import { ActivityIndicator, Dimensions, ScrollView } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";

// screen 치수를 가져다주는 react-native package : Dimensions
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
    width:${WIDTH}px;
    height:${HEIGHT / 3}px;
    margin-bottom: 50px;
`

function MoviesPresenter({ loading, nowPlaying }) {

  return (
    <ScrollView style={{backgroundColor:"black"}} contentContainerStyle={{ flex: 1, justifyContent: loading ? "center" : "flex-start"}}>
      {loading ? (
        <ActivityIndicator
          color="#0000ff"
          size="large"
        />
      ) : (
        <>
          <SliderContainer>
            <Swiper controlsEnabled={false} loop={true} timeout={3}>
              {nowPlaying.map((item) => (
                <Slide
                  key={item.id}
                  id={item.id}
                  title={item.original_title}
                  backgroundImage={item.backdrop_path}
                  votes={item.vote_average}
                  overview={item.overview}
                  poster={item.poster_path}
                />
              ))}
            </Swiper>
          </SliderContainer>
          <Title title={"Popular Movies"} />
        </>
      )}
    </ScrollView>
  );
}

export default MoviesPresenter;
