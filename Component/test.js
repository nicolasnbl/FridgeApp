import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'


class Test extends React.Component{

    constructor() {
        super();
        this.state = {
            count: 0,
        }
    }

    _onPressButton() {
         
        
        this.setState({
            count: this.state.count + 1,
        });
        console.log(this.state.count);

    }

    render() {
        return(      
            <View>
                <TouchableHighlight onPress={() => this._onPressButton()} underlayColor="white">
                    <Text style={styles.logo}>Test</Text>
                </TouchableHighlight>
            </View>  
            
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 75,
        width: 75,
        backgroundColor: 'green',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        
    },
    logo: {
        fontSize: 40,
        color: 'black',
    },
    container_option: {
        backgroundColor: 'yellow',
        width: 10,
        height: 10,
    },
})

export default Test






