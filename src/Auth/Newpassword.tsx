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
            <ScrollView style={styles.WhiteBg}>
                <View style={styles.bgimage}>
                    <TouchableOpacity style={styles.arrows} onPress={navigation.goBack}>
                      <ArrowLeft size={20} name={'arrowleft'}  style={{ color:COLORS.black }}/>
                    </TouchableOpacity>
                    <Image source={Images.Pictures.Logo} />
                </View>
                <View style={styles.MainWrapper}>
                    <View style={{ marginBottom: 20, }}>
                        <Text style={styles.logingHeading}>
                            Forget Password
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.labelText}>
                            New Password
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
                    <View>
                        <Text style={styles.labelText}>
                            Conform Password
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
                        <Text style={styles.btncolor}>Reset password</Text>
                    </TouchableOpacity>
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
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'contain',
        marginTop: 30,
        flexDirection:'row',
     },
    h4: {
        fontSize: 16,
     },
    MainWrapper: {
        marginHorizontal: 15,
        backgroundColor: '#fff'
    },
    logingHeading: {
        color: '#181725',
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
        backgroundColor: '#fff',
        flex: 1,
       
    },
    labelText: {
        fontSize: 15,
        marginTop: 20,
        color: COLORS.gray
    },
    BtnGreen: {
        backgroundColor: COLORS.green,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        width: '100%',
        borderRadius: 20,
        marginTop: 25,
        height: 50,
    },
    btncolor: {
        color: COLORS.black,
        fontWeight: '600'
    },
    arrows:{
        position:'absolute',
        top:20,
        left:15, 
        width:45, 
        height:45,
        backgroundColor: COLORS.white,
        borderWidth:2,
        borderColor:COLORS.green,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    }

})

export default Signup;