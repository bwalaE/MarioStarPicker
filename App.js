import React, { useState } from 'react'; //maybe try removing useState here if things arent working?
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Sound from 'react-native-sound'

/*async componentDidMount() { 
  await Font.loadAsync({ 
    'mario64': require('./assets/fonts/Mario64.ttf')
  }); 
  this.setState({fontLoaded: true, isLoadingComplete: true}); 
}*/

const fetchFont = async () => {
  await Font.loadAsync({
    'mario64': require('./assets/fonts/Mario64.ttf')
  })
}

const windowWidth = Dimensions.get('window').width;

export default function App() {

  const [fontLoaded, setfontLoaded] = useState(false);
  const [text2, changeText] = useState('MARIO');

  const pressHandler = () => { //this function runs when Mario is pressed
    changeText('OIL')
    
  }

  if (!fontLoaded){
    return <AppLoading 
      startAsync={fetchFont} 
      onError={() => console.log('ERROR')}
      onFinish={() => {
        setfontLoaded(true)
      }}
    />;
  }
  else {

    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('./assets/screen.png')} resizeMode="cover" style={styles.bgImage}/>
        <Text style={styles.text}>{text2}</Text>
        <Image source={require('./assets/button2.png')} style={styles.button2}/>
        <TouchableOpacity onPress={() => pressHandler()} style={styles.toucher}>
          <Image source={require('./assets/button1.png')} style={styles.button1}/>
        </TouchableOpacity>
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
    position: 'absolute',
    height: 100,
    paddingHorizontal: 16,
    fontFamily: 'mario64',
    fontSize: 26
  },
  bgImage: {
    width: windowWidth+30,
    height: undefined,
    aspectRatio: 1,
  },
  button2: {
    position: 'absolute',
    left: (windowWidth/2)-69,
    top: 468,
    width: 129,
    height: undefined,
    aspectRatio: 1
  },
  button1: {
    top: 85,
    right: 5,
    width: 130,
    height: undefined,
    aspectRatio: 1
  },
  toucher: {
    position: 'absolute',
  }
});
