import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoadLoginPage } from './components/login/LoginPage';
import { HomeScreen } from './components/home/homePage';
import { ProfileScreen } from './components/home/profilePage';
import { SignUpScreen } from './components/login/signUpPage';
import { SplashPage } from './components/login/SplashPage';
import * as WebBrowser from 'expo-web-browser';

import * as Linking from 'expo-linking';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { "accesToken": '', "response": '' };


  }

  render() {
    return this.mainScreen();
  }


  mainScreen() {
    const Stack = createStackNavigator();
    var response = this.state.response.toString();

    return (<NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="splash" component={SplashPage} />
        <Stack.Screen name="login" initialParams={this.state} component={LoadLoginPage} />
        <Stack.Screen name="dashBoard" component={this.homeScreen} />
      </Stack.Navigator>
    </NavigationContainer>);
  }

  homeScreen() {
    const BottomTab = createBottomTabNavigator();

    return (
      <BottomTab.Navigator>
        <BottomTab.Screen name="Home" component={HomeScreen} />
        <BottomTab.Screen name="Profile" component={ProfileScreen} />
      </BottomTab.Navigator>
    );
  }

}


