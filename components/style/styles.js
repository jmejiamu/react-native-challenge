import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        paddingTop: 0,
    },


    card: {
        backgroundColor: 'white',
        margin: 10,
        padding: 20,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },

    buttonStyle: {
        padding: 10,
        marginBottom: 15,
        borderColor: '#1D1B28',
        borderWidth: 1,
        marginTop: 10

    },
    textUserStyle: {
        color: '#1D1B28',
        textAlign: "center",

    },

})

export default styles;