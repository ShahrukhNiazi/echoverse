import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { DrawerItemList, createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { COLORS } from '../constants'
import LogoutIcon from 'react-native-vector-icons/AntDesign'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SettingsIcon from 'react-native-vector-icons/AntDesign'
import SignOutIcon from 'react-native-vector-icons/Entypo'

const CustomDrawerContent = (props) => {

    const { navigation } = props;

    return (
        <>
            <DrawerContentScrollView {...props}>
                <SafeAreaView>
                    <View style={{
                        height: 120,
                        width: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>
                        <View style={styles.UserInfo}>
                            <View style={{ width: '20%', marginRight: 35 }}>
                                <Image source={require('../assets/images/profile.png')} style={styles.image} resizeMode="cover" />
                            </View>
                            <View style={{ width: '80%' }}>
                                <Text style={styles.UserName}>
                                    Isabella lara
                                </Text>
                                <TouchableOpacity>
                                    <Text style={styles.UserEmail}>
                                        Isabellalara@gmail.com
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#ba275b', padding: 5, width: 90, alignItems: 'center', borderRadius: 5, marginTop: 6, }} onPress={() => navigation.navigate('Profile')}>
                                    <Text style={{ color: COLORS.white, fontSize: 12, fontWeight: '600' }}>View Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <DrawerItemList {...props} />
                </SafeAreaView>
            </DrawerContentScrollView>
            <View style={styles.Settingcol}>
                <TouchableOpacity>
                    <View style={styles.Iconstyle}>
                        <SettingsIcon name='setting' size={22} style={{ color: COLORS.white }} />
                        <Text style={styles.IconstyleText}> Settings </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.Iconstyle}>
                        <LogoutIcon name='logout' size={18} style={{ color: COLORS.white }} />
                        <Text style={styles.IconstyleText}> Login </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <View style={styles.Iconstyle}>
                        <SignOutIcon name='log-out' size={18} style={{ color: COLORS.white }} />
                        <Text style={styles.IconstyleText}> Log out </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    );
};


export default CustomDrawerContent;


const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        borderColor: '#ba275b',
        borderWidth: 3,
        borderRadius: 100,
    },
    Iconstyle: {
        margin: 10, flexDirection: 'row'
    },
    IconstyleText: {
        fontSize: 14,
        fontWeight: '100',
        fontFamily: 'Poppins-Medium',
        color: COLORS.white,
        marginLeft: 5
    },
    UserName: {
        fontSize: 18,
        fontWeight: '100',
        fontFamily: 'Poppins-Medium',
        color: COLORS.white,
        lineHeight: 30
    },
    UserEmail: {
        fontSize: 12,
        fontWeight: '100',
        fontFamily: 'Poppins-Medium',
        color: COLORS.white,
        marginTop: -5
    },
    Settingcol: {
        marginLeft: 10,
        borderTopWidth: 1,
        borderColor: COLORS.Pink,
        marginBottom: 10,
        paddingTop: 10,
    },
    UserInfo: {
        flexDirection: 'row',
        width: '100%',
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    }

}); 