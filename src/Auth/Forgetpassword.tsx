import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { InputField } from '../components/InputField'
import { Images } from '../constants/Images'
import { COLORS, SIZES } from '../constants'
import ArrowLeft from 'react-native-vector-icons/AntDesign'




const Signup = ({ navigation }) => {


    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [hidePassword, setHidePassword] = useState(false)

    return (
        <>
            <View style={styles.WhiteBg}>
                <View style={{ alignItems:'center',justifyContent: 'flex-start', height:'100%', marginTop:40, }}>
                  <View style={styles.bgimage}>
                    <TouchableOpacity style={styles.arrows} onPress={navigation.goBack}>
                        <ArrowLeft size={20} name={'arrowleft'} style={{ color: COLORS.Pink }} />
                    </TouchableOpacity>
                    <Image source={Images.Pictures.Logo} />
                </View>
                <View style={styles.MainWrapper}>
                    <View style={{ marginBottom: 20, }}>
                        <Text style={styles.logingHeading}>
                            Forget Password
                        </Text>
                        <Text style={styles.labelText}>
                            Got it! If you need help with anything else or have more questions, feel free to ask!
                        </Text>
                    </View>
                    <View>
                        <InputField
                            value={password}
                            onChange={text => setpassword(text)}
                            onPress={() => setHidePassword(!hidePassword)}
                            secureTextEntry={hidePassword}
                            eyeIcon={hidePassword ? Images.Pictures.CloseEye : Images.Pictures.openeye}
                            style={{ width: 20, height: 20, resizeMode: 'contain', backgroundColor: '#000' }}
                        />
                    </View>
                    <TouchableOpacity style={styles.BtnGreen}>
                        <Text style={styles.btncolor}> Send Code </Text>
                    </TouchableOpacity>
                </View>
                </View>
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
        flexDirection: 'row',
    },
    h4: {
        fontSize: 16,
    },
    MainWrapper: {
        marginHorizontal: 15,
        
        marginTop:50,
    },
    logingHeading: {
        color:COLORS.white,
        fontSize: 24,
        fontWeight: '500',
        marginBottom: 15,
        marginTop: 30,
    },
    logingText: {
        fontSize: 16,
        color: '#7C7C7C'
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
        borderRadius: 20,
        marginTop: 25,
        height: 50,
    },
    btncolor: {
        color: COLORS.white,
        fontWeight: '600'
    },
    arrows: {
        position: 'absolute', 
        top: 20, 
        left: 15, 
        width: 45, 
        height: 45, 
        backgroundColor: COLORS.white,
        borderWidth: 2,
        borderColor: COLORS.Pink,
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 50,
    }

})

export default Signup;