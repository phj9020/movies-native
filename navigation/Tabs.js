import React, { useLayoutEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import TV from '../screens/TV/';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

const Tab = createBottomTabNavigator();

function Tabs({ navigation, route}) {

    useLayoutEffect(()=> {
        const routeName = getFocusedRouteNameFromRoute(route) ?? "Movies";
        navigation.setOptions({title: routeName});
        console.log(routeName);
    },[route])

    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused}) => {
                //platform
                let iconName = Platform.OS === "ios" ? "ios-" : "md-"
                
                if(route.name === "Movies") {
                    iconName += "film"
                } else if (route.name === "TV") {
                    iconName += "tv"
                } else if (route.name === "Search"){
                    iconName += "search"
                } else if (route.name === "Discovery") {
                    iconName += "heart"
                }
                return <Ionicons name={iconName} color={focused ? "white" : "grey"} size={26} />
            }
        })} tabBarOptions={{ 
            showLabel: false, 
            style:{backgroundColor:"black", borderTopColor: "black"}
            }}>
            <Tab.Screen name="TV" component={TV} />
            <Tab.Screen name="Movies" component={Movies}  />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Discovery" component={Favs} />
        </Tab.Navigator>
    )
}

export default Tabs;
