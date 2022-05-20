import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { DataTable } from 'react-native-paper';

export default function ComplaintStatus() {
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  return (
    <View style={{backgroundColor: 'black'}}>
      <Text style={styles.mainText}>Register Complaint</Text>
      <Text style={styles.label}>Complaint Id</Text>
      <TextInput
        placeholderTextColor="white"
        placeholder="Enter Complaint Title"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Track Complaint</Text>
      </TouchableOpacity>
      <View>
          <DataTable>
      <DataTable.Header>
        <DataTable.Title>Complaint No</DataTable.Title>
        <DataTable.Title numeric>Type</DataTable.Title>
        <DataTable.Title numeric>Status</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>LZC 3509</DataTable.Cell>
        <DataTable.Cell numeric>Suzuki</DataTable.Cell>
        <DataTable.Cell numeric>2022</DataTable.Cell>
      </DataTable.Row>
      </DataTable>
      </View>
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
