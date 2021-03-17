import React from 'react';
import styled from 'styled-components/native'
import PropTypes from 'prop-types'; 
import Poster from '../Poster';
import { TouchableOpacity } from 'react-native';
import Vote from '../Vote';
import { trimText } from '../../utils';
import { apiImageFormat } from '../../API';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
    width: 100%;
    height: 100%;
`

const BgImage = styled.Image`
    width: 100%;
    height: 100%;
    opacity: 0.4;
    position: absolute;
`

const Content = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
`

const Data = styled.View`
    width: 50%;
    align-items: flex-start;

`

const Title = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 19px;
    margin-bottom: 5px;
`

const VotesContainer = styled.View`
    margin-bottom: 5px;
`

const Overview = styled.Text`
    color: rgb(220,220,220);
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
`

const Button = styled.View`
    background-color: #e74c3c;
    padding: 5px 10px;
    border-radius: 3px;
`

const ButtonText= styled.Text`
    color: white;
`

function Slide({id, title, backgroundImage, votes, overview, poster}) {
    const navigation = useNavigation();

    const goToDetail = () => {
        navigation.navigate("Detail",{id, title, backgroundImage, votes, overview, poster} )
    }
    return (
        <Container key={id}>
            <BgImage resizeMode='cover' source={{uri: apiImageFormat(backgroundImage) }} />
            <Content>
                <Poster url={poster} />
                <Data>
                    <Title>{trimText(title, 40)}</Title>
                    <VotesContainer>
                        <Vote votes={votes} />
                    </VotesContainer>
                    <Overview>{trimText(overview, 110)}</Overview>
                    <TouchableOpacity onPress={goToDetail}>
                        <Button>
                            <ButtonText>View Details</ButtonText>
                        </Button>
                    </TouchableOpacity>
                </Data>
            </Content>
        </Container>
    )
}

Slide.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Slide;