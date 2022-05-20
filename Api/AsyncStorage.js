import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
    try {
        const token = await AsyncStorage.getItem('token');
        console.log("My Token: ", token);
    } catch (error) {
        console.log(error)
    }
}

export { getData };