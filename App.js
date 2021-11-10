import React, { useState } from 'react'; //maybe try removing useState here if things arent working?
import { SafeAreaView, StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFont = () => {
  Font.loadAsync({
    'mario64': require('./assets/fonts/Mario64.ttf')
  })
}

const windowWidth = Dimensions.get('window').width;

export default function App() {

  const [fontLoaded, setfontLoaded] = useState(false);

  if (!fontLoaded){
    return <AppLoading 
      startAsync={fetchFont} 
      onError={() => console.log('ERROR')}
      onFinish={() => {
        setfontLoaded(true)
      }}
    />;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./assets/screen.png')} resizeMode="cover" style={styles.bgImage}/>
        <Text style={styles.text}>MARIO</Text>
      </SafeAreaView>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    position: 'absolute',
    height: 100,
    fontFamily: 'mario64'
  },
  bgImage: {
    width: windowWidth+30,
    height: undefined,
    aspectRatio: 1
  }
});
