import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const CountryPageItem = ({name, flag,  dial_code}:
    {name:string, flag:string,  dial_code:string}) => {
  return (
    <View style={styles.main}>
        <View style={styles.root}>
            <View style={styles.midView}>
                <Text>{flag}</Text>
                <Text>{name}</Text>
            </View>
            <Text style={styles.dial}>{dial_code}</Text>
        </View>
        <View style={styles.divider}></View>
    </View>
  )
}


const styles = StyleSheet.create({
    main: {
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        elevation: 8,
        paddingHorizontal: 15,
        paddingVertical: 12,
        gap: 18
    },
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 10
    },
    midView: {
        display: "flex",
        flexDirection: "row",
        gap: 5

    },
    dial: {

    },
    divider: {
        borderBottomWidth: 0.5,
        borderBottomColor: "#85959F"
    }
})