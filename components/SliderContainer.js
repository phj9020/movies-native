import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";


// screen 치수를 가져다주는 react-native package : Dimensions
const { height: HEIGHT } = Dimensions.get("window");


const Slider = styled.View`
  width: 100%;
  height: ${HEIGHT / 3}px;
  margin-bottom: 20px;
`;

function SliderContainer({children}) {
    return (
        <Slider>
            <Swiper controlsEnabled={false} loop={true} timeout={3} >
                {children}
            </Swiper>
        </Slider>
    )
}

SliderContainer.proptypes = {
    children: PropTypes.node.isRequired
}

export default SliderContainer;


