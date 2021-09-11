
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Navigation from './Navigation/Navigation';

//---------------------------- Partie database ----------------------------------//

import firebase from 'firebase'
import {firebaseConfig} from './Database/config'

// Initialize Firebase

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
