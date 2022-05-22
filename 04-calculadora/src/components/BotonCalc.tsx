/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'

interface Props {
    text: string;
    color?: string;
    ancho?: boolean;
    accion: ( numeroTexto: string ) => void;
}

const BotonCalc = ({text, color = "#2D2D2D", ancho = false, accion}:Props) => {
  return (
      <TouchableOpacity
        onPress={ () => accion(text) }
      >
            <View style={{
                    ...styles.boton,
                    backgroundColor: color,
                    width: ( ancho ) ? 180 : 80
                    
                }}>
                <Text style={{
                    ...styles.botonMedio,
                    color: ( color === '#9B9B9B') ? 'black' : 'white'
                    }}>{ text }</Text>
            </View>
    </TouchableOpacity>

  )
}

export default BotonCalc