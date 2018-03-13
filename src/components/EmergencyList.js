import React from "react";
import { View,
        FlatList,
        ListView,
        Image,
        StyleSheet
      } from "react-native";
import { Container, Header, Title, Button, Left, Icon, Right, Body, Thumbnail, List, ListItem, Content,Text, Card, CardItem } from "native-base";

export default class EmergencyList extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: null,
    header: null
  });

  render() {
    return (
      <List>
        <ListItem  last style={{borderBottomWidth: 1}}>
          <Text>
           <Text style={{ color: '#1F195C' }}>{this.props.emergency.title}</Text>
           {'\n'}
           <Text style={styles.message}>{this.props.emergency.message}</Text>
           {'\n'}
           <Text  style={styles.message} style={{fontSize: 10}}>{this.props.emergency.time}</Text>
          </Text>
        </ListItem>
      </List>
    );
  }
}

const styles = StyleSheet.create({
  message: {
     color: '#333333',
     fontSize: 12,
     lineHeight: 17,
     paddingBottom: 5
  }
});
