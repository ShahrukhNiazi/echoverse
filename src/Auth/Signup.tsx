import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { InputField } from '../components/InputField'
import { Images } from '../constants/Images'
import { COLORS,SIZES } from '../constants'
import InnerHead from '../constants/InnerHead'
import GradientButton from '../constants/GradientButton'


const Signup = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [hidePassword, setHidePassword] = useState(false)

    return (
        <>
            <ScrollView style={styles.WhiteBg}>
                <View style={styles.bgimage}>
                 <InnerHead navigation={navigation} Title="Sign Up" />
                 </View>
                <View style={styles.MainWrapper}>
                    <View style={{ marginBottom: 20, }}>
                         <Text style={styles.logingText}>
                            Enter your credentials to continue
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.labelText}>
                            Username
                        </Text>
                    </View>
                    <View>
                        <InputField value={email} onChange={text => setEmail(text)} firstIcon={Images?.Pictures?.UserIcon} placeholder={'Your Email'} />
                    </View>
                    <View>
                        <Text style={styles.labelText}>
                            Email
                        </Text>
                    </View>
                    <View>
                        <InputField value={email} onChange={text => setEmail(text)} firstIcon={Images?.Pictures?.UserIcon} placeholder={'Your Email'} />
                    </View>
                    <View>
                        <Text style={styles.labelText}>
                            Password
                        </Text>
                    </View>
                    <View>
                        <InputField
                            value={password}
                            onChange={text => setpassword(text)}
                            onPress={() => setHidePassword(!hidePassword)}
                            placeholder={'Password'}
                            secureTextEntry={hidePassword}
                            eyeIcon={hidePassword ? Images.Pictures.CloseEye : Images.Pictures.openeye}
                            style={{ width: 20, height: 20, resizeMode: 'contain', backgroundColor: '#000' }}
                        />
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "center", marginBottom: 30, marginTop: 25, alignItems: 'flex-start' }}>
                        <Text style={{ fontWeight: '500',color:COLORS.white,marginLeft:5, }}>
                            By continuing you agree to our
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, color: COLORS.white, marginTop: 10,fontWeight:'600' }}> Terms of Service and Privacy Policy.</Text>
                        </TouchableOpacity>
                    </View>
                    <GradientButton  title="SignUp" />
               
                 </View>
            </ScrollView>
        </>
    )
}


const styles = StyleSheet.create({
    FlexCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgimage: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        marginTop:10,
    },
    h4: {
        fontSize: 16,
     },
    MainWrapper: {
        marginHorizontal: 15,
        backgroundColor: COLORS.primary
    },
    logingHeading: {
        color: '#181725',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 15,
        marginTop: 30,
    },
    logingText: {
        fontSize: 16,
        color: COLORS.white,
        textAlign:'center'
    },
    WhiteBg: {
        backgroundColor:COLORS.primary,
        flex: 1,
    },
    labelText: {
        fontSize: 15,
        marginTop: 20,
        color: COLORS.white
    },
    BtnGreen: {
        backgroundColor: COLORS.Pink,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        width: '100%',
        borderRadius: 50,
        marginTop: 25,
        height:50,
    },
    btncolor: {
        color: COLORS.white,
        fontWeight:'600',
        fontSize:16,
    }

})

export default Signup;