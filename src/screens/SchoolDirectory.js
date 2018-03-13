import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Thumbnail, Text, Card, CardItem } from "native-base";

class SchoolDirectory extends React.Component {
  static navigationOptions = {
    title: 'SchoolDirectory',
  }

  render() {
    return (
      <View style={{ alignItems: 'center', justifyContent:'center'}} textStyle={{color:'black'}}>
        <Thumbnail square size={100} source={require('../images/schooldirectory.png')} />
        <Text style={{fontSize: 10, textAlign: 'center'}}>School{"\n"}Directory</Text>
      </View>
    );
  }
}

export default SchoolDirectory;
