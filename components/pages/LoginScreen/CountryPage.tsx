import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper';
import {useNavigation} from "@react-navigation/native"
import countryData from "../../../data/country.json"
import { CountryPageItem } from './CountryPageItem'


export const CountryPage = () => {
    const navigation = useNavigation()

    const goBack = () => {
        navigation.goBack()
    }
  return (
    <View>
        <Appbar.Header style={{backgroundColor: "white"}}>
            <Appbar.BackAction onPress={goBack} />
            <Appbar.Content title="Select your country" />
            <Appbar.Action icon="magnify" onPress={() => {}} />
        </Appbar.Header>
        <ScrollView style= {styles.root}>
            {countryData.map((item) =>{
                return <CountryPageItem /*{...item}*/ name={item.name} flag={item.flag} key={item.code} dial_code={item.dial_code}/>
        })}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
        paddingTop: 12,
        backgroundColor: "white"
    }
})