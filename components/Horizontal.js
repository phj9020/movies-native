import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { apiImageFormat } from '../API';
import Poster from './Poster';
import Vote from './Vote';
import { TouchableOpacity } from 'react-native';

const Container = styled.View`
    align-items: center;
    margin-right: 15px;
    
`


const Title = styled.Text`
    color: white;
    font-weight: 500;
    margin: 10px 0px 5px 0px;
`


function Horizontal({poster, title, vote}) {
    return (
        <TouchableOpacity>
            <Container>
                <Poster url={apiImageFormat(poster)} />
                <Title>{title.length > 10 ? `${title.slice(0,10)}...` : title}</Title>
                <Vote votes={vote} />
            </Container>
        </TouchableOpacity>
    )
}

Horizontal.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote: PropTypes.number.isRequired,
}

export default Horizontal;
