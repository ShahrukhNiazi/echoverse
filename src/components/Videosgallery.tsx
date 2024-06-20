import React from 'react';
import { FlatList, Image, TouchableOpacity, View, Text } from 'react-native';

const videos = [
  { id: 1, title: 'Video 1', thumbnail: require('../assets/images/pro01.jpg'), videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  { id: 2, title: 'Video 2', thumbnail: require('../assets/images/pro02.jpg'), videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  // Add more video objects as needed
];

const Videosgallery = () => {
  const renderVideoItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleVideoPress(item)}>
      <Image source={item.thumbnail} style={{ width: 100, height: 100 }} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleVideoPress = (video) => {
    // Implement logic to open video player modal or screen
    console.log('Play video:', video.title);
  };

  return (
    <View>
      <FlatList
        data={videos}
        renderItem={renderVideoItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
};

export default Videosgallery;