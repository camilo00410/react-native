import { StyleSheet, View } from 'react-native'
import React from 'react'

const PositionScreen = () => {
  return (
    <View style={ styles.container }>
        <View style={ styles.cajaVerde } />
        <View style={ styles.cajaAzul } />
        <View style={ styles.cajaMorada } />
    </View>
  );
};

export default PositionScreen

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        backgroundColor: '#28C4D9',
        height: 400,
        width: 400,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    cajaAzul:{
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    cajaMorada:{
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cajaVerde:{
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        ...StyleSheet.absoluteFillObject,
    },
});
