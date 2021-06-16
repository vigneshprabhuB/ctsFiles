import React, { useState, Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { styles } from '../Styles';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import *  as LoacalStore from '../../helper/CommonUtil';
import *  as Constants from '../constant';


WebBrowser.maybeCompleteAuthSession();
export function LoadLoginPage({ route, navigation }) {



  const [userName, setUserName] = React.useState();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '806471521542-7k36fosa636pickaes2q3gpkdh2tifcj.apps.googleusercontent.com',
    androidClientId: '806471521542-5jnse22n0bn8ovklkllqo7db94n5k1qg.apps.googleusercontent.com',
    webClientId: '806471521542-7k36fosa636pickaes2q3gpkdh2tifcj.apps.googleusercontent.com',
  }, { "scheme": "wells" });


  React.useEffect(() => {


    if (response?.type === 'success') {
      const { authentication } = response;
      setProfileInfo(authentication.accessToken);

    } else {
      console.log(response);
    }

  }, [response]);


  let setProfileInfo = function (accessToken) {
    fetch('https://www.googleapis.com/oauth2/v1/userinfo?alt=json', { 'headers': { 'Authorization': 'Bearer ' + accessToken } })
      .then(response => response.json())
      .then(async data => {
        console.log(data);
        let UserModal = { "userName": "", "emailId": "", "profile": "" }
        UserModal.userName = data.name;
        UserModal.emailId = data.email;
        UserModal.profile = data.picture;
        LoacalStore.saveInStore(Constants.USER_DATA, JSON.stringify(UserModal));
        console.log(await LoacalStore.getValueFromStore(Constants.USER_DATA));
      });

    //.then(() => navigation.navigate('dashBoard'));
  }


  return (
    <View style={styles.container} >
      <View style={styles.top}>

      </View>
      <View style={styles.loginForm}>
        <Text style={styles.loginTitle}>SIGN IN </Text>
        <Text style={styles.loginButton}> {userName}</Text>


        <View style={styles.loginButton}><Button style={styles.loginButtonIn}
          title="Sign In With Google"
          onPress={() => {
            promptAsync();
          }}

        />
        </View></View>
    </View>);

}
