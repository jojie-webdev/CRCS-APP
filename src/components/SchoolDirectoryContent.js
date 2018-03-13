import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import { Container, Header, Title, Button, Left, Icon, Right, Body, Thumbnail, List, ListItem, Content,Text, Card, CardItem } from "native-base";

export default class SchoolDirectoryContent extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: null,
    header: null
  });

  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#1F195C'}}>
          <Left style={{flex: 1}}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: '#fff'}} />
            </Button>
          </Left>
          <Body style={{flex: 3}}>
            <Title style={{color: '#fff'}}>SCHOOL DIRECTORY</Title>
          </Body>
          <Right />
        </Header>
        <Content >
          <List>
            <ListItem avatar last style={styles.container}>
              <Left>
                <Thumbnail square size={100} source={require('../images/avatar.png')} />
              </Left>
              <Body last style={styles.bodyBorder}>
                <Text style={styles.nameTitle}>Kevin Lewis</Text>
                <Text style={styles.jobTitle} note>President</Text>
              </Body>
              <Right style={styles.bodyBorder}>
                <Thumbnail small source={require('../images/message.png')} />
              </Right>
            </ListItem>

            <ListItem avatar last style={styles.container}>
              <Left>
                <Thumbnail square size={100} source={require('../images/avatar.png')} />
              </Left>
              <Body style={styles.bodyBorder}>
                <Text style={styles.nameTitle}>Kevin Lewis</Text>
                <Text style={styles.jobTitle} note>President</Text>
              </Body>
              <Right style={styles.bodyBorder}>
                <Thumbnail small  source={require('../images/message.png')} />
              </Right>
            </ListItem>

            <ListItem avatar last style={styles.container}>
              <Left>
                <Thumbnail square size={100} source={require('../images/avatar.png')} />
              </Left>
              <Body style={styles.bodyBorder}>
                <Text style={styles.nameTitle}>Kevin Lewis</Text>
                <Text style={styles.jobTitle} note>President</Text>
              </Body>
              <Right style={styles.bodyBorder}>
                <Thumbnail small source={require('../images/message.png')} />
              </Right>
            </ListItem>

            <ListItem avatar last style={styles.container}>
              <Left>
                <Thumbnail square size={100} source={require('../images/avatar.png')} />
              </Left>
              <Body style={styles.bodyBorder}>
                <Text style={styles.nameTitle}>Kevin Lewis</Text>
                <Text style={styles.jobTitle} note>President</Text>
              </Body>
              <Right style={styles.bodyBorder}>
                <Thumbnail small source={require('../images/message.png')} />
              </Right>
            </ListItem>

            <ListItem avatar last style={styles.container}>
              <Left>
                <Thumbnail square size={100} source={require('../images/avatar.png')} />
              </Left>
              <Body style={styles.bodyBorder}>
                <Text style={styles.nameTitle}>Kevin Lewis</Text>
                <Text style={styles.jobTitle} note>President</Text>
              </Body>
              <Right style={styles.bodyBorder}>
                <Thumbnail small source={require('../images/message.png')} />
              </Right>
            </ListItem>

            <ListItem avatar last style={styles.container}>
              <Left>
                <Thumbnail square size={100} source={require('../images/avatar.png')} />
              </Left>
              <Body style={styles.bodyBorder}>
                <Text style={styles.nameTitle}>Kevin Lewis</Text>
                <Text style={styles.jobTitle} note>President</Text>
              </Body>
              <Right style={styles.bodyBorder}>
                <Thumbnail small source={require('../images/message.png')} />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1
  },
  nameTitle: {
    color: '#1F195C'
  },
  jobTitle: {
    fontSize: 10,
    color: '#000'
  },
  bodyBorder: {
    borderBottomWidth: 0
  }

});
