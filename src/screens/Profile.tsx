import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants'
import ArrowLeft from 'react-native-vector-icons/AntDesign'
import SettingsIcon from 'react-native-vector-icons/Ionicons'
import CameraIcon from 'react-native-vector-icons/EvilIcons';
import InnerHead from '../constants/InnerHead';


const Profile = ({ navigation }) => {
    return (
        <>
            <View style={styles.Container}>
                <InnerHead navigation={navigation} Title="Profile" />
                <View style={{
                    flexDirection: 'row', alignItems: 'center', shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.10,
                    shadowRadius: 4,
                    elevation: 5,
                    backgroundColor:COLORS.themeBox,
                    margin: 10,
                    padding: 10,
                    borderRadius: 10,

                }}>
                    <View style={{ position: 'relative', borderColor: COLORS.Pink, borderWidth: 3, borderRadius: 100, }}>
                        <Image source={require('../assets/images/profile.png')} style={{ resizeMode: 'cover', borderRadius: 30, width: 100, height: 100, }} />
                    </View>
                    <View style={{ marginLeft: 20, width: '70%' }}>
                        <Text style={{ color: COLORS.white, fontWeight: '600', fontSize: 25, }}>Isabella Lara</Text>
                        <Text style={{ color: COLORS.white, fontWeight: '600', fontSize: 14, }}> San francisco , CA</Text>
                        <TouchableOpacity style={{ marginTop: 15, borderRadius: 15, }} onPress={() => navigation.navigate('EditProfile')}>
                            <Text style={{ color: COLORS.black, fontSize: 12, borderColor:COLORS.Pink , borderWidth: 1, padding: 8, width: 80, fontWeight: '600', alignItems: 'center',backgroundColor:COLORS.white }}>Edit profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.ProfileData}>
                    <View style={styles.DataRow}>
                        <View>
                            <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}> User Name </Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}>Isabella Lara</Text>
                        </View>
                    </View>
                    <View style={styles.DataRow}>
                        <View>
                            <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}> Email </Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}> Isabellalara@gmail.com </Text>
                        </View>
                    </View>
                    <View style={styles.DataRow}>
                        <View>
                            <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}> Gender </Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}> Female </Text>
                        </View>
                    </View>
                    <View style={styles.DataRow}>
                        <View>
                            <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}> Phone </Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}> +92 123456789Name</Text>
                        </View>
                    </View>
                    <View style={styles.DataRow}>
                        <View>
                            <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}> Date </Text>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, fontSize: SIZES.h4 }}> 20/24/2024</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Profile;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    DataRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        borderBottomColor: '#e2e2e2',
        borderBottomWidth: 1,
        paddingBottom: 25,
        paddingTop: 10,
    },
    ProfileData: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.10,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor:COLORS.themeBox,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        width: '100%',
        height: '70%',
     }
 

});