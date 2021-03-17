import React from 'react';
import {View, Text} from 'react-native';

function Detail({navigation, route: {params : {id, poster, title}}} ) {

    // set Detail Screen Name to clicked title 
    navigation.setOptions({title: title});

    
    return (
        <View>
            <Text>{id}</Text> 
        </View>
    )
}

export default Detail;
