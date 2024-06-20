import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { HelperText, TextInput } from 'react-native-paper'
// import { useDispatch, useSelector } from 'react-redux'
// import { LoginAction } from '../../../stores/actions/user.action'
import { InputField } from '../components/InputField'
import { Button } from '../constants/Buttons'
import { COLORS, SIZES } from '../constants'
import { Images } from '../constants/Images'
import FacebookIcon from 'react-native-vector-icons/FontAwesome'
import Linkden from 'react-native-vector-icons/Entypo'
import Google from 'react-native-vector-icons/FontAwesome'
import GradientButton from '../constants/GradientButton'
import InnerHead from '../constants/InnerHead'

const Login = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [checkemail, setcheckEmail] = useState('')
    const [checkpassword, setcheckpassword] = useState('')
    const [hidePassword, setHidePassword] = useState(false)
    const [validation, setvalidation] = useState('')
    //   const dispatch = useDispatch();
    //   const isLoading = useSelector(state => state.userReducer.isLoading)

    const onlogin = () => {

        let value = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            email,
        );

        if (email === '' || password === '') {
            setcheckEmail('Email required')
            setcheckpassword('Password is required')
        } else if (!email == value) {
            console.log('wrong email')
        } else {
            let LoginData = {
                email: email,
                password: password,
            }
            console.log('LoginData', LoginData)
            dispatch(LoginAction(LoginData, navigation))
        }

    }

    return (
        <>
            <View style={styles.WhiteBg}>
                {/* <View style={styles.bgimage}>
                    <Image source={Images.Pictures.Logo} />
                </View> */}
                <InnerHead navigation={navigation}  />
                <ScrollView>
                    <View style={styles.MainWrapper}>
                        <View style={{ marginBottom: 10, }}>
                            <Text style={styles.logingHeading}>
                                Login
                            </Text>
                            <Text style={styles.logingText}>
                                Enter your emails and password
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.labelText}>
                                Email
                            </Text>
                        </View>
                        <View>
                            <InputField value={email} onChange={text => setEmail(text)} firstIcon={Images?.Pictures?.UserIcon} placeholder={'Your Email'} />
                        </View>
                        <HelperText style={{ marginLeft: -10 }} type="error">{checkemail}</HelperText>
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
                                eyeIconStyle={{
                                    width: 18,
                                    height: 18,
                                    resizeMode: 'contain',
                                }}
                                secureTextEntry={hidePassword}
                                eyeIcon={hidePassword ? Images.Pictures.CloseEye : Images.Pictures.openeye} />
                        </View>
                        <HelperText style={{ marginLeft: -10 }} type="error">{checkpassword}</HelperText>
                        <View style={{ alignContent: 'center', alignItems: 'flex-end', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('Forgetpassword')}>
                                <Text style={{ color: COLORS.white, marginBottom: 15, fontWeight: '700' }}> Forgot Password ?</Text>
                            </TouchableOpacity>
                        </View>
                        <GradientButton
                            //   disabled={isLoading}
                            title="Login"
                            onPress={() => onlogin()}
                        />
                        <View style={{ flexDirection: "row", justifyContent: "center", alignSelf: "center", marginTop: 25, }}>
                            <Text style={{ fontWeight: '500', color: COLORS.white }}>
                                Don’t have an account ?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={{ fontSize: 16, color: COLORS.white, fontWeight: 600, marginLeft: 5, }} > Singup</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={{ color: COLORS.white, textAlign: 'center', marginTop: 20, fontWeight: '600', fontSize: 16 }}>
                                - Or sign with -
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10, }}>
                            <TouchableOpacity style={styles.loginAct}>
                                <Google name='google' size={22} style={{ color: COLORS.black, alignItems: 'center', justifyContent: 'center' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginAct}>
                                <FacebookIcon name='facebook' size={22} style={{ color: COLORS.black, alignItems: 'center', justifyContent: 'center' }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.loginAct}>
                                <Linkden name='linkedin' size={22} style={{ color: COLORS.black, alignItems: 'center', justifyContent: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    FlexCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bgimage: {
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        marginTop: 30,
    },
    h4: {
        fontSize: 16,
    },
    MainWrapper: {
        marginHorizontal: 15,
         marginTop:60,
     },
    logingHeading: {
        color: COLORS.white,
        fontSize: 34,
        fontWeight: '500',
        marginBottom: 15,
        marginTop: 30,
    },
    logingText: {
        fontSize: 16,
        color: COLORS.white
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
        backgroundColor: '#53B175',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginTop: 10,
        width: '100%',
        borderRadius: 5,
        marginTop: 25,
    },
    btncolor: {
        color: '#fff'
    },
    loginAct: {
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        width: 50,
        height: 50,
        borderColor: COLORS.Pink,
        borderRadius: 50,
        borderWidth: 1,
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }

})

export default Login;