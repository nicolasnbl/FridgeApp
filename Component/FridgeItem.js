
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


class FridgeItem extends React.Component {




  render(){
      const redirectionDetailFridge = this.props.redirectionDetailFridge;
    return (     
      <TouchableHighlight style={styles.container_touchable} onPress={() => redirectionDetailFridge()} underlayColor="white">
            <View style={styles.container}>
                <View style={styles.container_title}>
                    <Text>Mon Frigo</Text>
                </View>

                <View style={styles.container_ingrediant}>
                    <Text>Oeuf</Text>
                </View>
            </View>
      </TouchableHighlight>

    );
  }
}

const styles = StyleSheet.create({
    container_touchable: {
        width: '100%',
        backgroundColor: 'white',
    },
    container: {
    backgroundColor: 'white',
    width: '100%',
    borderWidth: 1,
  },
  container_title: {
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 25,
  },

});

export default FridgeItem
