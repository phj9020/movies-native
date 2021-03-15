import React from "react";
import { ActivityIndicator, Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";

// screen 치수를 가져다주는 react-native package : Dimensions
const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

const Container = styled.View`
  flex: 1;
  background-color: black;
`;

const SliderContainer = styled.View`
    width:${WIDTH}px;
    height:${HEIGHT / 4}px;
`

function MoviesPresenter({ loading, nowPlaying }) {
  console.log(nowPlaying);
  return (
    <Container>
      {loading ? (
        <ActivityIndicator
          color="#0000ff"
          size="large"
          style={{ flex: 1, justifyContent: "center" }}
        />
      ) : (
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
      )}
    </Container>
  );
}

export default MoviesPresenter;
