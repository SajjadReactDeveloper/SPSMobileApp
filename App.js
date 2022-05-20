import React, { Component } from 'react';
import { Text, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { store } from './store'
import { Provider } from 'react-redux'

//Screens
import Login from './Screens/login/Login';
import SignUp from './Screens/SignUp/SignUp';
import Dashboard from './Screens/Dashboard/Dashboard';

//Complaint Import
import RegisterComplaint from './Screens/Complaints/Register Complaint/RegisterComplaint';
import MyComplaints from './Screens/Complaints/View Complaints/MyComplaints';
import MyComplaintDetail from './Screens/Complaints/View Complaints/MyComplaintDetail';

//Cars Import
import RegisterCar from './Screens/Cars/Register Car/RegisterCar';
import ApprovedCars from './Screens/Cars/View Cars/Approved Cars/ApprovedCars';
import ApprovedCarsDetail from './Screens/Cars/View Cars/Approved Cars/ApprovedCarsDetail';
import RequestedCars from './Screens/Cars/View Cars/Requested Cars/RquestedCars';
import RequestedCarDetail from './Screens/Cars/View Cars/Requested Cars/RequestedCarsDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
      <>
        <StatusBar barStyle='dark-content' backgroundColor='#00aaff'/>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="approvedCarsDetail" component={ApprovedCarsDetail} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="RequestedCars" component={RequestedCars} />
            <Stack.Screen name="approvedCarsDetail" component={ApprovedCarsDetail} />
            <Stack.Screen name="myComplaints" component={MyComplaints} />
            <Stack.Screen name="approvedCars" component={ApprovedCars} />
            <Stack.Screen name="RegisterComplaint" component={RegisterComplaint} />
            <Stack.Screen name="RegisterCar" component={RegisterCar} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="RequestedCarsDetail" component={RequestedCarDetail} />
            <Stack.Screen name="myComplaintDetail" component={MyComplaintDetail} />
          </Stack.Navigator>
        </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  innerText: {
    color: 'red'
  }
});

export default () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}