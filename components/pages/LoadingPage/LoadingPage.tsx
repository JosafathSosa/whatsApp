import React from 'react'
import { View, Text } from 'react-native'
import {styles} from "./LoadingPage.styles"

import BackgroundImg from "../../../assets/loading_background.svg"
import Logo from "../../../assets/logo_1.svg"
import { TextLogo } from '../../../baseui/TextLogo'


const LoadingPage = () => {
  return (
    <View style={styles.root}>
        <View style={styles.bgStyleView}>
            <BackgroundImg />
        </View>

        <View style={styles.contentViewStyle}>
            <Logo width={70} height={70}/>
            <Text style={styles.textStyle}>WhatsApp</Text>
        </View>
        <View style={styles.textLogo}>
        <TextLogo />

        </View>

    </View>
  )
}

export default LoadingPage