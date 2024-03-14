import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, Linking, TouchableOpacity } from 'react-native';
import { styles } from './WelcomePage.styles';


const CreatePassComponent = () => {
  const [email, setEmail] = useState('');
  const [saveButton, setSaveButton] = useState('');
  const [pass, setPass] = useState('')

  const handleSubmit = async () => {
    if (!email) {
      return alert('Please enter your email address.');
    }

    try {
      const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        body: `email=${email}`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      if (!response.ok) {
        throw new Error('Error creating pass');
      }

      const link = await response.text();
      //console.log(link);
      
      setPass(link);
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  const goToPass = () =>{
    //console.log(pass);
    Linking.openURL(`${pass}`);
  }
 
  return (
    <View style={styles.root}>
      <Text>Enter your email address to generate a new pass:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TouchableOpacity onPress={goToPass}>{pass ? <Image source={require('../../../assets/wallet-button.png')} style={{width: 275, height: 50}} /> : <Button title="Create Pass" onPress={handleSubmit} />}</TouchableOpacity>
      
    </View>
  );
};

export default CreatePassComponent;
