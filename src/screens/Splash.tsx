import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 2 seconds)
    setTimeout(() => {
      navigation.navigate('Login'); // Navigate to the Login screen after the delay
    },5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/farme01.jpg')} // Replace 'logo.png' with your actual logo image
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Set your desired background color for the splash screen
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default Splash;