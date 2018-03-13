import React from "react";
import { StatusBar, View, Alert } from "react-native";
import { Container, Header, Form, Fab, Title, Item, Label, Input, Button, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";
import { Buffer } from 'buffer'
var mailgun = require('mailgun.js');


var mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || 'key-9ffe1aecbac40b331e438229bc44cf44',
  public_key: process.env.MAILGUN_PUBLIC_KEY || 'pubkey-102d139bc8b83a4399741861861a520b'
});


export default class SendSickNoteContent extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        parentName: '',
        reason: '',
        childrenAffected: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.parentName);
  //   mg.messages.create('sandbox-123.mailgun.org', {
  //   from: "Excited User <jjagonos@binaryideas.com>",
  //   to: ["jjagonos@binaryideas.com"],
  //   subject: "Hello",
  //   message: "test"
  // })
  // .then(msg => console.log(msg)) // logs response data
  // .catch(err => console.log(err)); // logs any error

  }

  static navigationOptions = ({ navigation }) => ({
    title: null,
    header: null
  });

  sendForm() {
    Alert.alert("Sending ...");
  }


  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#1F195C'}}>
          <Left style={{flex: 1}}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: '#fff'}} />
            </Button>
          </Left>
          <Body style={{flex: 2}}>
            <Title style={{color: '#fff'}}>SICK NOTE</Title>
          </Body>
          <Right  style={{flex: 1}}>
              <Icon name="paper-plane" style={{color: '#fff'}} onPress={(e) => this.onSubmit(e)} />
          </Right>
        </Header>
        <Content padder>
          <Form>
            <Item last>
              <Input
                name="firstName"
                placeholder="Parent Name"
                onChangeText={(parentName) => this.setState({parentName})}
                value={this.state.parentName}
              />
            </Item>
            <Item floatingLabel last>
              <Input
                name="reason"
                placeholder="Reason"
                onChangeText={(reason) => this.setState({reason})}
                value={this.state.reason}
              />
            </Item>
            <Item floatingLabel last>
              <Input
                name="childrenAffected"
                placeholder="Children Affected"
                onChangeText={(childrenAffected) => this.setState({childrenAffected})}
                value={this.state.childrenAffected}
              />
            </Item>
          </Form>
        </Content>
        <Fab direction="right" position="bottomRight" style={{backgroundColor: '#1F195C'}}>
          <Text><Icon name="ios-people-outline" style={{color: '#fff'}} /></Text>
        </Fab>
      </Container>

    );
  }
  }
