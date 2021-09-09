
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';


class FridgeItem extends React.Component {




  render(){
      const redirectionDetailFridge = this.props.redirectionDetailFridge;
    return (     
      <TouchableHighlight style={styles.container} onPress={() => redirectionDetailFridge()} underlayColor="white">
            <View>
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
  container: {
    backgroundColor: 'white',
    width: '100%',
  },

});

export default FridgeItem
