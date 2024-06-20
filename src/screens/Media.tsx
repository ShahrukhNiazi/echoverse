import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants'
import ArrowLeft from 'react-native-vector-icons/AntDesign'
import GalleryIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Videosgallery from '../components/Videosgallery'
import Photogallery from '../components/Photogallery'
import Favouritegallery from '../components/Favouritegallery'
import VideoIcon from 'react-native-vector-icons/Feather'
import PhotoIcon from 'react-native-vector-icons/FontAwesome'
import MediaIcon from 'react-native-vector-icons/MaterialIcons'
import InnerHead from '../constants/InnerHead';
import LinearGradient from 'react-native-linear-gradient';



const Media = ({ navigation }) => {
    const [activeTab, setActiveTab] = useState('Videos');

    const renderContent = () => {
        switch (activeTab) {
            case 'Videos':
               return <Videosgallery />;
            case 'Photos':
               return <Photogallery />;
            case 'Favorites':
               return <Favouritegallery />;
            default:
               return null;
        }
    };

    return (
        <View style={styles.container}>
             <InnerHead navigation={navigation} Title="Gallery" />
            <View style={styles.tabsContainer}>
                <TouchableOpacity onPress={() => setActiveTab('Videos')} style={styles.tabbar}>
                    <View style={[styles.tab, activeTab === 'Videos' && styles.activeTab]}>
                        <VideoIcon size={20} name={'video'} style={{ color: COLORS.black }} />
                        <Text style={styles.tabtext}> Videos</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('Photos')} style={{ alignItems: 'center', }}>
                    <View style={[styles.tab, activeTab === 'Photos' && styles.activeTab]}>
                        <PhotoIcon size={20} name={'photo'} style={{ color: COLORS.black }} />
                        <Text style={styles.tabtext}> Photo</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setActiveTab('Favorites')} style={{ alignItems: 'center', }}>
                    <View style={[styles.tab, activeTab === 'Favorites' && styles.activeTab]}>
                        <MediaIcon size={20} name={'perm-media'} style={{ color: COLORS.black }} />
                        <Text style={styles.tabtext}> Media kits</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>{renderContent()}</View>
        </View>
    );
};



export default Media;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:COLORS.themeBox
    },
    tabsContainer: {
        flexDirection: 'row',
        marginBottom: 26,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    tab: {
        marginRight: 8,
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.Pink,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    activeTab: {
        backgroundColor:COLORS.Pink,
        color:COLORS.green,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabbullet: {
        fontSize: 18,
        color: COLORS.black,
        fontWeight: '600',
        marginTop: 5,
        marginLeft: 10,
        fontFamily: 'Poppins-Medium',
    },
    tabtext: {
        fontSize: 11,
        color: '#000',
        fontWeight: '600',

        marginRight: 8,
        marginLeft: 8,
    } 
});