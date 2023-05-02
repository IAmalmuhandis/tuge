
///////////////////////////////////////////////////// Develop a React Native Application has two text field and a button

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handlePress = () => {
    console.log(`Button pressed: ${text1}, ${text2}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something here..."
        value={text1}
        onChangeText={setText1}
      />
      <TextInput
        style={styles.input}
        placeholder="Type something else here..."
        value={text2}
        onChangeText={setText2}
      />
      <Button
        title="Press me"
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default App;

