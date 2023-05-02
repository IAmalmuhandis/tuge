import { StyleSheet, Button, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Click Me"
        onPress={() => {
          console.log("Hello welcome to React Native");
        }}
      />
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
});
