import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text } from 'react-native'
import Header from '../components/Header'
import CategoriesList from '../components/CategoriesList'
import EventSlider from '../components/EventsSlider'
import TrandingEvents from '../components/TrandingEvents'
import HomeNewsfeed from '../components/HomeNewsfeed'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS, FONTS } from '../constants'
import { AllEvents } from '../stores/actions/user.action'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(AllEvents())
    }, []);

    const eventsData = useSelector((state: any) => state?.userReducer?.eventsData);

    return (
        <>
            <SafeAreaView style={FONTS.container}>
                <View>
                    <Header title='HI, lara' city='Newyork' />
                </View>
                {/* {eventsData?.length > 0 && (
                    eventsData?.map((item: any) => {
                        return (
                            <Text style={{backgroundColor: '#ccc'}}>{item?.name}</Text>
                        )
                    })
                )} */}
                <View>
                    <CategoriesList />
                </View>
                <ScrollView style={{ marginBottom: 60 }}>
                    <EventSlider />
                    <TrandingEvents />
                    <HomeNewsfeed />
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default Home;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor:COLORS.primary,
//         padding:5,
//     }
// });

