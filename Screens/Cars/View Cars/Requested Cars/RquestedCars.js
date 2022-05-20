import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';

export default function RequestedCars() {
  const [cars, setCars] = React.useState([])
  React.useEffect(() => {
    async function fetchData(){
      try {
        const data = await axios.get("http://172.21.80.1:5000/car/viewApprovedCar");
        setCars(data.data)
      } catch (error) {
        console.log("Error: ", "Network Errror");
      }
    }
    fetchData();
  }, [])
  return (
    <View>
      <Text style = {styles.mainText}>Requested Cars</Text>
      <DataTable>
      <DataTable.Header>
        <DataTable.Title>License No</DataTable.Title>
        <DataTable.Title numeric>Brand</DataTable.Title>
        <DataTable.Title numeric>Model</DataTable.Title>
        <DataTable.Title numeric>Color</DataTable.Title>
      </DataTable.Header>
      {cars.map((car) => (
        <DataTable.Row key={car._id}>
          <DataTable.Cell>{car.regNo}</DataTable.Cell>
          <DataTable.Cell numeric>{car.brand}</DataTable.Cell>
          <DataTable.Cell numeric>{car.model}</DataTable.Cell>
          <DataTable.Cell numeric>{car.color}</DataTable.Cell>
        </DataTable.Row>
      ))}
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