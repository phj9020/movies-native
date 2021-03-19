import React, {useState, useEffect} from 'react';
import {Dimensions, PanResponder, Animated} from 'react-native';
import styled from 'styled-components/native';
import { apiImageFormat } from '../../API';

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
    flex:1;
    background-color: black;
    align-items: center;
    justify-content: center;
`

// View 에서는 animate을 적용할 수 없다 따라서 Animated.View 태그를 적용
// const Card = styled.View`
//     height: ${HEIGHT / 1.5}px;
//     width: 90%;
//     position:absolute;
// `

const Poster = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 20px;
`

const styles = {
    height: HEIGHT / 1.5,
    width: "90%",
    position:"absolute",
}

function FavsPresenter({results}) {
    const [topIndex, setTopIndex]= useState(0);
    const nextCard = ()=> setTopIndex(currentValue => currentValue + 1);
    const position = new Animated.ValueXY();
    // 마우스를 드래그 할 때 x 값을 업데이트 해야 된다 
    const panResponder = PanResponder.create({
            // Ask to  responder
            onStartShouldSetPanResponder: () => true,
            
            onPanResponderMove: (event, {dx, dy}) => {
                // gesture 안의 dx, dy는 처음 클릭한 좌표로부터 움직인 거리를 측정 
                // console.log(gesture.dx)

                // position setValue 
                position.setValue({
                    x: dx,
                    y: dy
                })
            },
            // touch를 띌 때 0,0 좌표로 animation을 넣어 돌아가게 만든다 
            onPanResponderRelease: (event, {dx, dy}) => {
                if(dx >= 250 ) {
                    // discard to the right 
                    console.log("discard to right")
                    Animated.spring(position, {
                        toValue: {
                            x:WIDTH + 100,
                            y: dy
                        },
                        useNativeDriver: true
                    }).start(nextCard)
                } else if (dx <= -250) {
                    // discard to the left
                    console.log("discard to left")
                    Animated.spring(position, {
                        toValue: {
                            x:-WIDTH - 100,
                            y: dy
                        },
                        useNativeDriver: true
                    }).start(nextCard)
                } else {
                    // position 값에 대해 기본값 애니메이션을 만든다
                    Animated.spring(position, {
                        toValue: {
                            x: 0,
                            y: 0
                        },
                        bounciness: 15, 
                        useNativeDriver: true
                    }).start()
                }
            }
        });

    const rotationValues = position.x.interpolate({
        // when x is -100 output is -10deg 
        inputRange: [-255, 0, 255],
        outputRange:["-10deg","0deg", "10deg"],
        // interpolate에 리밋을 걸어야 함 clamp
        extrapolate: "clamp"
    })

        // setInterval(() => console.log(rotationValues), 500)
        // position은 getTranslateTransform 함수를 가지고 있다 , x와 y에 대해 css 표현을 얻어내는 함수 

    const secondCardOpacity = position.x.interpolate({
        inputRange: [-255, 0, 255],
        outputRange:[1, 0.2, 1],
        extrapolate: "clamp"
    })

    const secondCardScale = position.x.interpolate({
        inputRange: [-255, 0, 255],
        outputRange:[1, 0.8 ,1],
        extrapolate: "clamp"
    });

    useEffect(() => {
        position.setValue({ x: 0, y: 0 });
      }, [topIndex]);


    return (
        <Container>
            {results.map((result, index) => {
                if(index < topIndex) {
                    return null;
                } else if(index === topIndex) {
                    // first Card transfrom : rotate(value),  position.getTranslateTransfrom() which is x, y  
                    return (
                        <Animated.View  style={{ zIndex: 1, ...styles, transform: [{ rotate: rotationValues}, ...position.getTranslateTransform()] }} key={result.id} {...panResponder.panHandlers}>
                            <Poster source={{ uri : apiImageFormat(result.poster_path) }}/>
                        </Animated.View>
                    )
                } else if(index === topIndex+1) {
                    // second card opacity: secondCardOpacity
                    return (
                        <Animated.View style={{ ...styles, zIndex: -index, opacity:secondCardOpacity, transform: [{scale: secondCardScale}] }} key={result.id} {...panResponder.panHandlers}>
                            <Poster source={{ uri : apiImageFormat(result.poster_path) }}/>
                        </Animated.View>
                ) 
                } else {
                    // rest card opacity : 0
                    return (
                        <Animated.View style={{ ...styles, zIndex: -index, opacity:0 }} key={result.id} {...panResponder.panHandlers}>
                            <Poster source={{ uri : apiImageFormat(result.poster_path) }}/>
                        </Animated.View>
                    )
                }
            }
            )}
        </Container>
    )
}

export default FavsPresenter;
