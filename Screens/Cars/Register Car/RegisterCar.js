import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function RegisterCar() {
  return (
    <View style = {{backgroundColor: 'black'}}>
      <Text style = {styles.mainText}>Register Your Car</Text>
      <Text style = {styles.label}>License Number</Text>
      <TextInput placeholderTextColor='white' placeholder='Enter Car Registration Number' style = {styles.input}/>
      <Text style = {styles.label}>Brand</Text>
       <TextInput placeholderTextColor='white' placeholder='Enter Car Brand' style = {styles.input}/>
      <Text style = {styles.label}>Model</Text>
       <TextInput placeholderTextColor='white' placeholder='Enter Car Model' style = {styles.input}/>
      <Text style = {styles.label}>Color</Text>
       <TextInput placeholderTextColor='white' placeholder='Enter Car Color' style = {styles.input}/>
      <Text style = {styles.label}>Owner Name</Text>
       <TextInput placeholderTextColor='white' placeholder='Enter Car Owner Name' style = {styles.input}/>
       <TouchableOpacity style = {styles.button}>
           <Text style = {styles.buttonText}>Register</Text>
       </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    mainText: {
    padding: 10,
    marginTop: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'linear-gradient(90deg, rgba(127,5,142,1) 0%, rgba(211,41,162,1) 85%)'
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
  },
  icons: {
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
  }
})