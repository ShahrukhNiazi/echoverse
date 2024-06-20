import React from 'react';
import { View } from 'react-native';
import MarkerIcon from 'react-native-vector-icons/AntDesign';
import Bars from 'react-native-vector-icons/AntDesign';
import Notifications from 'react-native-vector-icons/Ionicons';
import ArrowLeft from 'react-native-vector-icons/AntDesign'
 
 
const CustomIcon = ({ name, size, color }) => {
  // Render the icons conditionally based on the name prop
  const renderIcon = () => {
    switch (name) {
      case 'marker':
        return <MarkerIcon name={name} size={size} color={color} />;
      case 'bars':
        return <Bars name={name} size={size} color={color} />;
      case 'notifications-outline':
        return <Notifications name={name} size={size} color={color} />;
        case 'arrowleft':
        return <ArrowLeft name={name} size={size} color={color} />;
      default:
        return null;
    }
  };

  return <View>{renderIcon()}</View>; // Wrap the rendered icon in a parent component
};

export default CustomIcon;

  