import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import Vote from './Vote';
import { trimText } from '../utils';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
    align-items: center;
    margin-right: 15px;
`


const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin: 10px 0px 5px 0px;
`


function Horizontal({isDetail= false, isTv = false, id, poster, title, votes, backgroundImage, overview}) {
    const navigation = useNavigation();

    const goToDetail = () => {
        navigation.navigate("Detail", {isTv, id, poster, title, votes, backgroundImage, overview})
    }

    return (
        <>
        {isDetail ? (
            <Container>
                <Poster url={poster} />
                <Title>{trimText(title, 10)}</Title>
                {votes ? <Vote votes={votes} /> : null}
            </Container>
        ) : (
            <TouchableOpacity onPress={goToDetail}>
                <Container>
                    <Poster url={poster} />
                    <Title>{trimText(title, 10)}</Title>
                    {votes ? <Vote votes={votes} /> : null}
                </Container>
            </TouchableOpacity>
        ) }
        </>
    )
}

Horizontal.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number,
    backgroundImage: PropTypes.string,
    overview: PropTypes.string
}

export default Horizontal;
