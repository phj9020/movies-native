import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const StackNavigator = () => {
    
    return(
        <Stack.Navigator>
            <Stack.Screen name="Tabs12" component={Tabs} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>

    )
}

export default StackNavigator;