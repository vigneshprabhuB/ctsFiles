import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  {LoadLoginPage}  from './components/login/LoginPage';
import { HomeScreen } from './components/home/homePage';
import { ProfileScreen } from './components/home/profilePage';
import { SplashPage } from './components/login/SplashPage';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { "userName": "", "emailId": "", "authenticated": false, "showSplash": false }; 

  }



  render() {
    const BottomTab = createBottomTabNavigator();
    return this.state.authenticated ?

      (<NavigationContainer >
        <BottomTab.Navigator>
          <BottomTab.Screen name="Home" component={HomeScreen} />
          <BottomTab.Screen name="Profile" component={ProfileScreen} />
        </BottomTab.Navigator>
      </NavigationContainer>) :

      this.loginScreen();

  }

  loginScreen() {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          {this.state.showSplash ?
            <Stack.Screen name="splash" component={SplashPage} /> :
            <Stack.Screen name="login" component={LoadLoginPage} />}

          {/* <Stack.Screen name="signUp" component={SignUpScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>);
  }


}


