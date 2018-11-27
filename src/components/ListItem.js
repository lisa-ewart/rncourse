
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button, Icon} from 'native-base';

const ListItem = (props) => (
    <View style={styles.listItem}>
        <Text>{props.placeName}</Text>
         <Icon name='trash' style={styles.iconContainer}  onPress={alert(props.placeName)}/>
    </View>
);

const styles = StyleSheet.create({
    listItem: {
    	flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        marginBottom: 5,
        padding: 10,
        backgroundColor: "#eee",
        borderColor: 'grey',
      borderWidth: 1,
      borderRadius: 5,
      justifyContent: 'space-between',
    },
    iconContainer:{
    	alignItems: 'flex-end',
    	color:'green',
    	backgroundColor:'transparent',
    }
});

export default ListItem;


 // <Icon name='trash' style={styles.iconContainer}/>