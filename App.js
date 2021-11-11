import React, { useState } from 'react'; //maybe try removing useState here if things arent working?
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
//import Sound from 'react-native-sound'

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

// levels array
const levelList = [
  "BIG BOB-OMB ON THE SUMMIT", "FOOTRACE WITH KOOPA THE QUICK", "SHOOT TO THE ISLAND IN THE SKY", "BOB 100S + REDS",
  "MARIO WINGS TO THE SKY", "BEHIND CHAIN CHOMP'S GATE", "CHIP OFF WHOMP'S BLOCK", "TO THE TOP OF THE FORTRESS",
  "SHOOT INTO THE WILD BLUE", "WF 100S + REDS", "FALL ONTO THE CAGED ISLAND", "BLAST AWAY THE WALL",
  "PLUNDER IN THE SUNKEN SHIP", "CAN THE EEL COME OUT AND PLAY?", "TREASURE OF THE OCEAN CAVE", "JRB 100S + REDS",
  "BLAST TO THE STONE PILLAR", "THROUGH THE JET STREAM (JRB)", "CCM 100S + SLIP SLIDIN' AWAY", "LI'L PENGUIN LOST",
  "BIG PENGUIN RACE", "FROSTY SLIDE FOR 8 RED COINS", "SNOWMAN'S LOST HIS HEAD", "WALL KICKS WILL WORK", "GO ON A GHOST HUNT",
  "BBH 100S + RIDE BIG BOO'S MERRY-GO-ROUND", "SECRET OF THE HAUNTED BOOKS", "SEEK THE 8 RED COINS (BBH)", "BIG BOO'S BALCONY",
  "EYE TO EYE IN THE SECRET ROOM", "SWIMMING BEAST IN THE CAVERN", "HMC 100S + REDS", "METAL-HEAD MARIO CAN MOVE!",
  "NAVIGATING THE TOXIC MAZE", "A-MAZE-ING EMERGENCY EXIT", "WATCH FOR THE ROLLING ROCKS", "BOIL THE BIG BULLY",
  "BULLY THE BULLIES", "8-COIN PUZZLE WITH 15 PIECES", "RED-HOT LOG ROLLING", "LLL 100S + VOLCANO",
  "ELEVATOR TOUR IN THE VOLCANO", "IN THE TALONS OF THE BIG BIRD", "SHINING ATOP THE PYRAMID", "INSIDE THE ANCIENT PYRAMID",
  "STAND TALL ON THE FOUR PILLARS", "FREE FLYING FOR 8 RED COINS (SSL)", "SSL 100S + PYRAMID PUZZLE", "BOARD BOWSER'S SUB",
  "CHESTS IN THE CURRENT", "DDD 100S + POLES", "THROUGH THE JET STREAM (DDD)", "THE MANTA RAY'S REWARD", "COLLECT THE CAPS",
  "SNOWMAN'S BIG HEAD", "CHILL WITH THE BULLY", "IN THE DEEP FREEZE", "WHIRL FROM THE FREEZING POND", "SL 100S + REDS",
  "INTO THE IGLOO", "SHOCKING ARROW LIFTS!", "TOP O' THE TOWN", "SECRETS IN THE SHALLOWS & SKY", "EXPRESS ELEVATORS--HURRY UP!",
  "WDW 100S + REDS", "QUICK RACE THROUGH DOWNTOWN", "SCALE THE MOUNTAIN", "MYSTERY OF THE MONKEY CAGE", "TTM 100S + REDS",
  "MYSTERIOUS MOUNTAINSIDE", "BREATHTAKING VIEW FROM BRIDGE", "BLAST TO THE LONELY MUSHROOM", "PLUCK THE PIRANHA FLOWER",
  "THE TIP TOP OF THE HUGE ISLAND", "REMATCH WITH KOOPA THE QUICK", "FIVE ITTY BITTY SECRETS", "THI 100S + REDS",
  "MAKE WIGGLER SQUIRM", "ROLL INTO THE CAGE", "THE PIT AND THE PENDULUMS", "GET A HAND", "TTC 100S + STOMP ON THE THWOMP",
  "TIMED JUMPS ON MOVING BARS", "STOP TIME FOR RED COINS", "CRUISER CROSSING THE RAINBOW", "RR 100S + BIG HOUSE",
  "COINS AMASSED IN A MAZE", "SWINGIN' IN THE BREEZE", "TRICKY TRIANGLES!", "SOMEWHERE OVER THE RAINBOW",
  "THE PRINCESS'S SECRET SLIDE", "THE SECRET AQUARIUM", "BOWSER IN THE DARK WORLD (STAGE)", "BOWSER IN THE FIRE SEA (STAGE)",
  "BOWSER IN THE SKY (STAGE)", "BOWSER IN THE DARK WORLD (BOSS)", "BOWSER IN THE FIRE SEA (BOSS)", "BOWSER IN THE SKY (BOSS)",
  "WING CAP", "METAL CAP", "VANISH CAP", "WING MARIO OVER THE RAINBOWS", "MIPS 1", "MIPS 2", "LAKITU SKIP"
]

export default function App() {

  /*Sound.setCategory('Playback');
  const oomf = new Sound('./assets/sm64_mario_hurt.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    };
    oomf.play((success) => {
    if (success) {
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
      oomf.reset();
    }})
  });*/
  

  const [fontLoaded, setfontLoaded] = useState(false);
  const [text2, changeText] = useState('MARIO');

  const pressHandler = () => { //this function runs when Mario is pressed
    changeText(levelList[Math.floor(Math.random()*levelList.length)])
    //oomf.play()
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
