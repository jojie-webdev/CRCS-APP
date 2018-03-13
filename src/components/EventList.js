import React from "react";
import { View,
        FlatList,
        ListView,
        Image,
        StyleSheet
      } from "react-native";
import { Container, Header, Title, Button, Left, Icon, Right, Body, Thumbnail, List, ListItem, Content,Text, Card, CardItem } from "native-base";

export default class EventList extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: null,
    header: null
  });

  render() {
    return (
      <List>
        <ListItem  last style={{borderBottomWidth: 1}}>
          <Left>
            <Icon  size={100} style={{flex: 1, textAlign: 'left'}} large name="calendar" />
          </Left>
          <Text style={{flex: 7 }}>
            <Text style={styles.nameTitle}>{this.props.events.name}</Text>
            {'\n'}
            <Text  note style={{ fontSize: 12 }}>{this.props.events.updated_at}</Text>
          </Text>
        </ListItem>
      </List>
    );
  }
}

const styles = StyleSheet.create({
  nameTitle: {
    color: '#1F195C'
  }
});
