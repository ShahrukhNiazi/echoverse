import { Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export const COLORS = {
    primary: '#111425',
    white: "#fff",
    gray: "#757788",
    black: '#000',
    green: '#d1e40c',
    TextColor: '#8f8f8f',
    themeBox: '#3f4158',
    Pink: '#d53f6f',

}


export const SIZES = {
    // Global SIZES
    base: 8,
    font: 14,
    radius: 30,
    padding: 8,
    padding2: 12,
    padding3: 16,

    // FONTS Sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // App Dimensions
    width,
    height,
}

export const FONTS = {
    largeTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: SIZES.largeTitle,
        lineHeight: 55,
    },
    h1: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36, fontWeight: '600' },
    h2: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30, fontWeight: '600' },
    h3: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h3, lineHeight: 22, fontWeight: '600' },
    h4: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h4, lineHeight: 25, fontWeight: '600' },
    body1: { fontFamily: 'Poppins-Regular', fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: 'Poppins-Regular', fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: 'Poppins-Regular', fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: 'Poppins-Regular', fontSize: SIZES.body4, lineHeight: 20 },
    container: { flex: 1, backgroundColor: COLORS.primary, padding: 5 },
    CenterAlin: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%'
    }
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme