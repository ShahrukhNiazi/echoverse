import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ onPress, title, padding }) => {
  const buttonStyle = {
    borderRadius: 10,
    paddingVertical: padding ? padding.vertical : 15, // Check if padding prop exists
    paddingHorizontal: padding ? padding.horizontal : 15, // Check if padding prop exists
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient style={[styles.button, buttonStyle]} colors={['#FF5F6D', '#d03471']}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
  marginTop:10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight:'600'
  },
});

export default GradientButton;
