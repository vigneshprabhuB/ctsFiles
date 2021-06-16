import React from 'react';
import { View, Button } from 'react-native';
import { styles } from '../Styles';

export function ProfileScreen({ navigation }) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Button title="Home"
                onPress={() => navigation.navigate('Home')}></Button>
        </View>
    );
}