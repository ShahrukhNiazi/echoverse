import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';
import { Images } from './Images';
import { COLORS } from '../constants'
// import { Loader } from '../../components/Loader/Loader';

const {width, height} = Dimensions.get('window');

export const Button = ({
  onPress = () => {},
  title = '',
  textStyle = {},
  containerStyle = {},
  backgroundColor = COLORS.green,
  textColor = COLORS.black,
  borderRadius = 50,
  borderColor = COLORS.green,
  shadow = '#F83636',
  liftIcon = null,
  rightIcon = null,
  imageStyle = {},
  disabled = false,
  onlydisable = false,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled ? disabled : onlydisable}
      style={[
        styles.btnContainer,
        containerStyle,
        {
          backgroundColor: backgroundColor,
          borderRadius: borderRadius,
          borderColor: borderColor,
          shadowColor: shadow,
        },
      ]}
      activeOpacity={0.9}
      onPress={onPress}>
      {liftIcon && <Image style={imageStyle} source={liftIcon} />}
      {disabled ? (
        <Loader />
      ) : (
        <Text style={[styles.defaultTextStyle, textStyle, {color: textColor}]}>
          {title}
        </Text>
      )}
       {rightIcon && <Image style={imageStyle} source={rightIcon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius:30,
   },
  defaultTextStyle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
