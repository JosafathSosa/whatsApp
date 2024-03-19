import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import {} from "@react-navigation/native-stack"
import {Button, Icon} from "@rneui/base"
import {styles} from "./LoginPage.styles"
import { Input } from '@rneui/themed'

export const LoginPage = ({navigation}:{navigation:any}) => {

  const goToCountries = () => {
    navigation.navigate("country_page")
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.containerView}>
        <Text style={styles.title}>Enter your phone number</Text>
        <Text style={styles.desc}>WhatsApp will need to verify your number</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputCountry}>
            <Text>Mexico</Text>
            <Icon name='menu-down' type='material-community'onPress={goToCountries}/>
          </View>
          <View style={styles.inputNumber}>
            <Text style={{paddingBottom: 25}}>+ 52</Text>
            <Input placeholder='' inputContainerStyle={styles.inputNumerStyle}/>
          </View>
        </View>
      </View>
        <Button title="Next" buttonStyle={styles.btn} />
    </SafeAreaView>
  )
}

