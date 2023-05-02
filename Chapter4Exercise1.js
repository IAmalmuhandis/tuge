import axios from "axios";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

export default function App() {
  const [tempData, settempData] = useState({});

  let apiKey = "0b361e115d75bdcabfb4ff31d2b49fe1";

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${apiKey}&query=Nigeria`
      )
      .then((response) => {
        settempData({
          temperature: response.data.current.temperature,
          description: response.data.current.weather_descriptions[0],
          country: response.data.location.country,
          region: response.data.location.region,
          city: response.data.location.name,
          datetime: response.data.location.localtime,
          iconURL: response.data.current.weather_icons[0],
        });
      });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.text}>Temperature: {tempData.temperature}</Text>
          <Text style={{ fontSize: 10 }}>0C</Text>
        </View>
        <Image
          source={{ uri: tempData.iconURL }}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.text}>Country: {tempData.country}</Text>
        <Text style={styles.text}>Region: {tempData.region}</Text>
        <Text style={styles.text}>City: {tempData.city}</Text>
        <Text style={styles.text}>Description: {tempData.description}</Text>
        <Text style={styles.text}>Date & Time: {tempData.datetime}</Text>
      </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 30,
    marginVertical: 10,
  },
});
