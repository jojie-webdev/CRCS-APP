import React from "react";
import { StatusBar, View, Button } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";

export default class Direction extends React.Component {

  render() {
    return (
      <View  style={{ alignItems: 'center', justifyContent:'center'}} textStyle={{color:'black'}} >
        {<Thumbnail square size={100} source={require('../images/direction.png')}/>}
        <Text style={{fontSize: 10, textAlign: 'center'}}>Direction </Text>
      </View>
    );
  }
}
