import React from "react";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Horizontal from "../../components/Horizontal";
import List from "../../components/List";
import SliderContainer from "../../components/SliderContainer";

const Container = styled.View``

function MoviesPresenter({ refreshFn, loading, nowPlaying, popular, upcoming }) {
  return (
    <ScrollContainer loading={loading} refreshFn={refreshFn} >
      <>
          <SliderContainer>
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
            <List title={"Coming Soon"}>
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
            </List>
          </Container>
      </>
    </ScrollContainer>
  );
}

export default MoviesPresenter;
