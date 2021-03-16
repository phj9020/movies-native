import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import { formatDate, trimText } from '../utils';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
    padding: 0px 30px;
    margin-bottom: 30px;
    flex-direction: row;
`
const Data = styled.View`
    flex: 1;
    margin-left:30px;

`
const Title =styled.Text`
    color: white;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 10px;
`

const ReleaseDate =styled.Text`
    color: white;
    font-size: 12px;
    margin-bottom: 10px;
`
const Overview = styled.Text`
    color:white;
    font-size: 12px;
`

function Vertical({id, poster, title, releaseDate, overview}) {
    return (
        <TouchableOpacity>
            <Container id={id}>
                <Poster url={poster} />
                <Data>
                        <Title>{trimText(title, 30)}</Title>
                        {releaseDate ? <ReleaseDate>개봉일: {formatDate(releaseDate)}</ReleaseDate> : null}
                        <Overview>{trimText(overview, 150)}</Overview>
                </Data>
            </Container>
        </TouchableOpacity>
    )
}

Vertical.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    releaseDate: PropTypes.string,
    overview: PropTypes.string.isRequired
}

export default Vertical
