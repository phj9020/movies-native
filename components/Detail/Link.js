import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Container = styled.View`
    flex-direction: row;
    margin-bottom: 5px;
    align-items: center;
`

const Text= styled.Text`
    font-weight: bold;
    margin-right: 10px;
`

function Link({onPress, text, icon}) {
    return (
        <TouchableOpacity onPress={onPress} >
            <Container>
                <Text style={{color: "white"}}>{text}</Text>
                <FontAwesome name={icon} color={"white"} size={22}></FontAwesome>
            </Container>
        </TouchableOpacity>
    )
}

export default Link;
