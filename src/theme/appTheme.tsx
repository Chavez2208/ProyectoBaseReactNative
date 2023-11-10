import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 10,
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
    },
    rowContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 7,
    },
});

export const colors = {
    soft: {
        primary: '#363795',
        secondary: '#0575E6',
    },
    strong: {
        primary: '#021B79',
        secondary: '##2B32B2',
    },
    colorsPrimary: {
        white: '#FFFFFF',
        silver: '#C4C4C4',
        onyx: '#373B44',
    },
    background: '#C4C4C4',
};
