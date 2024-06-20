/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
*/

import React from 'react';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import AppNavigation from './src/navigatoions/AppNavigation';
import store from './src/stores/index'

const App = () => {

    return (
        <>        
            <StoreProvider store={store}>
                <AppNavigation />
            </StoreProvider>
        </>
    )

}





export default App;
