
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Navigation from './Navigation/Navigation';

//---------------------------- Partie database ----------------------------------//

import * as firebase from 'firebase'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDcKj9eKj8Qnt_AkO4WdAzm3ngHUzp6DWI",
  authDomain: "fridgeappfirebase-63030.firebaseapp.com",
  projectId: "fridgeappfirebase-63030",
  storageBucket: "fridgeappfirebase-63030.appspot.com",
  messagingSenderId: "188721747542",
  appId: "1:188721747542:web:4fe64280b4c67270118df7",
  measurementId: "G-FY6XJZ72YK"
};

firebase.initializeApp(firebaseConfig);


//--------------------------------------------------------------//


export default class App extends React.Component {


  render(){
    return (     
      <View style={styles.container}>

        <Navigation />   

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '100%',
  },
 

});
