import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';

interface ViewsTitleProps {
    title: string;
 }

const ViewsTitle: React.FC<ViewsTitleProps> = ({ title }) => {
    return (
        <>
            <View>
                <Text style={styles.eventtitle}>{title}</Text>
            </View>
        </>
    );
};

export default ViewsTitle;

const styles = StyleSheet.create({
    eventtitle: {
        color: COLORS.white,
        marginLeft: 20,
        marginBottom: 5,
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Poppins-Regular',
    },
    ViewMore: {
        color: '#8f8f8f',
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        marginRight: 20,
    },
 
});