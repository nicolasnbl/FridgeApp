import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native'


class AddFridge extends React.Component{

    constructor() {
        super();
        this.state = {
            sousMenu: false,
        }
    }
    
    _onPressButton = () => {       
        this.setState(previousState => ({ sousMenu: !previousState.sousMenu }));
        console.log(this.state.sousMenu);
    }

    _onPressAddFridge = () => {
        console.log('test');
        
    }


    render() {
        return(      
            <View>
                { 
                    this.state.sousMenu ? 
                        <View>
                            <TouchableHighlight onPress={() => this._onPressAddFridge()} underlayColor="white">
                                <View style={styles.container_option}>
                                    <Text style={styles.logo}>Ajouter un frigo</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        
                    : null 
                
                }
                <TouchableHighlight onPress={() => this._onPressButton()} underlayColor="white">
                    <View style={styles.main_container}>
                        <Text style={styles.logo}>+</Text>
                    </View>
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

    },
})

export default AddFridge
