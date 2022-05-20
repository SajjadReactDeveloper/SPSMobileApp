import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function RequestedCarDetail() {
  return (
    <View>
      <Text style = {styles.mainText}>Car Detail</Text>
      <View></View>
      <View style = {styles.textDetails}>
          <Text style = {styles.text}>License number: </Text>
          <Text style = {styles.text}>Brand: </Text>
          <Text style = {styles.text}>Model: </Text>
          <Text style = {styles.text}>Color: </Text>
          <TouchableOpacity style = {styles.btn}>
              <Text style = {styles.btntext}>Delete</Text>
          </TouchableOpacity>
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  textDetails: {
      backgroundColor: 'black',
      padding: 10,
      margin: 10
  },
  text: {
      color: 'white',
      fontSize: 20,
      marginBottom: 10
  },
  btn: {
      backgroundColor: 'red',
      padding: 15,
      borderRadius:10,
      marginTop: 10
  },
  btntext: {
      color: 'white',
      textAlign: 'center'
  }
})