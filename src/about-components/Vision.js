import React from "react";
import { View,
        FlatList,
        ListView,
        Image
      } from "react-native";
import { Container, Header, Title, Button, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";

export default class Vision extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: null,
    header: null
  });

  render() {
    return (
      <View>
        <Thumbnail square size={100} source={require('../images/dummy_img.png')} style={{height: 130, width: null, flex: 1}}/>
        <Text style={{ color: '#1F195C', paddingTop: 10, paddingBottom: 5}}>Vision Statement</Text>
        <Text style={{ color: '#333333', fontSize: 12, lineHeight: 17 }}>{this.props.passedVal}</Text>
      </View>
    );
  }
}
