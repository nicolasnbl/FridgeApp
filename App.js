
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Navigation from './Navigation/Navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux"  // from "redux" important ! car sinon bug avec la fonction applyMiddleware
import rootReducer from './Redux/reducers'
import thunk from 'redux-thunk'



//---------------------------- Partie database ----------------------------------//

import firebase from 'firebase'
import { firebaseConfig } from './Database/config'

// Initialize Firebase

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}


//--------------------------------------------------------------//


const store = createStore(rootReducer, applyMiddleware(thunk))


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
    if (!loaded) {
      return (
        <View>
          <Text>Loading</Text>
        </View>
      )
    }
    
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Navigation />
        </View>
      </Provider>

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


