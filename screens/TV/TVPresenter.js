import React from "react";
import Horizontal from "../../components/Horizontal";
import HorizontalSlider from "../../components/HorizontalSlider";
import ScrollContainer from "../../components/ScrollContainer";



function TVPresenter({ loading, popular, topRated }) {
  return (
    <ScrollContainer loading={loading}>
        <HorizontalSlider title={"Popular Shows"}>
            {popular.map(show => 
                <Horizontal 
                    id={show.id}
                    key={show.id}
                    poster={show.poster_path}
                    title={show.name}
                    vote={show.vote_average}
                />
            )}
        </HorizontalSlider>
        <HorizontalSlider title={"Top Rated Shows"}>
            {topRated.map(show => 
                <Horizontal 
                    id={show.id}
                    key={show.id}
                    poster={show.poster_path}
                    title={show.name}
                    vote={show.vote_average}
                />
            )}
        </HorizontalSlider>
    </ScrollContainer>
  );
}

export default TVPresenter;
