import React, { Component } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants'


const DaliyNews = () => {

    const navigation = useNavigation();


    const data = [
        {
            id: '1',
            title: 'Glowing Art performance',
            time: 'Lorem Ipsum is simply dummy text of the printing',
            src: require('../assets/images/farme01.jpg'),
        },
        {
            id: '2',
            title: 'Glowing Art performance',
            time: 'Lorem Ipsum is simply dummy text of the printing',
            src: require('../assets/images/farme02.jpg'),
        },
        {
            id: '3',
            title: 'Glowing Art performance',
            time: 'Lorem Ipsum is simply dummy text of the printing',
            src: require('../assets/images/farme03.jpg'),
        },
        {
            id: '4',
            title: 'Glowing Art performance',
            time: 'Lorem Ipsum is simply dummy text of the printing',
            src: require('../assets/images/farme04.jpg'),
        },
        {
            id: '5',
            title: 'Glowing Art performance',
            time: 'Lorem Ipsum is simply dummy text of the printing',
            src: require('../assets/images/farme04.jpg'),
        },

    ];


    const renderItem = ({ item }) => (

        <TouchableOpacity>
            <View style={styles.event}>
                <View style={styles.FrameColumn}>
                    <Image source={item.src} style={{
                        borderRadius: 100, width: '100%', height: 75, borderColor: COLORS.Pink,
                        borderWidth: 1,
                    }} />
                </View>
                <View style={styles.eventsinfo}>
                    <Text style={styles.h3}>
                        {item.title}
                    </Text>
                    <View style={styles.address}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.locate}> {item.time} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
         </>
    );
}

export default DaliyNews;

const styles = StyleSheet.create({


    h2: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: '#000',
        marginTop: 0,
    },
    h3: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: COLORS.white,
        marginLeft: 1,
        width: '60%'
    },
    event: {
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        backgroundColor: COLORS.themeBox,
        marginBottom: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        elevation: 0,
    },
    Date: {
        fontFamily: 'Poppins-Bold',
        fontSize: 15,
        color: '#000',
        lineHeight: 20,
        marginTop: 1,
    },
    locate: {
        fontFamily: 'Poppins-Medium',
        color: COLORS.white,
        marginLeft: 0,
    },

    FrameColumn: {
        width: 75,
        borderRadius: 100,

    },
    eventsinfo: {
        width: '70%',
        padding: 7,
        marginLeft: 9,
    },

    Month: {
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
        color: '#333',
        lineHeight: 13,
    },
    shedule: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: 40,
        height: 43,
        margin: 5,
        alignItems: 'center',
        borderRadius: 8,
        left: 10,
        top: 10,
    },
    eventsItems: {

    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    join: {
        fontFamily: 'Poppins-Medium',
        color: '#898989',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 5
    }

});