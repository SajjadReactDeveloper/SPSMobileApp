import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function MyComplaints() {
  return (
    <View>
      <Text style = {styles.mainText}>My Complaints</Text>
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
  );
}

const styles = StyleSheet.create({
  mainText: {
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  }
})