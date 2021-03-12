import React from 'react';
import {View, Text, Button} from 'react-native';

function Movies({navigation}) {
    return (
        <View>
            <Text>Movies</Text>
            <Button title="Movie" onPress={()=> navigation.navigate("Detail")} />
        </View>
    )
}

export default Movies;
