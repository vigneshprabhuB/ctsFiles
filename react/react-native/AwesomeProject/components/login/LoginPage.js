import 'react-native-gesture-handler';
import React, { useState, Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from '../Styles';
import * as Google from 'expo-auth-session/providers/google';

WebBrowser.maybeCompleteAuthSession();

export function LoadLoginPage() {

  const [userName, setUserName] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '806471521542-7k36fosa636pickaes2q3gpkdh2tifcj.apps.googleusercontent.com',
    androidClientId: '806471521542-5jnse22n0bn8ovklkllqo7db94n5k1qg.apps.googleusercontent.com',
  }, { "scheme": "wells" });
  
  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      authentication.accessToken
      fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', { 'headers': { 'Authorization': 'Bearer ' + authentication.accessToken } })
        .then(response => response.json())
        .then(data => setUserName(data.name));
      console.log(authentication);
    } else {
      console.log(response);
    }
  }, [response]);

  

  return (
    <View style={styles.container} >
      <View style={styles.top}>

      </View>
      <View style={styles.loginForm}>
        <Text style={styles.loginTitle}>SIGN IN {userName}</Text>

        <TextInput keyboardType="email-address" placeholder="Email ID" style={styles.loginTextInput} />

        <TextInput secureTextEntry={true} style={styles.default} placeholder="Password" style={styles.loginTextInput} />
        <View style={styles.loginButton}><Button style={styles.loginButtonIn}
          title="Login"
          onPress={() => {
            promptAsync();
          }}
        /></View>
      </View>
    </View>);

}
