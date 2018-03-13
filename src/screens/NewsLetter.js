import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Thumbnail, Text, Card, CardItem } from "native-base";

class NewsLetter extends React.Component {
  static navigationOptions = {
    title: 'NewsLetter',
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent:'center'}} textStyle={{color:'black'}}>
        <Thumbnail square size={100} source={require('../images/newsletter.png')} />
        <Text style={{fontSize: 10}}>NewsLetter</Text>
      </View>
    );
  }
}

export default NewsLetter;
