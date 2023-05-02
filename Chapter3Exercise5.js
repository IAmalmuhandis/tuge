import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";

export default function App() {
  const [currentValue, setcurrentValue] = useState(0);
  const [radius, setradius] = useState("");
  const [height, setheight] = useState("");

  const handleRadius = (val) => {
    setradius(val);
  };
  const handleHeight = (val) => {
    setheight(val);
  };

  const calculate = () => {
    let volume = Math.floor(
      Math.PI * Math.pow(parseFloat(radius), 2) * parseFloat(height)
    );
    setcurrentValue(volume);
  };
  return (
    <View style={styles.container}>
      <Text>Volume of a Cylinder: {currentValue}</Text>
      <TextInput
        onChangeText={handleRadius}
        placeholder="Radius"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={handleHeight}
        placeholder="Height"
        style={styles.textInput}
      />
      <Button title="Calculate" onPress={calculate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "75%",
    padding: 10,
    margin: 10,
  },
});
