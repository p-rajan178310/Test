import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';


export default class SplashScreenComponent extends React.Component {
  componentDidMount() {
    SplashScreen.preventAutoHideAsync();
    // Simulate a background task or fetch data
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000); // Replace 3000 with the desired delay for your splash screen
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/splash.png')}
          style={styles.splashImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
// hello motto