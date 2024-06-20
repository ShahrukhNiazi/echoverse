import React from 'react'
import { Text, View } from 'react-native'
import { COLORS,SIZES } from '../constants'


const PaymentMethod = () => {
    return (
        <>
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ color:COLORS.black }}>
                  Videosgallery screen is here
                </Text>
            </View>
        </>
    )
}

export default PaymentMethod;