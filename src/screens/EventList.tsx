import React, { Component } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import ArrowLeft from 'react-native-vector-icons/AntDesign'
import UserIcon from 'react-native-vector-icons/AntDesign'
import InnerHead from '../constants/InnerHead'


const EventList = ({ navigation }) => {

    const data = [
        {
            id: '1',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme01.jpg'),
        },
        {
            id: '2',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme02.jpg'),
        },
        {
            id: '3',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme03.jpg'),
        },
        {
            id: '4',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme04.jpg'),
        },
        {
            id: '5',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme01.jpg'),
        },
        {
            id: '6',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme02.jpg'),
        },
        {
            id: '7',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme03.jpg'),
        },
        {
            id: '8',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme04.jpg'),
        },

    ];
 
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('EventDetail')}>
            <View style={styles.event}>
                <View style={styles.eventsItems}>
                    <View style={{ width:'20%', marginRight:10, borderRadius:10, padding:5, }} >
                      <Image source={item.src} style={{ resizeMode: 'cover',borderRadius:10, width:70,height:70,}}  />
                    </View>
                    <View style={{  width:'75%', padding:5 }}>
                        <Text style={styles.h3}>
                            {item.title}
                        </Text>
                        <View style={styles.address}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.locate}> {item.time} </Text>
                            </View>
                            <View>
                                <Text style={styles.join}> {item.locate} </Text>
                            </View>
                        </View>
                    </View>
                 </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <View style={{ flex: 1, marginTop: 0,backgroundColor:COLORS.black,padding:10 }}>
                <InnerHead navigation={navigation} Title="List Event"/>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </>
    );
}

export default EventList;

const styles = StyleSheet.create({

 
    h3: {
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color:COLORS.white,
        marginLeft: 1,
        width: '60%'
    },
    event: {
         backgroundColor: COLORS.themeBox,
         borderWidth: 2,
         borderColor: COLORS.Pink,
         alignItems: 'center',
         justifyContent: 'center',
         marginHorizontal:10,
         marginVertical:5,
         borderRadius:10,
     },
     
    FrameColumn:{
        padding:5,
     },
  
    Month: {
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
        color: '#333',
        lineHeight: 13,
    },
    
    eventsItems: {
       flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
     },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
     },
    join: {
        fontFamily: 'Poppins-Medium',
        color: '#898989',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 5
    }

});