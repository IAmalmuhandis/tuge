import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function App() {
  const [mycounter, setMyCounter] = useState(0);

  const incrementNumber = () => {
    setMyCounter(mycounter + 1);
  };

  const decrementNumber = () => {
    setMyCounter(() => (mycounter < 1 ? 0 : mycounter - 1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{mycounter}</Text>
      <View style={styles.row}>
        <Pressable style={styles.buttonPlus} onPress={incrementNumber}>
          <Text style={styles.text}>+</Text>
        </Pressable>
        <Pressable style={styles.buttonMinus} onPress={decrementNumber}>
          <Text style={styles.text}>-</Text>
        </Pressable>
      </View>
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
  textStyle: {
    fontSize: 150,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    rowGap: 300,
  },
  buttonPlus: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "green",
    marginRight: 10,
  },
  buttonMinus: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 4,
    elevation: 3,
    marginLeft: 10,
    backgroundColor: "red",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
