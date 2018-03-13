import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Thumbnail, Text, Card, CardItem } from "native-base";

class Emergency extends React.Component {
  static navigationOptions = {
    title: 'Emergency',
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent:'center'}} textStyle={{color:'black'}}>
        <Thumbnail square size={100} source={require('../images/emergency.png')} />
        <Text style={{fontSize: 10}}>Emergency</Text>
      </View>
    );
  }
}

export default Emergency;
