import React from "react";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";
import Input from "../../components/Search/Input";


function SearchPresenter({keyword, onChange, onSubmit, movies, shows }) {
  return (
    <ScrollContainer loading={false} refreshFn={onSubmit}>
      <Input
        placeholder={"Write a keyword"}
        value={keyword}
        onChange={onChange}
        onSubmit={onSubmit}
      />
      {movies.length !== 0 && (
        <HorizontalSlider title={"Movie Results"}>
          {movies.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path || movie.backdrop_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}

      {shows.length !== 0 && (
        <HorizontalSlider title={"TV Results"}>
          {shows.map((show) => (
            <Horizontal
              key={show.id}
              id={show.id}
              poster={show.poster_path || show.backdrop_path}
              title={show.name}
              votes={show.vote_average}
            />
          ))}
        </HorizontalSlider>
      )}
    </ScrollContainer>
  );
}

export default SearchPresenter;
