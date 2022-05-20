import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
} from 'react-native-fontawesome';

export default function SignUp({navigation}) {
  return (
    <View style = {{backgroundColor: 'black'}}>
      <Text style={styles.mainText}>
        Signup with one of the following options
      </Text>
      <View style={styles.icons}>
        <FontAwesome icon={SolidIcons.smile} />
        {/* <View>
          <Icon name="rowing" />
        </View>
        <View>
          <Icon name="rowing" />
        </View> */}
      </View>
      <Text style={styles.label}>Name</Text>
      <TextInput placeholderTextColor='white' style={styles.input} placeholder="Enter Name" />
      <Text style={styles.label}>Email</Text>
      <TextInput placeholderTextColor='white' style={styles.input} placeholder="Enter Email" />
      <Text style={styles.label}>Password</Text>
      <TextInput placeholderTextColor='white' style={styles.input} placeholder="Enter Password" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <Text style={styles.signUpText} onPress={() => navigation.navigate('Login')}>Already have an Account? Login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    mainText: {
    padding: 10,
    marginTop: 40,
    color: 'white'
  },
  label: {
    padding: 10,
    color: 'white'
  },
  input: {
    padding: 15,
    borderWidth: 3,
    marginHorizontal: 10,
    borderColor:
      'linear-gradient(90deg, rgba(127,5,142,1) 0%, rgba(211,41,162,1) 85%)',
    borderRadius: 5,
    color: 'white'
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
    color: 'white'
  },
  icons: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
  }
})
