import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { DrawerItemList, createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer'
import { COLORS } from '../constants'
import { Home, Media, Address, Favourite,Splash } from '../screens'
import Icon from 'react-native-vector-icons/Ionicons'
import MediaIcon from 'react-native-vector-icons/MaterialIcons'
import FavIcon from 'react-native-vector-icons/MaterialIcons'
import StoreIcon from 'react-native-vector-icons/MaterialIcons'
import BottomTabNavigator from './BottomTabNavigator'
import CustomDrawerContent from '../components/CustomDrawerContent'


const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    return (
        <>
            <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: '#3f4158',
                        //   activeTintColor: COLORS.black, 
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        borderRightWidth:1,
                        borderColor:'#ba275b',
                        zIndex: 1,
                        width:250,
                     },
                    headerShown: false,
                    drawerActiveBackgroundColor: '#ba275b',
                    drawerInactiveTintColor: COLORS.white,
                    drawerActiveTintColor: COLORS.white,
                    drawerLabelStyle: {
                        fontSize: 14,
                        marginLeft: -20,
                        fontFamily: 'Poppins-Regular',
                        height: 18,
                    },
                }}
            >
                 <Drawer.Screen
                    name="Home"
                    options={{
                        drawerLabel: 'Home',
                        headerShadowVisible: false,
                        drawerIcon: () => (
                            <Icon name='home-outline' size={21} style={{ color: COLORS.white }} />
                        )
                    }}
                    component={BottomTabNavigator}
                />
                <Drawer.Screen
                    name="Media"
                    options={{
                        drawerLabel: 'Media',
                        headerShadowVisible: false,
                        drawerIcon: () => (
                            <MediaIcon name='monochrome-photos' size={21} style={{ color: COLORS.white }} />
                        )
                    }}
                    component={Media}
                />
                <Drawer.Screen
                    name="Store"
                    options={{
                        drawerLabel: 'Store',
                        headerShadowVisible: false,
                        drawerIcon: () => (
                            <StoreIcon name='store' size={24} style={{ color: COLORS.white }} />
                        )
                    }}
                    component={Media}
                />
                <Drawer.Screen
                    name="Favourite"
                    options={{
                        drawerLabel: 'Favourite',
                        headerShadowVisible: false,
                        drawerIcon: () => (
                            <FavIcon name='favorite-outline' size={21} style={{ color: COLORS.white }} />
                        )
                    }}
                    component={Media}
                />

            </Drawer.Navigator>
        </>
    )
}

export default DrawerNavigation;

const styles = StyleSheet.create({
    image: {
        width: 80,
        height: 80,
    }

});