import React, { useState } from "react"
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { Images } from '../constants/Images'
import { COLORS } from '../constants'




export const InputField = ({
    onPress = () => { },
    placeholder = null,
    secureTextEntry,
    eyeIcon = null,
    container = {},
    inputStyle = {},
    placeholderTextColor = 'white',
    iconStyle = {},
    eyeIconStyle = {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    },
    numberOfLines = null,
    multiline = false,
    editable = true,
    keyboardType = null,
    onChange = text => { },
    value = '',
    onBlur = () => { },
    firstIcon = null,
    firstIconStyle = {},
}) => {
    const [toggle, setToggle] = useState(false)
    const [text, settext] = useState(value)
    const onChangeValue = text => {
        onChange(text)
        settext(text)
    }

    return (
        <>
            <View style={[styles.input, container]}>
                {firstIcon && <Image source={firstIcon} style={[styles.fontIcon, firstIconStyle]} />}
                 <TextInput
                    editable={editable}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    onChangeText={onChangeValue}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    style={[
                        styles.inputStyle,
                        inputStyle,
                        { width: eyeIcon ? '90%' : '80%' }
                    ]}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    value={value}
                    onBlur={onBlur}
                />
                {eyeIcon && <TouchableOpacity
                    style={styles.initaileyestyle}
                    activeOpacity={1}
                    onPress={onPress}>
                    <Image style={[eyeIconStyle]} source={eyeIcon} />
                </TouchableOpacity>}
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 50,
        flexDirection: 'row',
        marginTop: 10,
        shadowRadius: 2,
        borderWidth: 1,
        padding: 5,
        borderColor: COLORS.Pink,
        borderRadius: 50,
        backgroundColor:COLORS.themeBox,
        color:COLORS.white
    },
    logoImg: {
        marginTop: 20,
        marginLeft: 20,
    },
    inputStyle: {
        width: '95%',
        fontSize: 15,
        color: '#474747',
        borderColor: '#474747'
    },
    fontIcon: {
        color: "#B4B4B4",
        paddingRight: 10,
        paddingLeft: 30,
        justifyContent: "center",
        alignSelf: "center",
        position: 'relative',
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    KeyIcon: {
        color: "#B4B4B4",
        paddingRight: 10,
        paddingLeft: 30,
        justifyContent: "center",
        alignSelf: "center",
        position: 'relative',
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    initaileyestyle: {
        marginTop: 10,
    }
})
