import { Button } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


const ContinueBtn = ({ text, fontSize, style, onPress}) => {
    return (
    // <Button block primary style={style} onPress={onPress}>
    //     <Text style={{ fontSize: fontSize }}>{text}</Text>
    //   </Button>
      <Button onPress={onPress} mt={5} colorScheme="cyan">{text}</Button>
    )
}

export default ContinueBtn

const styles = StyleSheet.create({

})
