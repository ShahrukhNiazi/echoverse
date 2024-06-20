import React from 'react';
import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ant from 'react-native-vector-icons/FontAwesome5';
import Heart from 'react-native-vector-icons/AntDesign';
import ClockIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../constants'

const PopularEvents = () => {
    // Sample data for the FlatList
    const data = [
        {
            id: '1',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/new01.jpg'),

        },
        {
            id: '2',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/new02.jpg'),

        },
        {
            id: '3',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/new03.jpg'),

        },
        {
            id: '4',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/new04.jpg'),

        },

    ];

    // Render item function for FlatList
    const renderItem = ({ item }) => (
        <View style={styles.EventsColumn}>
            <Image source={item.src} style={{ resizeMode: 'cover', }} />
            <View style={styles.overlay}>
                <Text style={styles.h3}>{item.title}</Text>
                <View style={styles.AlignBwt}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 5, }}>
                        <View style={styles.AlignCenter}>
                            <ClockIcon name='clockcircleo' size={15} style={{ color: COLORS.white, }} />
                            <Text style={styles.locate}>{item.time}</Text>
                        </View>
                        <View style={styles.AlignCenter}>
                            <Ant name='map-marker-alt' size={13} style={{ color: COLORS.white, marginLeft: 5, }} />
                            <Text style={styles.locate}>{item.locate}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <LinearGradient colors={['#FF5F6D', '#d03471']} style={styles.join}>
                                <Heart name='heart' size={13} style={{ color: COLORS.black }} />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
        />
    );
};

const styles = StyleSheet.create({
    DrawerContainer: {
        backgroundColor: '#ffffff',
        padding: 20,
    },
    locate: {
        fontFamily: 'Poppins-Medium',
        color: COLORS.white,
        marginLeft: 7,
        fontSize: 13,
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 5,
        marginTop: 30,
    },
    join: {
        fontFamily: 'Poppins-Medium',
        color: '#000',
        padding: 10,
        borderRadius: 100,
        backgroundColor: '#d1e40c',
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
    h2: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: '#000',
        marginTop: 10,
    },
    h4: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: '#b9b9bb',
        marginTop: 7,
    },
    h3: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        lineHeight: 36,
        color: '#fff',
        marginVertical: 0,
    },
    EventsColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 15,
        overflow: 'hidden',
        marginHorizontal: 10,
        marginVertical: 15,
        position: 'relative',
        borderWidth: 1,
        borderColor: COLORS.Pink

    },
    AlignCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    AlignBwt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        padding: 15,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        top: 0,
        borderRadius: 10,
        justifyContent: 'flex-end',
    },

});

export default PopularEvents;