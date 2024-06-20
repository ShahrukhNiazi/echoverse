import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants'
import SeatIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ArrowLeft from 'react-native-vector-icons/AntDesign'
import Heart from 'react-native-vector-icons/AntDesign';
import InnerHead from '../constants/InnerHead';
import GradientButton from '../constants/GradientButton'


const data = [
    { id: '1', title: 'Vips plus Tickets', price: '$500', exclusive: 'vip + bracellet' },
    { id: '2', title: 'Regular plus Tickets', price: '$400', exclusive: 'vip + bracellet' },
    { id: '3', title: 'Front Tickets', price: '$100', exclusive: 'vip + bracellet' },
    { id: '4', title: 'Middle plus Tickets', price: '$300', exclusive: 'vip + bracellet' },
    { id: '5', title: 'Middle plus Tickets', price: '$350', exclusive: 'vip + bracellet' },
    { id: '6', title: 'Middle plus Tickets', price: '$330', exclusive: 'vip + bracellet' },
    { id: '7', title: 'Middle plus Tickets', price: '$130', exclusive: 'vip + bracellet' },
    { id: '8', title: 'Middle plus Tickets', price: '$140', exclusive: 'vip + bracellet' },
];


const BandsInfo = ({ navigation }) => {


    return (
        <>
            <View style={styles.Container}>
                <View style={{ position: 'absolute', width: '100%', zIndex: 1, marginTop: 10, }}>
                    <InnerHead navigation={navigation} Title="Band Info" />
                </View>
                <View style={styles.Bannerbox}>
                    <Image source={require('../assets/images/eventdetailimg02.jpg')} style={{ resizeMode: 'cover', width: '100%' }} />
                    <View style={styles.TextOverlay}>
                        <Text style={{ color: COLORS.white, fontSize: 35, fontFamily: 'Poppins-Medium', }}>The Doors Band</Text>
                        <Text style={{ color: COLORS.white, fontSize: 15, fontFamily: 'Poppins-Medium', }}> formed in 1965, known for their unique sound blending rock, blues, </Text>
                        <Text style={{ color: COLORS.white, fontSize: 15, fontFamily: 'Poppins-Medium', }}>Live event on july 12 2024</Text>
                    </View>
                </View>
                <ScrollView style={styles.Bandreview}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, margin: 20 }}>
                        <View style={styles.AlingnCenter}>
                            <View style={{ width: '20%' }}>
                                <Image source={require('../assets/images/profile.png')} style={{ resizeMode: 'cover', width: 50, height: 50, }} />
                            </View>
                            <View style={{ width: '70%' }}>
                                <Text style={{ fontSize: 20, color: COLORS.white, fontWeight: '600' }}>Micheal friedman</Text>
                                <Text style={{ fontSize: 14, color: COLORS.white }}>8 up comming events</Text>
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <View style={styles.heart}>
                                    <Heart name='hearto' size={15} style={{ color: COLORS.black }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 0, margin: 10 }}>
                        <Text style={styles.Content}>
                            The Doors were an American rock band formed in 1965, known for
                            their unique sound blending rock, blues, and psychedelic elements. The band's lineup
                            consisted of Jim Morrison (vocals), Ray Manzarek (keyboards),
                            Robby Krieger (guitar), and John Densmore (drums)
                        </Text>
                        <GradientButton title={'Book ticket'} />
                    </View>
                </ScrollView>
            </View>
        </>
    )


};






export default BandsInfo;

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
    AlingnCenter: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    heart: {
        width: 35,
        height: 35,
        backgroundColor: COLORS.white,
        borderWidth: 2,
        borderColor: COLORS.Pink,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    borderstyle: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10
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
    Content:{
        color: COLORS.white, 
        fontSize: 13, 
        fontFamily: 'Poppins-Medium',
         marginBottom: 40, 
    }

});