import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Thumbnail, Text, Card, CardItem } from "native-base";

class SocialMedia extends React.Component {
  static navigationOptions = {
    title: 'SocialMedia',
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent:'center'}} textStyle={{color:'black'}}>
        <Thumbnail square size={100} source={require('../images/socialmedia.png')} />
        <Text style={{fontSize: 10}}>SocialMedia</Text>
      </View>
    );
  }
}

export default SocialMedia;
