
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import AddFridge from './AddFridge';
import FridgeItem from './FridgeItem';


class MainPage extends React.Component {


  _redirectionPageConnexion = () => {
    this.props.navigation.navigate("Connexion");
  }

  

  _redirectionCreateFridgePage = () => {
    this.props.navigation.navigate("CreateFridgePage");
  }

  _redirectionDetailFridgePage = () => {
    this.props.navigation.navigate("DetailFridgePage");
  }


  render(){
    return (     
      <View style={styles.container}>
        <View style={styles.container_FridgeListe}>

          <Text>Welcome to Fridge App!</Text>
          <View style={styles.container_FridgeItem}>
            <FridgeItem style={styles.FridgeItem} redirectionDetailFridge={this._redirectionDetailFridgePage}/>
          </View>
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
            <AddFridge style={styles.addFridge} redirectionCreateFridgePage={this._redirectionCreateFridgePage} />
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
    position: 'absolute',
    width: '100%',
    bottom: 50,    
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
  container_FridgeItem: {
    width: '100%',
    backgroundColor: 'white',
  },
  FridgeItem: {

  },

});

export default MainPage
