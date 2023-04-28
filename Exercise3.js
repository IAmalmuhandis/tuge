

/////// //////////////////////  Develop a React Native application that has a text field and a button

import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [text, setText] = useState('');

  const handlePress = () => {
    console.log(`Button pressed: ${text}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something here..."
        value={text}
        onChangeText={setText}
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
