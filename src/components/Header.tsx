import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Animated } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { COLORS, SIZES } from '../constants';
import CustomIcon from '../constants/CustomIcon'

const Header = ({ title, city }) => {
    const navigation = useNavigation();

    return (
        <>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.5)" />
            <View style={styles.headContainer}>
                <View style={styles.AlignCenter}>
                    <View style={{ flexDirection: 'row', width: '60%', alignItems: 'center' }}>
                        <View style={{ borderColor: '#ba275b', borderWidth: 1, borderRadius: 100, }}>
                            <Image source={require('../assets/images/profile.png')} style={styles.image} resizeMode="cover" />
                        </View>
                        <View style={{ width: 80 }}>
                            <Text style={styles.titleHead}> {title} </Text>
                            <View style={styles.markerCol}>
                                <View>
                                    <CustomIcon name='map-marker' size={18} style={{ color: COLORS.white, marginRight: 1 }} />
                                </View>
                                <View>
                                    <Text style={styles.citytext}> {city} </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.notifica} onPress={() => navigation.navigate('Notifications')}>
                            <CustomIcon name='notifications-outline' size={25} style={{ color: COLORS.white }} />
                            <View style={styles.BillDot}>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                            <CustomIcon name='bars' style={styles.barIcon} size={27} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
};

export default Header;

const styles = StyleSheet.create({
    headContainer: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        objectFit: 'cover',
        height: 45,
        width: 45,
    },
    barIcon: {
        color: COLORS.white
    },
    notifica: {
        marginRight: 10,
        color: COLORS.white
    },
    AlignCenter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    titleHead: {
        marginLeft: 12,
        color: COLORS.white,
        fontFamily: 'Poppins-Bold'
    },
    markerCol: {
        flexDirection: 'row',
        marginLeft: 10,
        color: COLORS.white,
        marginTop: -4,
        fontFamily: 'Poppins-Bold',
    },
    citytext: {
        fontSize: 14,
        color: COLORS.white,
        fontFamily: 'Poppins-Bold',
    },
    BillDot: {
        width: 10,
        height: 10,
        backgroundColor: COLORS.Pink,
        position: 'absolute',
        flex: 1,
        top: 0,
        bottom: 0,
        right: 0,
        left: 15,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: COLORS.white,
    }
});
