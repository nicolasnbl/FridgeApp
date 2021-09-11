
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { borderWidth } from 'styled-system';
import { borderColor } from 'styled-system';
import { border } from 'styled-system';
import { flex } from 'styled-system';

class Connexion extends React.Component {




  render() {
    return (
      <View style={styles.container}>
        <Text>Connexion!!!!</Text>

        <View style={styles.container_input}>
          <TextInput
            placeholder="name"
            onChangeText={(name) => this.setState({ name })}
            style={styles.input}
          />
        </View>

        <Button title="Connexion avec Google" onPress={() => alert('btn press')} />
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
