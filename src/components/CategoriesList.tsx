import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import LinearGradient from 'react-native-linear-gradient';


const CategoriesList = () => {
    const [activeItem, setActiveItem] = useState(null);
  
    const handlePress = () => {
        // Handle button press action here
        console.log('Button pressed!');
    };

    const data = [
        { id: '1', title: 'All' },
        { id: '2', title: 'Concert' },
        { id: '3', title: 'News feeds' },
        { id: '4', title: 'Schedule' },
        { id: '5', title: 'Events' }
    ];

    const renderItem = ({ item }) => {
        const isActive = activeItem === item.id;
        return (
            <TouchableOpacity onPress={() => setActiveItem(item.id)} style={[styles.itemContainer, isActive && styles.activeItem]}>
                  <LinearGradient colors={['#FF5F6D', '#d03471']} style={{ borderRadius:5,paddingHorizontal:10,paddingVertical:6,marginLeft:10, }}>
                    <Text>{item.title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
    },
    itemContainer: {
        color: COLORS.gray,
        marginHorizontal: 1,
        borderRadius: 10,
        marginTop: 1,
        marginBottom: 10,
    },
    titleStyle: {
       color: COLORS.gray,
        padding: 2,
        fontFamily: 'Poppins-Medium',
        fontSize:13,
        
    },
    activeItem: {
        backgroundColor: COLORS.black,
        color: '#fff'
    },
 });

export default CategoriesList;