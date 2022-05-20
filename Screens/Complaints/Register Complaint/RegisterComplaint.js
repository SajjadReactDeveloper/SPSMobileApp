import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function RegisterComplaint() {
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  return (
    <View style={{backgroundColor: 'black'}}>
      <Text style={styles.mainText}>Register Complaint</Text>
      <Text style={styles.label}>Complaint Type</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Text style={styles.label}>Complaint Title</Text>
      <TextInput
        placeholderTextColor="white"
        placeholder="Enter Complaint Title"
        style={styles.input}
      />
      <Text style={styles.label}>Complaint Details</Text>
      <TextInput
        placeholderTextColor="white"
        placeholder="Enter Complaint Details"
        multiline={true}
        numberOfLines={10}
        style={{
          textAlignVertical: 'top',
          padding: 15,
          borderWidth: 3,
          marginHorizontal: 10,
          borderColor:
            'linear-gradient(90deg, rgba(127,5,142,1) 0%, rgba(211,41,162,1) 85%)',
          borderRadius: 5,
          color: 'white',
        }}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register Complaint</Text>
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
    color:
      'linear-gradient(90deg, rgba(127,5,142,1) 0%, rgba(211,41,162,1) 85%)',
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
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
