import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants'
import ArrowLeft from 'react-native-vector-icons/AntDesign'
import SettingsIcon from 'react-native-vector-icons/Ionicons'
import CameraIcon from 'react-native-vector-icons/EvilIcons';
import { InputField } from '../components/InputField'
import { Images } from '../constants/Images'
import { Button } from '../constants/Buttons'
import GradientButton from '../constants/GradientButton';
import InnerHead from '../constants/InnerHead'


const EditProfile = ({ navigation }) => {


    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [hidePassword, setHidePassword] = useState(false)


    return (
        <>
            <View style={styles.Container}>
            <InnerHead navigation={navigation} Title="News Detail" />
                <View style={{
                    flexDirection: 'row',
                     alignItems: 'center',
                    backgroundColor:COLORS.themeBox,
                    marginBottom: 5,
                    padding: 10,
                    borderRadius: 10,
                    justifyContent: 'center'
                }}>
                    <View style={styles.Editpro}>
                        <Image source={require('../assets/images/profile.png')} style={{ resizeMode: 'cover', borderRadius: 30, width: 100, height: 100, }} />
                        <TouchableOpacity style={{ position: 'absolute', right: -10, bottom: 4, width: 35, height: 35, backgroundColor: COLORS.white, alignItems: 'center', justifyContent: 'center', padding: 4, borderRadius: 50, borderColor: COLORS.green, borderWidth: 2, borderRadius: 100, }}>
                            <CameraIcon size={20} name={'camera'} style={{ color: COLORS.gray, marginLeft: 0, marginTop: 0, }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <View>
                        <Text style={styles.labelText}>
                            Username
                        </Text>
                        <InputField value={email} onChange={text => setEmail(text)} />
                    </View>
                    <View>
                        <Text style={styles.labelText}>
                            Last Name
                        </Text>
                        <InputField value={email} onChange={text => setEmail(text)} />
                    </View>
                    <View>
                        <Text style={styles.labelText}>
                            Email
                        </Text>
                        <InputField value={email} onChange={text => setEmail(text)} />
                    </View>
                    <View>
                        <Text style={styles.labelText}>
                            Gender
                        </Text>
                        <InputField value={email} onChange={text => setEmail(text)} />
                    </View>
                    <View>
                        <Text style={styles.labelText}>
                            Date of Birth
                        </Text>
                        <InputField value={email} onChange={text => setEmail(text)} />
                    </View>
                    <View>
                        <Text style={styles.labelText}>
                            Location
                        </Text>
                        <InputField value={email} onChange={text => setEmail(text)} />
                    </View>
                    <View style={{ marginTop: 20, }}>
                        <GradientButton
                            //   disabled={isLoading}
                            title="Submit"
                        // onPress={() => onlogin()}
                        />
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default EditProfile;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 10,
        backgroundColor:COLORS.primary
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
        paddingTop: 20,
    },
    Editpro: {
        position: 'relative',
        borderColor: COLORS.Pink,
        borderWidth: 3, borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.10,
        shadowRadius: 4,
        elevation: 5,
    },
    labelText: {
        fontSize: 15,
        marginTop: 20,
        color: COLORS.white
    },

});