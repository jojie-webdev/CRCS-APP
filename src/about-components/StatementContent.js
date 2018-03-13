import React from "react";
import { StatusBar, View, ListView } from "react-native";
import { Container, Header, Button, Title, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";
import * as firebase from 'firebase';

import StatementList from "./StatementList";

// Initialize another app
const statementApp = firebase.initializeApp({
  databaseURL: "https://crcs-1064.firebaseio.com",
  storageBucket: "crcs-1064.appspot.com"
}, "statementApp");

export default class StatementContent extends React.Component {
  constructor(props) {
    super(props);
    this.statementRef = this.getStatementRef();
    this.state = {
      statementSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    }
  }

  // //Get Statement Reference
  getStatementRef() {
    return statementApp.database().ref('statement-of-faith');
  }

  componentDidMount() {
    // start listening for firebase updates
    this.listenForStatement(this.statementRef);
  }

  //listener to get Statement data from firebase
  listenForStatement(statementRef) {
   // console.log(1)
     statementRef.on('value', (dataSnapshot) => {
         // console.log(dataSnapshot);
      var tasks = [];
      dataSnapshot.forEach((childSnapshot) => {
        tasks.push({
          _key : childSnapshot.key,
          statement: childSnapshot.val()
        });
        // console.log(tasks);
      });

     //Set Statement to new Statement
     this.setState({
       statementSource:this.state.statementSource.cloneWithRows(tasks)
     });
   });
  }

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
            <Body style={{flex: 10}}>
              <Title style={{color: '#fff'}}>STATEMENT OF FAITH</Title>
            </Body>
            <Right />
        </Header>
        <Content padder style={{ margin: 10}}>
          <View  style={{ alignItems: 'center', justifyContent:'center'}} textStyle={{color:'black'}} >
            <ListView
              dataSource={this.state.statementSource}
              renderRow={this.renderRow.bind(this)}
            />
          </View>
        </Content>
      </Container>
    );
  }

  //RENDER THE STATEMENT
  renderRow(rowStatement) {
    // console.log(rowStatement);
    return (
      <StatementList task={rowStatement} />
    );
  }

}
