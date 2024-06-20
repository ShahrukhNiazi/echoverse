import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Image, View } from 'react-native';
import { PhotoGallery } from 'react-native-photos-gallery';
import { COLORS,SIZES } from '../constants'

export const data = [
    {
        id: 1,
        source: require('../assets/images/new01.jpg'),
    },
    {
        id: 2,
        source: require('../assets/images/new03.jpg'),
    },
    {
        id: 3,
        source: require('../assets/images/new04.jpg'),
    },
    {
        id: 4,
        source: require('../assets/images/new02.jpg'),
    },
    {
        id: 5,
        source: require('../assets/images/new03.jpg'),
    },
    {
        id: 6,
        source: require('../assets/images/new04.jpg'),
    },
    {
        id: 7,
        source: require('../assets/images/new05.jpg'),
    },
    {
        id: 8,
        source: {
            uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        },
    },

];

const Photogallery = () => {

    const [ImageURI, setImageURI] = useState('');


    return (
        <View style={styles.screen}>
            <PhotoGallery
                data={data}
                onImageExpand={({ visible }) => console.log(visible)}
                animatedImageDelay={60}
                modalBackgroundStyle={styles.modalBackgroundStyle}
                scaledImageResizeMode={'cover'}	
                thumbnailListImageWidth={110}	
                thumbnailListImageHeight={110}
       
              />
            {ImageURI !== '' && <Image source={data} />}
        </View>
    );
};

export default Photogallery;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: 350,
        paddingBottom: 60,
    
     },
    modalBackgroundStyle: {
        backgroundColor: COLORS.themeBox,
        height:'100%',
     }

});