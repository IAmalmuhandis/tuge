
///            Develop  a React Native application that shows AUK Logo and “Al-Qalam University Katsina” under the logo at the centere of the screen

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/auk-logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Al-Qalam University Katsina</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
