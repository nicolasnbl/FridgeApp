
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Navigation from './Navigation/Navigation';

//---------------------------- Partie database ----------------------------------//

import firebase from 'firebase'
import { firebaseConfig } from './Database/config'

// Initialize Firebase

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


//--------------------------------------------------------------//


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,

    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })

      }
      else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if(!loggedIn){
      alert('test');
      return(
        <View>
          <Text>Loading</Text>
        </View>
      )
    }
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
