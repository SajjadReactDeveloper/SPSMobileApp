import React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useGetUserQuery } from '../../services/userAuthApi'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Caption, Drawer, Title } from "react-native-paper";
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Dashboard({navigation}) {
  const [token, setToken] = React.useState('');
  React.useEffect(() => {
    (
      async () => {
        const token = JSON.parse(await AsyncStorage.getItem('token'));
        setToken(token);
      }
    )();
  });

  const { data } = useGetUserQuery(token);
  return (
    <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style = {styles.drawerContent}>
                    <View style = {styles.userInfoSection}>
                        <TouchableOpacity >
                            <View style = {{flexDirection:'row', marginTop:15}}>
                                <Avatar.Image size={50} />
                            </View>
                        </TouchableOpacity>
                        <View style = {{marginLeft: 10, flexDirection: 'column', marginTop: 10}}>
                            <Title style={styles.title}>Sajjad</Title>
                            <Caption style={styles.caption}>Hello</Caption>
                        </View>
                    </View>
                    <Drawer.Section style = {styles.drawerSection}>
                        <DrawerItem label="Dashboard" onPress = {() => props.navigation.navigate('DashBoard')}/>
                        <DrawerItem label="Book Ticket" onPress = {() => props.navigation.navigate('Book Ticket')}/>
                        <DrawerItem label="View Ticket" onPress = {() => props.navigation.navigate('View Ticket')}/>
                        <DrawerItem label="Settings" />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style = {styles.bottomDrawerSection}>
                 <DrawerItem icon={() => <Ionicons name="log-in-outline" size={30} color="black"/>} label="Sign Out" />
            </Drawer.Section>
        </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20,
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#fcfcfc',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16 
    }
})