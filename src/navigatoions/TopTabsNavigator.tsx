import React from 'react'
import { Text, View, } from 'react-native'
import { COLORS, SIZES } from '../constants'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Videosgallery from '../components/Videosgallery'
import Photogallery from '../components/Photogallery'
import Favouritegallery from '../components/Favouritegallery'



const ProfileTabs = createMaterialTopTabNavigator();



const Toptabs = () => {
    return (
        <>
            <ProfileTabs.Navigator screenOptions={{
                    tabBarLabelStyle: { fontSize: 16 },
                     tabBarStyle: {
                        backgroundColor: 'red',
                        alignItems: 'center',
                        justifyContent: 'center',
                     },
                      tabBarIndicatorStyle: { backgroundColor: 'yellow' }, 
                }}>
                <ProfileTabs.Screen name={'Videos'} component={Videosgallery} />
                <ProfileTabs.Screen name={'Photos'} component={Photogallery} />
                <ProfileTabs.Screen name={'Favorites'} component={Favouritegallery} />
            </ProfileTabs.Navigator>;
        </>
    )
}

export default Toptabs;