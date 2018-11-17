/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';


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
        <Text key={i} style={styles.listItem}>{i + 1}. {place}</Text>
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
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>{placesOutput}</View>
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
    width:"30%"
  },
  buttonInput: {
    color: '#00aeef',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15 
  },
  listItem:{
    color:"green"
  }
  
});
