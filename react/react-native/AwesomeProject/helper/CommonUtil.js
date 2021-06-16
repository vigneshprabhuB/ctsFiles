import * as SecureStore from 'expo-secure-store';



export async function saveInStore(key, value) {
    await SecureStore.setItemAsync(key, value);
}


export async function getValueFromStore(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return result;
    } else {
        throw `{key} Key is not found  in the store`;
    }
}