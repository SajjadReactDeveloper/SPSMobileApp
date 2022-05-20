import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React from 'react'
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'react-native-elements'
import {Input} from 'react-native-elements';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
 

export default function Login ({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = async() => {
    console.log(email, password)
    try {
        await AsyncStorage.removeItem('token')
        const res = await axios.post("http://172.21.80.1:5000/user/login", { email, password });
        await AsyncStorage.setItem('firstLogin', 'true');
        await AsyncStorage.setItem('token', JSON.stringify(res.data.token))
        navigation.navigate('Dashboard')
      } catch (error) {
        console.log("Error: ", error);
      }
  }
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <Text style={styles.mainText}>
        Login with one of the following options
      </Text>
      {/* <View style={styles.icons}>
        <View>
          <Icon name="rowing" />
        </View>
        <View>
          <Icon name="rowing" />
        </View> 
      </View>*/}
      <Text style={styles.label}>Email</Text>
      <TextInput placeholderTextColor='white' style={styles.input} placeholder="Enter Email" onChangeText={setEmail} />
      <Text style={styles.label}>Password</Text>
      <TextInput placeholderTextColor='white' style={styles.input} placeholder="Enter Password" onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress = {login}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.signUpText}
        onPress={() => navigation.navigate('SignUp')}>
        Dont have an Account? Sign up
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    padding: 10,
    marginTop: 40,
    color: 'white',
  },
  label: {
    padding: 10,
    color: 'white',
  },
  input: {
    padding: 15,
    borderWidth: 3,
    marginHorizontal: 10,
    borderColor:
      'linear-gradient(90deg, rgba(127,5,142,1) 0%, rgba(211,41,162,1) 85%)',
    borderRadius: 5,
    color: 'white',
  },
  button: {
    backgroundColor:
      'linear-gradient(90deg, rgba(127,5,142,1) 0%, rgba(211,41,162,1) 85%)',
    padding: 20,
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  signUpText: {
    textAlign: 'center',
    color: 'white',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
});