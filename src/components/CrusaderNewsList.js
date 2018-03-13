import React from "react";
import { View,
        FlatList,
        ListView,
        Image,
        StyleSheet
      } from "react-native";
import { Container, Header, Title, Button, Left, Icon, Right, Body, Thumbnail, List, ListItem, Content,Text, Card, CardItem } from "native-base";

export default class CrusaderNewsList extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: null,
    header: null
  });

  render() {
    return (
      <List>
        <ListItem  last style={{borderBottomWidth: 1}}>
          <Text>
           <Text style={{ color: '#1F195C' }}>{this.props.newsCrusader.title}</Text>
           {'\n'}
           <Text  style={{ color: '#333333', fontSize: 12, lineHeight: 17,paddingBottom: 5}}>{this.props.newsCrusader.content}</Text>
          </Text>
        </ListItem>
      </List>
    );
  }
}

const styles = StyleSheet.create({

});
