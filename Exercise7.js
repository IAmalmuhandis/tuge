/////////////////////////////////////  Develop a React Native Application that shows {Temperature, city Name, Date and Time { with a weather background

import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const API_KEY = '44e1981108455b71b5a9a027074a0f42';
const LONG = `8`;
const LAT = `10`;

const WeatherApp = () => {
  const [temperature, setTemperature] = useState('');
  const [cityName, setCityName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [weatherImage, setWeatherImage] = useState(require('./assets/sunny.jpg'));

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LONG}&appid=${API_KEY}`);
        const data = await response.json();

        if (response.status !== 200 || !data || !data.main || !data.weather) {
          throw new Error('Unable to retrieve weather data');
        }

        const celsiusTemp = data.main.temp.toFixed(2);
        setTemperature(celsiusTemp);
        setCityName(data.name);
        const currentTime = new Date();
        setDate(currentTime.toDateString());
        setTime(currentTime.toLocaleTimeString());
        setWeatherImage(getWeatherImage(data.weather[0].icon));
      } catch (error) {
        console.error(error);
        throw new Error('Unable to retrieve weather data');
      }
    };
    fetchWeatherData();
  }, []);

  const getWeatherImage = (icon) => {
    switch (icon) {
      case '01d':
      case '01n':
        return require('./assets/sunny.jpg');
      case '02d':
      case '02n':
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        return require('./assets/cloudy.jpg');
      case '09d':
      case '09n':
      case '10d':
      case '10n':
        return require('./assets/rainy.jpg');
      case '11d':
      case '11n':
        return require('./assets/thunderstorm.jpg');
      case '13d':
      case '13n':
        return require('./assets/snowy.jpg');
      case '50d':
      case '50n':
        return require('./assets/misty.jpg');
      default:
        return require('./assets/sunny.jpg');
    }
  };

  return (
    <ImageBackground source={weatherImage} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.temperature}>{temperature}°C</Text>
        <Text style={styles.location}>{cityName}</Text>
        <Text style={styles.dateTime}>{date} {time}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  temperature: {
    fontSize: 80,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dateTime: {
    fontSize: 20,
    color: '#fff',
  },
});

export default WeatherApp;
