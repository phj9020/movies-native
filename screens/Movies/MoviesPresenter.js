import React from "react";
import {Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Horizontal from "../../components/Horizontal";

// screen 치수를 가져다주는 react-native package : Dimensions
const { height: HEIGHT } = Dimensions.get("window");

const SliderContainer = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 20px;
`;

const Container = styled.View``

const UpcomingContainer = styled.View`
  margin-top:20px;
`

function MoviesPresenter({ loading, nowPlaying, popular, upcoming }) {
  return (
    <ScrollContainer loading={loading}>
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
          <Container>
            <HorizontalSlider title={"Popular Movies"}>
              {popular.map((item) => (
                  <Horizontal
                    id={item.id}
                    key={item.id}
                    poster={item.poster_path}
                    title={item.original_title}
                    vote={item.vote_average}
                  />
                ))}
            </HorizontalSlider>
            <Title title={"Coming Soon"} />
            <UpcomingContainer>
              {upcoming.map((item) => (
                <Vertical
                  id={item.id}
                  key={item.id}
                  poster={item.poster_path}
                  title={item.original_title}
                  releaseDate={item.release_date}
                  overview={item.overview}
                />
              ))}
            </UpcomingContainer>
          </Container>
        </>
    </ScrollContainer>
  );
}

export default MoviesPresenter;
