
import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';


class LoadingPage extends React.Component {

    componentDidMount() {
        this._CheckIfLoggedIn();
    }

    _CheckIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.props.navigation.navigation("Profil");
            }
            else {
                this.props.navigation.navigation("Connexion");
            }
        })
    }


    render() {
        return (
            <ActivityIndicator size='large' />

        );
    }
}

const styles = StyleSheet.create({
    container: {

    },

});

export default LoadingPage
