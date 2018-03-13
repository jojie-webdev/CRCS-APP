import React from "react";
import { StatusBar, View } from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Button, Title, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";
import * as firebase from 'firebase';

//About Components
import Mission from "../about-components/Mission";
import Vision from "../about-components/Vision";

// Initialize another app
const purposeApp = firebase.initializeApp({
  databaseURL: "https://crcs-1064.firebaseio.com",
  storageBucket: "crcs-1064.appspot.com"
}, "purposeApp");

export default class PurposeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.missionRef = this.getMissionRef();
    this.visionRef = this.getMissionRef();
    this.state = {
      mission: [],
      vision: []
    }
  }

  //Get Mission Reference
  getMissionRef() {
    return purposeApp.database().ref('mission');
  }

  //Get Mission Reference
  getVisionRef() {
    return purposeApp.database().ref('vision');
  }

  componentDidMount() {
    // start listening for firebase updates
    this.listenForVision(this.visionRef);
    this.listenForMission(this.missionRef);
   }

   //listener to get mission data from firebase
  listenForMission(missionRef) {
    // console.log(1)
    missionRef.once('value').then((snapshot) => {
      // console.log(snapshot.val())
      var childData = [];
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.key;
        mission = childSnapshot.val();
        // console.log(vision);
      });

      //Set mission to new mission
      this.setState({
        mission:mission
      });
    });
  }

  //listener to get vision data from firebase
 listenForVision(visionRef) {
   // console.log(1)
   visionRef.once('value').then((snapshot) => {
    //  console.log(snapshot.val())
    var childData = [];
    snapshot.forEach(function(childSnapshot) {
      var childKey = childSnapshot.key;
      vision = childSnapshot.val();
      // console.log(vision);
    });

    //Set vision to new vision
    this.setState({
      vision:vision
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
            <Body style={{flex: 3}}>
              <Title style={{color: '#fff'}}>PURPOSE OF CRCS</Title>
            </Body>
            <Right />
        </Header>
        <Content padder style={{margin: 10}}>
          <Mission passedVal={this.state.mission} />
          <Vision passedVal={this.state.vision} />
        </Content>
      </Container>
    );
  }
}
