import React from "react";
import { View,
        FlatList,
        ListView,
        Image,
        StyleSheet
      } from "react-native";
import { Container, Header, Title, Button, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";

export default class NewsLetterList extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: null,
    header: null
  });

  render() {
    return (
      <View>
        <Text style={{ color: '#333333', fontSize: 12, lineHeight: 17,paddingBottom: 5 }}>
          {`\u2022 ${this.props.news.title}`}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  listItemBullet: {
    paddingRight: 10,
  },

  listItemContent: {
    width: 0,
    flexGrow: 1,
  },
});
