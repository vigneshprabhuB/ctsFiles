import React, { useState, Component } from 'react';
import { Text, TextInput, View, Platform } from 'react-native';

import { styles } from '../Styles';
import *  as LoacalStore from '../../helper/CommonUtil';
import *  as Constants from '../constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function SplashPage({ navigation }) {



    let validateUserState = async function () {
        //check for users data in 
        let userinfo = await LoacalStore.getValueFromStore(Constants.USER_DATA);
        if (userinfo) {
            setTimeout(() => navigation.navigate('dashBoard'), 3000);
        } else {
            setTimeout(() => navigation.navigate('login'), 1000);
        }
    }
    validateUserState();


    return (<View style={styles.center}>
        <Text>Logo Splash Screen</Text>
    </View>);
}