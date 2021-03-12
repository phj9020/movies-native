import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {Text, Image} from 'react-native';
import { Asset } from 'expo-asset';

const cacheImages = (images) => 
  images.map(image => {
    if(typeof image === 'string') {
      // 이미지가 문자열이면 이미지를 미리 가져오겠다
      return Image.prefetch
    } else {
      // 그게 아니라면 module 을 가져오겠다  여기서 모듈은 require("path")를 말함 
      return Asset.fromModule(module).downloadAsync();
    }
  })


export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAssets = async () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1584486188544-dc2e1417aff1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      require("./assets/splash.png")
    ]);
    console.log(images);
  };

  const onFinish = () => setIsReady(true);

  return (
    isReady ?  <Text>hello</Text> : <AppLoading startAsync={loadAssets} onFinish={onFinish} onError={console.error} /> 
  )
}


