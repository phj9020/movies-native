import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Poster from './Poster';
import Vote from './Vote';
import { trimText } from '../utils';

const Container = styled.View`
    align-items: center;
    margin-right: 15px;
`


const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin: 10px 0px 5px 0px;
`


function Horizontal({id, poster, title, vote}) {
    return (
        <TouchableOpacity>
            <Container id={id}>
                <Poster url={poster} />
                <Title>{trimText(title, 10)}</Title>
                <Vote votes={vote} />
            </Container>
        </TouchableOpacity>
    )
}

Horizontal.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
}

export default Horizontal;
