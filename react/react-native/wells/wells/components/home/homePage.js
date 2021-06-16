import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import { styles } from '../Styles';
import { Ionicons } from '@expo/vector-icons';

export function HomeScreen({ route, navigation }) {

    //const { itemId, itemDes } = route.params;
    return (
        <View style={styles.homeScreen}>
            <View style={styles.homeHeader}>
                <TouchableHighlight onPress={() => alert('Pressed!')} activeOpacity={0.6} underlayColor="#fff">

                    <Ionicons name="log-in-outline" size={32} color="red" />

                </TouchableHighlight>
            </View>
        </View>
    );
}