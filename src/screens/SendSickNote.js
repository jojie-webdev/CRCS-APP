import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Thumbnail, Text, Card, CardItem } from "native-base";

class SendSickNote extends React.Component {
  static navigationOptions = {
    title: 'SendSickNote',
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent:'center'}} textStyle={{color:'black'}}>
        <Thumbnail square size={100} source={require('../images/sendsicknote.png')} />
        <Text style={{fontSize: 10, textAlign: 'center'}}>Send Sick{"\n"}Note</Text>
      </View>
    );
  }
}

export default SendSickNote;
