import React from 'react'
import { View, Text} from 'react-native'
import {Button} from "@rneui/base"
import {styles} from "./WelcomePage1.styles"
import { TextLogo } from '../../../baseui/TextLogo'


import ImageArt from "../../../assets/welcome_page_art.svg"

const WelcomePage1 = ({navigation}:{navigation:any}) => {

  const goToLoginPage = () => {
    navigation.navigate("login_page")
  }

  return (
    <View style={styles.root}>
        <Text style={styles.titleStyle}>Welcome to whatsApp</Text>
        <ImageArt />
        <Text style={styles.descStyle}>Read out <Text style={styles.linkStyle}>Privact Policy.</Text> Tap "Agree and Continue" to accept the <Text style={styles.linkStyle}>Terms of service</Text></Text>
        <Button title="AGREE AND CONTINUE"  buttonStyle={styles.buttonContainer} onPress={goToLoginPage}/>
        <TextLogo />
    </View>

  )
}

export default WelcomePage1