/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

import ListItem from './src/components/ListItem.js';
import {Icon} from 'native-base';

export default class App extends Component<Props> {
  
state = {
  placeName: '',
  places:[]
}

placeNameChangedHandler = val => {
  this.setState({
    placeName: val
  });
}

removeItem(e) {
    let filteredArray = this.state.places.filter(item => item !== e.target.value)
    this.setState({places: filteredArray});
}

placeSubmitHandler =  () => {
  if (this.state.placeName.trim() === ""){
    return;
  }
  this.setState(prevState => {
    return{
      places: prevState.places.concat(prevState.placeName)
    };
  });
  this.setState({placeName: "" }); 
};

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <View>
        <ListItem key={i} placeName={place}/>   
      </View>
      ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
          placeholder="Things I need to get done:"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
           />
          <Button 
            title="Add" 
            style={styles.placeButton}
            color="#841584"
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>
        {placesOutput}
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    //flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center"
  },
  placeInput:{
    width: "70%"
  },
  placeButton:{
    width:"30%",
    color:'green'
  },
  buttonInput: {
    color: '#00aeef',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15 
  },
  listItem:{
    color:"green"
  },
  listContainer:{
    width:"100%",
  }
  
});


// <Text key={i} style={styles.listItem}>{i + 1}. {place}</Text>
