import { useState } from "react";
import { StyleSheet, TextInput, View, Button, Text } from "react-native";

export default function App() {
  const [currentValue, setcurrentValue] = useState(0);
  const [baseA, setbaseA] = useState("");
  const [baseB, setbaseB] = useState("");
  const [height, setheight] = useState("");

  const handleBaseA = (val) => {
    setbaseA(val);
  };

  const handleBaseB = (val) => {
    setbaseB(val);
  };

  const handleHeight = (val) => {
    setheight(val);
  };

  const calculate = () => {
    let a = ((parseFloat(baseA) + parseFloat(baseB)) / 2) * parseFloat(height);
    setcurrentValue(a);
  };
  return (
    <View style={styles.container}>
      <Text>Area Of Trapezium: {currentValue}</Text>
      <TextInput
        onChangeText={handleBaseA}
        placeholder="Base A"
        style={styles.textInput}
      />
      <TextInput
        onChangeText={handleBaseB}
        placeholder="Base B"
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
