import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants';
import ViewsTitle from '../components/ViewsTitle';

const TrandingEvents = () => {
    const navigation = useNavigation();

    const data = [
        {
            id: '1',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme01.jpg'),
        },
        {
            id: '2',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme02.jpg'),
        },
        {
            id: '3',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme02.jpg'),
        },
        {
            id: '4',
            title: 'Glowing Art performance',
            locate: 'Singapore',
            time: '22:00 PM',
            src: require('../assets/images/farme02.jpg'),
        },
    ];

    const renderItem = (item) => (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('EventDetail')}>
            <View style={styles.EventMain}>
                <View style={styles.FrameColumn}>
                    <Image
                        source={item.src}
                        style={{
                            borderRadius: 10,
                            width: '100%',
                            height: 80,
                            borderColor: COLORS.Pink,
                            borderWidth: 1,
                        }}
                    />
                    <View style={styles.shedule}>
                        <Text style={styles.Date}>29</Text>
                        <Text style={styles.Month}>Mar</Text>
                    </View>
                </View>
                <View style={styles.eventsinfo}>
                    <Text style={styles.h3}>{item.title}</Text>
                    <View style={styles.address}>
                        <View style={{ flexDirection: 'row', marginLeft: 2 }}>
                            <Text style={styles.locate}>{item.time}</Text>
                        </View>
                        <View>
                            <Text style={styles.join}>{item.locate}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );

    const renderHeader = () => (
        <View style={FONTS.CenterAlin}>
            <ViewsTitle title={'Events'} />
            <TouchableOpacity onPress={() => navigation.navigate('EventList')}>
                <Text style={styles.ViewMore}>View More</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {renderHeader()}
            <ScrollView contentContainerStyle={styles.scrollViewContainer} showsVerticalScrollIndicator={true}>
                {data.map((item) => renderItem(item))}
            </ScrollView>
        </View>
    );
};

export default TrandingEvents;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
        maxHeight: 200, // Set height to show only two items initially
    },
    h2: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: '#000',
        marginTop: 0,
    },
    h3: {
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color: '#fff',
        width: '60%',
    },
    EventMain: {
        shadowColor: COLORS.Pink,
        borderWidth: 1,
        elevation: 0,
        overflow: 'hidden',
        borderRadius: 10,
        width: '93%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#3f4158',
        marginBottom: 10,
        marginLeft: 15,
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.9,
    },
    FrameColumn: {
        position: 'relative',
        width: '25%',
        marginLeft: 5,
    },
    eventsinfo: {
        width: '70%',
    },
    Date: {
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color: '#000',
        lineHeight: 20,
        marginTop: 1,
    },
    locate: {
        fontFamily: 'Poppins-Medium',
        color: '#fff',
        marginLeft: 0,
    },
    Month: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        color: '#333',
        lineHeight: 13,
    },
    shedule: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: 35,
        height: 35,
        margin: 2,
        alignItems: 'center',
        borderRadius: 8,
        left: 5,
        top: 5,
    },
    address: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    join: {
        fontFamily: 'Poppins-Medium',
        color: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
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
