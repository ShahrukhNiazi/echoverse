import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import { COLORS, SIZES } from '../constants'
import ArrowLeft from 'react-native-vector-icons/AntDesign'
import NotificationsIcon from 'react-native-vector-icons/Ionicons'
import InnerHead from '../constants/InnerHead'


const data = [
    {
        id: '1',
        title: 'Elayamanui',
        text: 'Like your Comment',
        content: '',
        time: '22:00 PM',
        hours: '1 hours ago',
        src: require('../assets/images/profile01.jpg'),
    },
    {
        id: '2',
        title: 'Alice norman',
        text: 'See your post',
        time: '22:00 PM',
        hours: '2 hours ago',
        src: require('../assets/images/profile02.jpg'),
    },
    {
        id: '3',
        title: 'Taniya dalice',
        text: 'start following',
        time: '22:00 PM',
        hours: '4 hours ago',
        src: require('../assets/images/profile03.jpg'),
    },
    {
        id: '4',
        title: 'johny sin',
        text: 'Like your Comment',
        time: '22:00 PM',
        hours: '5 hours ago',
        src: require('../assets/images/profile04.jpg'),
    },
    {
        id: '5',
        title: 'taylor swift',
        text: 'Like your Comment',
        time: '22:00 PM',
        hours: '6 hours ago',
        src: require('../assets/images/profile05.jpg'),
    },
    {
        id: '6',
        title: 'kate young',
        text: 'Accept your Request',
        time: '22:00 PM',
        hours: '8 hours ago',
        src: require('../assets/images/profile06.jpg'),
    },
    {
        id: '7',
        title: 'Newman',
        text: 'Comment on your post',
        time: '22:00 PM',
        hours: '1 day',
        src: require('../assets/images/profile07.jpg'),
    },
    {
        id: '8',
        title: 'Taniya dalice',
        text: 'start following',
        time: '22:00 PM',
        hours: '4 hours ago',
        src: require('../assets/images/profile03.jpg'),
    },
    {
        id: '9',
        title: 'johny sin',
        text: 'Like your Comment',
        time: '22:00 PM',
        hours: '5 hours ago',
        src: require('../assets/images/profile04.jpg'),
    },
    {
        id: '10',
        title: 'taylor swift',
        text: 'Like your Comment',
        time: '22:00 PM',
        hours: '6 hours ago',
        src: require('../assets/images/profile05.jpg'),
    },

];


const renderItem = ({ item }) => (

    <TouchableOpacity style={{ borderBottomColor:COLORS.themeBox, borderBottomWidth: 1 }}>
        <View style={{
            flexDirection: 'row',
            margin:5,
            padding: 12,
            alignItems: 'center',
            borderRadius: 1,
            justifyContent: 'start',
        }}>
            <View style={{
                width: 55,
                height: 55,
                marginRight: 15,
                borderColor: COLORS.Pink,
                borderWidth: 2,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 100,
            }}>
                <Image source={item.src} style={{ borderRadius: 100, width: '100%', height: '100%' }} />
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: COLORS.white, fontSize: 15, fontWeight: '600', fontFamily: 'Poppins-Medium' }}>
                        {item.title}
                    </Text>
                    <Text style={{ color: COLORS.gray, fontSize: 14, fontWeight: '600', marginLeft: 8, }}>
                        {item.text}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: COLORS.gray, fontSize: 13, fontFamily: 'Poppins-Medium', marginRight: 10 }}>
                        {item.time}
                    </Text>
                    <Text style={{ color: COLORS.gray, fontSize: 13, fontFamily: 'Poppins-Medium', marginRight: 10 }}>
                        {item.hours}
                    </Text>
                </View>

            </View>
        </View>
    </TouchableOpacity>

);

const Notifications = ({ navigation }) => {
    return (
        <>
            <View style={styles.Container}>
                <InnerHead Title={'Notications'} navigation={navigation}/>
                <View style={{ marginTop: 25, flex: 1 }}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </View>
        </>
    )
}

export default Notifications;


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 15,
        backgroundColor: COLORS.primary
    }

});