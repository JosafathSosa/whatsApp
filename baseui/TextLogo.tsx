import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const TextLogo = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text1}>from:</Text>
      <Text style={styles.text}>FACEBOOK</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    root: {
        display: 'flex',
        justifyContent: "center"
    },
    text: {
        textAlign: "center",
        letterSpacing:2.25
    },
    text1: {
        textAlign: "center",
        color: "gray"
    }
})