import React from 'react';
import { Dimensions, Text} from 'react-native';
import styled from 'styled-components/native';
import { apiImageFormat } from '../API';
import Poster from '../components/Poster';
import ScrollContainer from '../components/ScrollContainer';
import Vote from '../components/Vote';


const Header = styled.View`
    height: ${Dimensions.get("window").height / 3}px;
    align-items:center;
    justify-content: flex-end;
`
const BackgroundImg = styled.Image`
    width: 100%;
    height:100%;
    opacity:0.4;
    position: absolute;
`

const Container = styled.View`
    flex-direction:row;
    align-items:center;
    top: 30px;
`

const Info = styled.View`
    width: 50%;
    margin-left:40px;
`

const Title = styled.Text`
    color: white;
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 10px;
`
const Data = styled.View`
    margin-top: 50px;
    padding: 0px 30px;
    
`

const DataName = styled.Text`
    color: white;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight:800;
`

const DataValue = styled.Text`
    color: white;
    opacity: 0.8;
    font-weight: 500;
    font-size: 16px;
`

function Detail({navigation, route: {params : {id, backgroundImage, title, poster, votes, overview}}} ) {

    // set Detail Screen Name to clicked title    !! Cause Warning  
    // navigation.setOptions({title: title}); 

    return (
        <ScrollContainer loading={false}>
            <>
                <Header>
                    <BackgroundImg source={{uri: apiImageFormat(backgroundImage, "-")}} />
                    <Container>
                        <Poster url={poster} />
                        <Info>
                            <Title>{title}</Title>
                            {votes && <Vote votes={votes} />}
                        </Info>
                    </Container>
                </Header>
                <Data>
                    <DataName>Overview</DataName>
                    <DataValue>{overview}</DataValue>
                </Data>
            </>
        </ScrollContainer>
    )
}

export default Detail;
