import React, { useLayoutEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import TV from '../screens/TV';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function Tabs({ navigation, route}) {

    useLayoutEffect(()=> {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "Movies";
        navigation.setOptions({title: routeName});
        console.log(routeName);
    },[route])

    return (
        <Tab.Navigator>
            <Tab.Screen name="Movies" component={Movies}  />
            <Tab.Screen name="TV" component={TV} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Favs" component={Favs} />
        </Tab.Navigator>
    )
}

export default Tabs;
