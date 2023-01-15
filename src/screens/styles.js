import { StyleSheet, View } from 'react-native';
import constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        margin: 27,
    },

    header: {
        paddingTop: 22,
    },

    title: {
        color: "black",
        fontSize: 53,
        fontWeight: "700",
        marginTop: -5,
    },

    subtitle: {
        fontSize: 15,
        
    },

    titleInfo: {
        fontSize: 15,
        marginTop: 12,
        fontWeight: "700",
    },

    btnCreate: {
        width: 374,
        height: 120,
        borderRadius: 22,
        display: "flex",
        padding: 15,
        marginVertical:70,
    },

    btnLoad: {
        width: 374,
        height: 120,
        borderRadius: 22,
        display: "flex",
        padding: 15,
        marginBottom:80,
    },

    btnList: {
        width: 374,
        height: 120,
        borderRadius: 22,
        display: "flex",
        padding: 15,
        marginVertical:10,
    },
    btnTimer: {
        width: 374,
        height: 133,
        borderRadius: 22,
        display: "flex",
        padding: 15,
        marginVertical:10,
    },

    btnContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 500,
        marginTop: 20,
    },
    
    btnTextHome: {
        color: "#FFFFFF",
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: "flex-end",
    },

    btnTextBox: {
        paddingTop: 25,
        display: "flex",
        alignSelf: "flex-end",
    },

    btnDescript: {
        fontSize: 15,
        color: "#FFFFFF",
        opacity: 0.86,
    },
})