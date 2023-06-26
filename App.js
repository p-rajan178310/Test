import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './SplashScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <SplashScreen />
      <Text>Welcome to Pushpraj's app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
