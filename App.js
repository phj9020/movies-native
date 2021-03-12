import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { Image} from 'react-native';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/Stack';

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font))

const cacheImages = images => 
  images.map(image => {
    // 이미지가 문자열이면 이미지를 미리 가져오겠다
    if(typeof image === "string") {
      return Image.prefetch(image);
    } else {
      // 그게 아니라면 module 을 가져오겠다  여기서 모듈은 require("path")를 말함 
      return Asset.fromModule(image).downloadAsync();
    }
  })

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png")
    ]);

    const fonts = cacheFonts([Ionicons.font]);

    // preloaded images and fonts
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setIsReady(true);

  return (
    isReady ?  <NavigationContainer><StackNavigator /></NavigationContainer> : <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} /> 
  )
}


