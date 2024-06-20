import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants'
import NeewIcon from 'react-native-vector-icons/Ionicons'
import ArrowLeft from 'react-native-vector-icons/AntDesign'
import Newsdetail from '../components/Newsdetail'
import DaliyNews from '../components/DaliyNews'
import InnerHead from '../constants/InnerHead'
import ViewsTitle from '../components/ViewsTitle'

const Newsfeeds = ({ navigation }) => {
    return (
        <>
            <View style={styles.Container}>
                <InnerHead navigation={navigation} Title="News Detail" />
                <View style={{ marginBottom: 20, }}>
                    <Newsdetail />
                </View>
                <View style={FONTS.CenterAlin}>
                    <View>
                        <ViewsTitle title={'Events'} />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <DaliyNews />
                </View>
            </View>
        </>
    )
}

export default Newsfeeds;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#000'
    },
    ViewMore: {
        color: '#8f8f8f',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginRight: 0,
    },

});