import React from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MediaIcon from 'react-native-vector-icons/MaterialIcons'
import StoreIcon from 'react-native-vector-icons/FontAwesome5'
import NeewIcon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Media, Store, Newsfeeds} from '../screens'
import { COLORS } from '../constants'

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowlabel: false,
    headerShown: false,
    tabBarLabel: () => null,
    tabBarIcon: ({ focused }) => null,
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        borderWidth:1,
        borderTopColor: COLORS.Pink ,
        borderRightColor:COLORS.Pink ,
        borderLeftColor:COLORS.Pink ,
        elevation: 0,
        height: Platform.OS === "ios" ? 90 : 60,
        paddingBottom: 15,
        paddingTop: 15,
        tintColor: Platform.OS === "ios" ? COLORS.primary : COLORS.black,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        marginTop:0,
        backgroundColor:COLORS.themeBox,
    }
}

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
                name="DrawerHome"
                component={Home}
                options={{
                    // headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.Iconstyle} >
                                <Icon name='home-outline' size={20} color={focused ? '#dc5170' : '#cfcfcf'} />
                                <Text style={[styles.textStyle, focused ? styles.focusedText : null]}> Homes </Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Media"
                component={Media}
                options={{
                    // headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.Iconstyle} >
                                <MediaIcon name='perm-media' size={20} color={focused ? '#dc5170' : '#cfcfcf'} />
                                <Text style={[styles.textStyle, focused ? styles.focusedText : null]}> Media </Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Store"
                component={Store}
                options={{
                    // headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.Iconstyle} >
                                <StoreIcon name='store' size={16} color={focused ? '#dc5170' : '#cfcfcf'} />
                                <Text style={[styles.textStyle, focused ? styles.focusedText : null]}> E-store </Text>
                            </View>
                        )
                    }
                }}
            />
            <Tab.Screen
                name="Newsfeeds"
                component={Newsfeeds}
                options={{
                    // headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.Iconstyle} >
                                <NeewIcon name='newspaper-outline' size={20} color={focused ? '#dc5170' : '#cfcfcf'} />
                                <Text style={[styles.textStyle, focused ? styles.focusedText : null]}> News feeds </Text>
                            </View>
                        )
                    }
                }}
            />

        </Tab.Navigator>

    )
}

export default BottomTabNavigator;

const styles = StyleSheet.create({

    Iconstyle: {
        width: 70,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        marginBottom: 8,
        marginTop: 12,
    },
    textStyle: {
        fontSize: 11,
        marginTop: 3,
        fontFamily: 'Poppins-Light',
        lineHeight: 17,
        color: '#fff',
    },
    focusedText: {
        color: '#d53f6f',
    }


});