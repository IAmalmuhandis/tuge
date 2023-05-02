import { StatusBar } from 'expo-status-bar';
import {Animated, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState,  useEffect, useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';


export default function App() {

  const [count, setCount] = useState(0);
  const opacityValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const intervalId = setInterval(() => {
      Animated.sequence([
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [opacityValue]);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    
      setCount(count - 1);
    
  };
  const handleMultiply = () => {
    
    setCount(count * 2);
  
};


  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <Animated.Text style={[styles.title, { opacity: opacityValue }]}>
         COUNTER
      </Animated.Text>
      <StatusBar style="auto" />
      <Text style={count <= 0 ? styles.countRed : styles.count}>{count}</Text>
     <View style={styles.buttonContainer}>
     <TouchableOpacity style={styles.buttonMinus} onPress={handleSubtract}>
        <AntDesign name="minus" size={24} color="white" />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.buttonPlus} onPress={handleAdd}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonMultiply} onPress={handleMultiply}>
       <Text style={styles.multiplySign}> X</Text>
      </TouchableOpacity>
     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9eaec',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
     fontSize : 40,
     fontWeight: 'bold',
     color : '#333652'
  },
  buttonPlus: {
    
    backgroundColor: 'green',
    padding: 30,
    borderRadius: 5,
    marginHorizontal: 50,
  },
  buttonMinus: {
    
    backgroundColor: 'red',
    padding: 30,
    borderRadius: 5,
    marginHorizontal: 50,
  },
  buttonMultiply: {
    
    backgroundColor: 'blue',
    padding: 30,
    borderRadius: 5,
    marginHorizontal: 50,
  },
  count: {
    fontSize: 150,
    fontWeight: 'bold',
    color : 'green'

  },
  countRed: {
    fontSize: 150,
    fontWeight: 'bold',
    color : 'red'
  

  },
  multiplySign : {
    fontSize : 24,
    color : '#fff'
  },
  buttonContainer : {
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'space-around'
  }
});

