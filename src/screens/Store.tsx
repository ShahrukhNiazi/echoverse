import React from 'react'
import { Text, View } from 'react-native'
import { COLORS,SIZES } from '../constants'

const Store = () => {
    return (
        <>
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',color:'#000' }}>
                <Text style={{ color:COLORS.black }}>
                  Store screen is here
                </Text>
            </View>
        </>
    )
}

export default Store;