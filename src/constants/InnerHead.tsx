import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'
import CustomIcon from '../constants/CustomIcon'

interface ViewsTitleProps {
    navigation: any; // or use the correct navigation type from React Navigation
    Title: string;
}

const InnerHead: React.FC<ViewsTitleProps> = ({ navigation, Title, }) => {

     return (
        <>
            <View style={styles.alignment}>
                <View style={styles.arrowback}>
                    <TouchableOpacity onPress={navigation.goBack}>
                        <CustomIcon size={30} name={'arrowleft'} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ fontSize: 25, color: COLORS.white, fontWeight: '600', textAlign: 'center',fontFamily: 'Poppins-Medium', }}>
                      {Title}
                    </Text>
                </View>
                <View>
                    {/* <CustomIcon size={30} name={'arrowleft'} color={COLORS.white} /> */}
                </View>
            </View>
        </>
    )
}

export default InnerHead;



const styles = StyleSheet.create({
    alignment: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 40,
        paddingRight: 10,
        width: '100%',
    },
    arrowback: {
        position: 'relative',
        left: 0,
    }

});