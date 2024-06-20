import React from 'react';
import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { COLORS } from '../constants'
import Ant from 'react-native-vector-icons/FontAwesome5';
import Heart from 'react-native-vector-icons/AntDesign';
import ClockIcon from 'react-native-vector-icons/AntDesign';



const Newsdetail = () => {
    // Sample data for the FlatList
    const data = [
        {
            id: '1',
            title: 'Lorem Ipsum is simply dummy text of the printing',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/new01.jpg'),
        },
        {
            id: '2',
            title: 'Lorem Ipsum is simply dummy text of the printing',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/new02.jpg'),
        },
        {
            id: '3',
            title: 'Lorem Ipsum is simply dummy text of the printing',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/new03.jpg'),
        },
        {
            id: '4',
            title: 'Lorem Ipsum is simply dummy text of the printing',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/new04.jpg'),
        },
        {
            id: '5',
            title: 'Lorem Ipsum is simply dummy text of the printing',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/new05.jpg'),
        },
        {
            id: '6',
            title: 'Lorem Ipsum is simply dummy text of the printing',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/new06.jpg'),
        },
        {
            id: '7',
            title: 'Lorem Ipsum is simply dummy text of the printing',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/new06.jpg'),
        },

    ];


    // Render item function for FlatList
    const renderItem = ({ item }) => (
        <View style={{ marginRight: 10 }}>
            <Image source={item.src} style={{ resizeMode: 'cover', borderRadius: 10, backgroundColor: '#000' }} />
            <View style={styles.overlay}>
                <Text style={styles.h3}>{item.title}</Text>
                <View style={styles.AlignBwt}>
                    <View style={styles.AlignCenter}>
                        <ClockIcon name='clockcircleo' size={15} style={{ color: COLORS.white, }} />
                        <Text style={styles.locate}>{item.time}</Text>
                    </View>
                    <View style={styles.AlignCenter}>
                        <Ant name='map-marker-alt' size={15} style={{ color: COLORS.white, }} />
                        <Text style={styles.locate}>{item.locate}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal />
        </>
    );
};


export default Newsdetail;

const styles = StyleSheet.create({
    DrawerContainer: {
        backgroundColor: '#ffffff',
        padding: 20,
    },
    locate: {
        fontFamily: 'Poppins-Medium',
        color: '#f4eff0',
        marginLeft: 5,
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
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    h2: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        color: '#000',
        marginTop: 10,
    },
    h4: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: '#b9b9bb',
        marginTop: 7,
    },
    h3: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        lineHeight: 30,
        color: '#fff',
        marginVertical: 0,
        paddingBottom: 15,
    },
    EventsColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 8,
        marginHorizontal: 10,
        marginVertical: 10,
        position: 'relative'
    },
    AlignCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    AlignBwt: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        padding: 15,
        bottom: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingTop: 50
    }

});
