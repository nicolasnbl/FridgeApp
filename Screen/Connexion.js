
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import * as firebase from 'firebase'

class Connexion extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''

    }

    this._onSignIn = this._onSignIn.bind(this)
  }

  _onSignIn() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
  }



  _redirectionInscription() {
    this.props.navigation.navigate("Inscription");
  }


  render() {
    return (
      <View style={styles.container}>
        <Text>Connexion!!!!</Text>

        <View style={styles.container_input}>
          <TextInput
            placeholder="email"
            onChangeText={(email) => this.setState({ email })}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
            style={styles.input}
          />
        </View>

        <Button
          onPress={() => this._onSignIn()}
          title="Connexion"
        />

        <Button
          title="Connexion avec Google"
          onPress={() => alert('btn press')}
        />

        <Button
          title="S'inscrir"
          onPress={() => this._redirectionInscription()}
        />

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },

  container_input: {

  },

  input: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
  }


});

export default Connexion
