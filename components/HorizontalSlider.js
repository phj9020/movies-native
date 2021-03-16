import React from "react";
import { ScrollView } from "react-native";
import Title from "./Title";
import styled from 'styled-components/native';

const HorizontalSliderContainer = styled.View``

function HorizontalSlider({ title, children }) {
  return (
    <HorizontalSliderContainer>
      <Title title={title} />
      <ScrollView
        style={{ marginTop: 20, marginBottom: 40 }}
        contentContainerStyle={{ paddingLeft: 30 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </HorizontalSliderContainer>
  );
}

export default HorizontalSlider;
