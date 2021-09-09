
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import AddFridge from './AddFridge';


class MainPage extends React.Component {


  _redirectionPageConnexion = () => {
    this.props.navigation.navigate("Connexion");
  }


  render(){
    return (     
      <View style={styles.container}>
        <View style={styles.container_FridgeListe}>

          <Text>Welcome to Fridge App!</Text>
          
        </View>

        <View style={styles.main_container_btn}>

          <View style={styles.container_btn}>
            <TouchableHighlight onPress={() => this._redirectionPageConnexion()} underlayColor="white">
                <View style={styles.container_connexionLogo}>
                    <Text style={styles.connexionLogo}>Connexion</Text>
                </View>
            </TouchableHighlight>
          </View>

          <View style={styles.container_btn}>
            <AddFridge style={styles.addFridge}/>
          </View>       

        </View>

        <View style={styles.container_navigation}>
          <Text>Navigation!</Text>
        </View>
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
  container_FridgeListe: {
    flex: 10,
    backgroundColor: 'blue',
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container_navigation: {
    flex: 1,
    backgroundColor: 'gray',
    width: '100%',
  },
  addFridge: {

  },
  main_container_btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',    
  },
  container_btn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',    
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: 'purple',
  },
  connexionLogo: {

  },
  container_connexionLogo: {

  },

});

export default MainPage
