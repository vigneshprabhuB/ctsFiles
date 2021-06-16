import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export async function saveInStore(key, value) {
    if (Platform.OS === 'web') {

        try {
            await AsyncStorage.setItem(key, value);
            console.log('11111' + await getValueFromStore(key));
        } catch (e) {
            console.log(e);
        }
    } else {
        await SecureStore.setItemAsync(key, value);
    }
}


export async function getValueFromStore(key) {
    let result = null;
    if (Platform.OS === 'web') {

        try {
            result = await AsyncStorage.getItem(key);
            return result;
        } catch (e) {
            console.log(e);
        }
    } else {
        try {
            result = await SecureStore.getItemAsync(key);
            return result;
        } catch (e) {
            console.log(e);
        }




    }
}

