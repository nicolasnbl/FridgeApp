
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';

import firebase from 'firebase'

class Inscription extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: ''

        }

        this._onSignUp = this._onSignUp.bind(this)
    }

    _onSignUp() {
        const { name, email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                .doc(firebase.auth().currentUser.uid)
                .set({
                  name,
                  email
                })
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    _redirectionConnexion() {
        this.props.navigation.navigate("Connexion");
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>Inscription!!!!</Text>

                <View style={styles.container_input}>
                    <TextInput
                        placeholder="name"
                        onChangeText={(name) => this.setState({ name })}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="email"
                        onChangeText={(email) => this.setState({ email })}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        onChangeText={(password) => this.setState({ password })}
                        secureTextEntry={true}
                        style={styles.input}
                    />
                </View>

                <Button
                    onPress={() => this._onSignUp()}
                    title="S'inscrir"
                />

                <Button
                    onPress={() => this._redirectionConnexion()}
                    title="Connexion"
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

export default Inscription
