import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../constants'
import ArrowLeft from 'react-native-vector-icons/AntDesign'
import UserIcon from 'react-native-vector-icons/AntDesign'
import Ant from 'react-native-vector-icons/FontAwesome5';
import Heart from 'react-native-vector-icons/AntDesign';
import ClockIcon from 'react-native-vector-icons/AntDesign';
import InnerHead from '../constants/InnerHead'
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../constants/GradientButton'

const EventDetail = ({ navigation }) => {

    const data = [

        {
            id: '1',
            src: require('../assets/images/farme01.jpg'),
            title: 'The Doors',
        },
        {
            id: '2',
            src: require('../assets/images/farme02.jpg'),
            title: 'Brothers Band',
        },
        {
            id: '3',
            src: require('../assets/images/farme03.jpg'),
            title: 'Cheap Trick',
        },
        {
            id: '4',
            src: require('../assets/images/farme04.jpg'),
            title: 'Will Champion',
        }

    ]

    const sponsorslogo = [

        {
            id: '1',
            src: require('../assets/images/spnors01.png'),
        },
        {
            id: '2',
            src: require('../assets/images/spnors02.png'),
        },
        {
            id: '3',
            src: require('../assets/images/spnors03.png'),
        },
        {
            id: '4',
            src: require('../assets/images/spnors04.png'),
        },
        {
            id: '5',
            src: require('../assets/images/spnors05.png'),
        },
        {
            id: '6',
            src: require('../assets/images/spnors06.png'),
        },
        {
            id: '7',
            src: require('../assets/images/spnors07.png'),
        },
        {
            id: '8',
            src: require('../assets/images/spnors08.png'),
        },

    ]

    const partners = [

        {
            id: '1',
            src: require('../assets/images/partner01.png'),
        },
        {
            id: '2',
            src: require('../assets/images/partner02.png'),
        },
        {
            id: '3',
            src: require('../assets/images/partner03.png'),
        },
        {
            id: '4',
            src: require('../assets/images/partner04.png'),
        },
        {
            id: '5',
            src: require('../assets/images/partner05.png'),
        },
        {
            id: '6',
            src: require('../assets/images/partner06.png'),
        },
        {
            id: '7',
            src: require('../assets/images/partner07.png'),
        },
        {
            id: '8',
            src: require('../assets/images/partner08.png'),
        },

    ]

    const renderItem = ({ item, index }) => (
        <TouchableOpacity style={styles.bullets} onPress={() => navigation.navigate('BandsInfo')}>
            <View style={[styles.evenItem]}>
                <Image source={item.src} style={{ resizeMode: 'cover', flex: 1 }} />
            </View>
            <View>
                <Text style={styles.bulletstxt}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const rendersponsors = ({ item, index }) => (
        <View style={styles.ImgBox}>
            <Image source={item.src} style={{ resizeMode: 'contain', flex: 1, width: '100%', }} />
        </View>
    );

    const rendorspartners = ({ item, index }) => (
        <View style={styles.ImgBox}>
            <Image source={item.src} style={{ resizeMode: 'contain', flex: 1, width: '100%', }} />
        </View>
    );

    return (
        <>
           <View style={styles.Container}>
                <InnerHead navigation={navigation} Title="Event Detail" />
                <View style={styles.EventsColumn}>
                    <Image source={require('../assets/images/new04.jpg')} style={{ resizeMode: 'cover', borderRadius: 10, borderColor: COLORS.Pink, borderWidth:1, }} />
                    <View style={styles.overlay}>
                        <Text style={styles.h3}>Glowing Art performance</Text>
                    </View>
                </View>
                <ScrollView>
                        <View style={[styles.EventsColumn, styles.MarginTop]}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', width: '95%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: COLORS.white, fontSize: 18, fontWeight: '600', marginLeft: 10 }}>
                                    By Applewood Media
                                </Text>
                            </View>
                            <View>
                                <TouchableOpacity>
                                    <LinearGradient colors={['#FF5F6D', '#d03471']} style={styles.join}>
                                        <Heart name='heart' size={13} style={{ color: COLORS.black }} />
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.AlignBwt}>
                            <View style={styles.AlignCenter}>
                                <ClockIcon name='clockcircleo' size={15} style={{ color: COLORS.white, marginRight: 10, marginLeft: 10 }} />
                                <Text style={styles.locate}>22:00 PM</Text>
                            </View>
                            <View style={styles.AlignCenter}>
                                <Ant name='map-marker-alt' size={15} style={{ color: COLORS.white, marginRight: 10, marginLeft: 10, }} />
                                <Text style={styles.locate}>Singapore</Text>
                            </View>
                        </View>
                    </View>
                     <Text style={{ fontSize: 18, color: COLORS.white, fontWeight: '600', marginTop: 20, marginLeft: 10, fontFamily: 'Poppins-Medium', }}>
                        Bands
                    </Text>
                    <View>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                            horizontal />
                    </View>
                    <View style={{ marginLeft: 15, marginRight: 10, }}>
                        <Text style={{ fontSize: 20, color: COLORS.white, fontWeight: '600', marginTop: 10, fontFamily: 'Poppins-Medium', }}>
                            Description
                        </Text>
                        <Text style={{ color: COLORS.white, marginTop: 5, marginBottom: 10, fontWeight: '600', fontSize: 14, }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged.
                        </Text>
                        <View>
                            <Text style={{ fontSize: 18, color: COLORS.white, fontWeight: '600', marginTop: 5, fontFamily: 'Poppins-Medium', }}>
                                Sponsors
                            </Text>
                        </View>
                        <View>
                            <FlatList
                                data={sponsorslogo}
                                renderItem={rendersponsors}
                                keyExtractor={(item) => item.id}
                                horizontal />
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, color: COLORS.white, fontWeight: '600', marginTop: 5, marginLeft: 10, fontFamily: 'Poppins-Medium', }}>
                                Partners
                            </Text>
                        </View>
                        <View>
                            <FlatList
                                data={partners}
                                renderItem={rendorspartners}
                                keyExtractor={(item) => item.id}
                                horizontal />
                        </View>
                        {/* <TouchableOpacity style={{ backgroundColor: COLORS.green, padding: 15, marginTop: 15, borderRadius: 10 }}>
                            <Text style={{ fontSize: SIZES.h4, color: COLORS.black, textAlign: 'center', fontWeight: '600' }}>
                                Book Event
                            </Text>
                        </TouchableOpacity> */}
                        <GradientButton title="Book Event" />
                    </View>
                </ScrollView>
            </View> 

        </>
    )
}

export default EventDetail;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.primary
    },
    h2: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: '#000',
        marginTop: 0,
    },
    h3: {
        fontFamily: 'Poppins-Bold',
        fontSize: 25,
        color: '#fff',
        marginLeft: 1,
        width: '60%'
    },
    event: {
        marginLeft: 7,
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
        color: '#898989',
        marginLeft: 0,
        fontWeight: '600',
        fontSize: 13,
    },
    EventsColumn: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    FrameColumn: {
        position: 'relative',
        width: '25%',
        borderRadius: 20,
    },
    eventsinfo: {
        width: '65%',
        padding: 7,
        marginLeft: 24,

    },
    ImageColumn: {
        borderRadius: 10,
        width: 20,
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
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    join: {
        fontFamily: 'Poppins-Medium',
        color: '#898989',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 50,
        width: 40,
        height: 40,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff'
    },
    overlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        padding: 15,
        bottom: 0
    },
    MarginTop: {
        marginTop: 15,
    },
    AlignCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    AlignBwt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 0,
        marginTop: -10
    },
    evenItem: {
        width: 40,
        height: 40,
        backgroundColor: '#000',
        borderColor: COLORS.Pink,
        borderWidth: 1,
        borderRadius: 50,
        overflow: 'hidden',
        position: 'relative',
    },
    bullets: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginRight: 5,
        backgroundColor: COLORS.themeBox,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: COLORS.Pink,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        margin: 10
    },
    bulletstxt: {
        alignItems: 'center',
        justifyContent: 'center',
        color: COLORS.white,
        width: 60,
        marginLeft: 5,
        fontWeight: '600',
        lineHeight: 14,
        fontSize: 12
    },
    ImgBox: {
        width: 70,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.Pink,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        margin: 10,
        marginLeft: 0,
        padding: 5,
        backgroundColor: COLORS.white,
    }

});