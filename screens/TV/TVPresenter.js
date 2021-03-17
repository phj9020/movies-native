import React from "react";
import {Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import styled from "styled-components/native";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import Slide from "../../components/Movies/Slide";
import ScrollContainer from "../../components/ScrollContainer";
import SliderContainer from "../../components/SliderContainer";
import Vertical from "../../components/Vertical";

const Container = styled.View`
  margin-top: 30px;
`;

function TVPresenter({refreshFn, loading, popular, topRated, today, thisWeek }) {
  return (
    <ScrollContainer loading={loading} refreshFn={refreshFn} >
      <Container>
        <HorizontalSlider title={"Popular Shows"}>
          {popular.map((show) => (
            <Horizontal
              id={show.id}
              key={show.id}
              poster={show.poster_path}
              title={show.name}
              vote={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <SliderContainer>
            {thisWeek.map((show) => (
                <Slide
                key={show.id}
                id={show.id}
                title={show.name}
                backgroundImage={show.backdrop_path}
                votes={show.vote_average}
                overview={show.overview}
                poster={show.poster_path}
                />
            ))}
        </SliderContainer>
        <HorizontalSlider title={"Top Rated Shows"}>
          {topRated.map((show) => (
            <Horizontal
              id={show.id}
              key={show.id}
              poster={show.poster_path}
              title={show.name}
              vote={show.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title={"Airing Today"}>
          {today.map((show) => (
            <Vertical 
                id={show.id} 
                key={show.id} 
                poster={show.poster_path}
                title={show.name}
                releaseDate={show.first_air_date}
                overview={show.overview}
            />
          ))}
        </List>
      </Container>
    </ScrollContainer>
  );
}

export default TVPresenter;
