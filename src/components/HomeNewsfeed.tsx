import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ant from 'react-native-vector-icons/FontAwesome5';
import { COLORS, FONTS } from '../constants'
import ViewsTitle from '../components/ViewsTitle'

const HomeNewsfeed = () => {

    const navigation = useNavigation();

    // Sample data for the FlatList
    const data = [
        {
            id: '1',
            title: 'battles of Dance Party 20s',
            locate: 'California, CA',
            time: 'Mar 29,2022-10:00 PM',
            src: require('../assets/images/pro01.jpg'),
            price: '$27.99',
        },
        {
            id: '2',
            title: 'battles of Dance Party 20s',
            locate: 'California, CA',
            time: 'Mar 29,2022-10:00 PM',
            src: require('../assets/images/pro02.jpg'),
            price: '$27.99',
        },
        {
            id: '3',
            title: 'battles of Dance Party 20s',
            locate: 'California, CA',
            time: 'Mar 29,2022-10:00 PM',
            src: require('../assets/images/pro03.jpg'),
            price: '$27.99',
        },
        {
            id: '4',
            title: 'battles of Dance Party 20s',
            locate: 'California, CA',
            time: 'Mar 29,2022-10:00 PM',
            src: require('../assets/images/pro04.jpg'),
            price: '$27.99',
        },
    ];

    // Render item function for FlatList
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.EventsColumn} onPress={() => navigation.navigate('Newsfeeds')}>
            <Image source={item.src} style={{ resizeMode: 'cover', borderRadius: 8, width: '100%', height: 130, }} />
            <Text style={styles.h4}>{item.time}</Text>
            <Text style={styles.h3}>{item.title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                    <Ant name='map-marker-alt' size={12} style={{ color: '#aeafb3', }} />
                    <Text style={styles.locate}>{item.locate}</Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.join}>{item.price}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            <View style={FONTS.CenterAlin}>
                <View>
                    <ViewsTitle title={'News Feed'} />
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('NewsFeedDetail')}>
                        <Text style={styles.ViewMore}> View More </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal // Add this prop to make it horizontal
            />
        </>

    );
};

const styles = StyleSheet.create({
    DrawerContainer: {
        backgroundColor: '#ffffff',
        flex: 1,
        padding: 20,
    },
    locate: {
        fontFamily: 'Poppins-Medium',
        color: '#aeafb3',
        marginLeft: 5,
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
        backgroundColor: '#d03471',
        fontFamily: 'Poppins-Medium',
        color: COLORS.white,
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 5,
        opacity: 0.7,
    },
    h2: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: '#000',
        marginLeft: 20,
        marginRight: 5
    },
    h4: {
        fontFamily: 'Poppins-Medium',
        fontSize: 13,
        color: '#b9b9bb',
        marginTop: 7,
    },
    h3: {
        fontFamily: 'Poppins-Bold',
        fontSize: 14,
        color: COLORS.white,
        marginVertical: 0,
        lineHeight: 16,
    },
    EventsColumn: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: COLORS.themeBox,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        margin: 5,
        padding: 10,
        position: 'relative',
        right: -10,
        width: 300,

    },
    eventtitle: {
        color: COLORS.white,
        marginLeft: 25,
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Poppins-Regular',
    },
    ViewMore: {
        color: '#8f8f8f',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginRight: 20,
    },

});

export default HomeNewsfeed;