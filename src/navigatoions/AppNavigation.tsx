import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from '../navigatoions/BottomTabNavigator';
import DrawerNavigator from '../navigatoions/DrawerNavigator';
import { Home, Newsfeeds, Profile, Splash, Login, Signup, Forgetpassword, Newpassword, EventList, EventDetail, Store, EditProfile, Notifications, NewsFeedDetail, BandsInfo } from '../screens'

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Main'>
           <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='Forgetpassword' component={Forgetpassword} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='Newpassword' component={Newpassword} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='EventList' component={EventList} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='EventDetail' component={EventDetail} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='Notifications' component={Notifications} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='Newsfeeds' component={Newsfeeds} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='NewsFeedDetail' component={NewsFeedDetail} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='Store' component={Store} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name='BandsInfo' component={BandsInfo} options={{ headerShown: false }}></Stack.Screen>
           <Stack.Screen name="Main" component={DrawerNavigator} />
     </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation