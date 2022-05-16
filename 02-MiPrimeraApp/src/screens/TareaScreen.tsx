import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

const TareaScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.cajaMorada}/>
        <View style={ styles.cajaNaranja}/>
        <View style={ styles.cajaAzul}/>
    </View>
  )
}

export default TareaScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    cajaMorada: {
        // flex:1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        // alignSelf: 'flex-end'
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf: 'center',
        // flex: 1,
    },
    cajaAzul: {
        width: 100,
        // height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // alignSelf: 'flex-start'
        // flex: 1,

    },


})