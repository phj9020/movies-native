import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import { Image, StatusBar} from 'react-native';
import { Asset } from 'expo-asset';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
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
      "https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      require("./assets/splash.png")
    ]);

    const fonts = cacheFonts([Ionicons.font, FontAwesome.font]);

    // preloaded images and fonts
    return Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setIsReady(true);

  return (
    isReady ?  (
      <> 
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer> 
        <StatusBar barStyle="light-content" />
      </>
    ) : (
      <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} />
    ) 
  )
}


