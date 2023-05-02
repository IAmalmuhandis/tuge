import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [leftOperand, setleftOperand] = useState("");
  const [currentOperator, setcurrentOperator] = useState("");
  const [rightOperand, setrightOperand] = useState("");
  const [display, setdisplay] = useState("");

  const handleNumber = (num) => {
    if (currentOperator.trim() === "") {
      setleftOperand(leftOperand + num);
      setdisplay(() => num + currentOperator + rightOperand);
    } else {
      setrightOperand(rightOperand + num);
      setdisplay(() => leftOperand + currentOperator + num);
    }
  };

  const handleOperator = (operator) => {
    setcurrentOperator(operator);
    setdisplay(() => leftOperand + operator + rightOperand);
  };

  const calculate = () => {
    let numOne = parseInt(leftOperand);
    let numTwo = parseInt(rightOperand);
    switch (currentOperator) {
      case "+":
        setdisplay(numOne + numTwo);
        break;
      case "-":
        setdisplay(numOne - numTwo);
        break;
      case "*":
        setdisplay(numOne * numTwo);
        break;
      case "/":
        setdisplay(numOne / numTwo);
        break;
      default:
        break;
    }
  };

  const clear = () => {
    setleftOperand("");
    setrightOperand("");
    setcurrentOperator("");
    setdisplay("");
  };

  const Button = ({ onPress, title }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={styles.text}>{display}</Text>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.row}>
          <Button onPress={() => handleNumber("7")} title="7" />
          <Button onPress={() => handleNumber("8")} title="8" />
          <Button onPress={() => handleNumber("9")} title="9" />
          <Button onPress={() => handleOperator("*")} title="*" />
        </View>
        <View style={styles.row}>
          <Button onPress={() => handleNumber("4")} title="4" />
          <Button onPress={() => handleNumber("5")} title="5" />
          <Button onPress={() => handleNumber("6")} title="6" />
          <Button onPress={() => handleOperator("-")} title="-" />
        </View>
        <View style={styles.row}>
          <Button onPress={() => handleNumber("1")} title="1" />
          <Button onPress={() => handleNumber("2")} title="2" />
          <Button onPress={() => handleNumber("3")} title="3" />
          <Button onPress={() => handleOperator("+")} title="+" />
        </View>
        <View style={styles.row}>
          <Button onPress={clear} title="C" />
          <Button onPress={() => handleNumber("0")} title="0" />
          <Button onPress={calculate} title="=" />
          <Button onPress={() => handleOperator("/")} title="/" />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topView: {
    backgroundColor: "#1B1B1B",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
    height: "50%",
  },
  bottomView: {
    backgroundColor: "#2C3539",
    width: "100%",
    height: "50%",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    color: "#fff",
    fontSize: 40,
  },
});
