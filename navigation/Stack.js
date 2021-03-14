import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const StackNavigator = () => {
    
    return(
        <Stack.Navigator
        screenOptions={{
            headerStyle: {backgroundColor: "black", borderBottomColor: "black", shadowColor: "black"}, 
            headerTintColor: "white",
            headerBackTitleVisible: false,
            headerTitleAlign: "center"
            }}>
            <Stack.Screen name="Home" component={Tabs} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>

    )
}

export default StackNavigator;