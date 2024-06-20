import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants'
import NeewIcon from 'react-native-vector-icons/Ionicons'
import ArrowLeft from 'react-native-vector-icons/AntDesign'
import UserIcon from 'react-native-vector-icons/AntDesign'
import Ant from 'react-native-vector-icons/FontAwesome5';
import Heart from 'react-native-vector-icons/AntDesign';
import ClockIcon from 'react-native-vector-icons/AntDesign';
import InnerHead from '../constants/InnerHead'

// const data = [
//     { id: '1', src: require('../assets/images/farme01.jpg'), },
//     { id: '2', src: require('../assets/images/farme02.jpg'), },
//     { id: '3', src: require('../assets/images/farme03.jpg'), },
//     { id: '4', src: require('../assets/images/farme04.jpg'), },
// ];


const NewsFeedDetail = ({ navigation }) => {


    const renderItem = ({ item }) => (
        <View style={{ width: 160, margin: 10, borderRadius: 15 }}>
            <Image source={item.src} style={{ resizeMode: 'cover', width: '100%', borderRadius: 10, }} />
        </View>
    );


    return (
        <>
            <View style={styles.Container}>
                <View style={{ position: 'absolute', width: '100%', zIndex: 1, marginTop: 10, }}>
                    <InnerHead navigation={navigation} Title="Event Detail" />
                </View>
                <View style={styles.Bannerbox}>
                    <Image source={require('../assets/images/eventdetailimg.jpg')} style={{ resizeMode: 'cover', width: '100%'}} />
                    <View style={styles.TextOverlay}>
                        <Text style={{ color: COLORS.white, fontSize: 35, fontFamily: 'Poppins-Medium', }}>Gold play</Text>
                        <Text style={{ color: COLORS.white, fontSize: 15, fontFamily: 'Poppins-Medium', }}> Join us for an unforgettable night of music at the Grand Symphony Hall on May 15th! Get ready to experience the magic as renowned artists</Text>
                        <Text style={{ color: COLORS.white, fontSize: 15, fontFamily: 'Poppins-Medium', }}>Live event on july 12 2024</Text>
                    </View>
                </View>
                <ScrollView style={styles.Bandreview}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, margin: 20 }}>
                        <View style={{ width: '25%' }}>
                            <Image source={require('../assets/images/profile.png')} style={{ resizeMode: 'cover', width: 70, height: 70, }} />
                        </View>
                        <View style={{ width: '75%' }}>
                            <Text style={{ fontSize: 20, color: COLORS.white, fontWeight: '600' }}>Micheal friedman</Text>
                            <Text style={{ fontSize: 14, color: COLORS.white }}>About 30 mint ago</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 0, margin: 10 }}>
                        <Text style={{ color: COLORS.white, fontSize: 13, fontFamily: 'Poppins-Medium', }}>
                            Join us for an unforgettable night of music at the Grand Symphony Hall
                            on May 15th! Get ready to experience the magic as renowned artists take
                            the stage to perform a mesmerizing blend of classical and contemporary melodies.
                            Mark your calendars and secure your tickets for a concert you won't want to miss!
                        </Text>
                        {/* <FlatList
                            data={data}
                            renderItem={renderItem}
                            scrollEnabled={false}
                            numColumns={2}
                            keyExtractor={(item) => item.id} /> */}
                    </View>
                </ScrollView>
            </View>
        </>
    )


};






export default NewsFeedDetail;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    TextOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        padding: 15,
        bottom: 70,
    },
    Bannerbox: {
        position: 'relative'
    },
    Bandreview: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -30,
        backgroundColor: COLORS.black,
        height: '100%',
        padding: 10,
        borderWidth: 1,
        borderTopColor: COLORS.Pink,
        borderRightColor: COLORS.Pink,
        borderLeftColor: COLORS.Pink
    },

});