import React from 'react'
import { Text, View } from 'react-native'
import { COLORS,SIZES } from '../constants'


const Favouritegallery = () => {
    return (
        <>
             <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color:COLORS.black }}>
                  Favouritegallery screen is here
                </Text>
            </View>
        </>
    )
}

export default Favouritegallery;