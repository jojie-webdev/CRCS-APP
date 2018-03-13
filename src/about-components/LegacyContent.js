import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Header, Button, Title, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";
import * as firebase from 'firebase';

// Initialize another app
const legacyApp = firebase.initializeApp({
  databaseURL: "https://crcs-1064.firebaseio.com",
  storageBucket: "crcs-1064.appspot.com"
}, "legacyApp");

export default class LegacyContent extends React.Component {
  constructor(props) {
    super(props);
    this.legacyRef = this.getLegacyRef();
    this.state = {
      legacy: []
    }
  }

  // //Get Legacy Reference
  getLegacyRef() {
    return legacyApp.database().ref('legacy');
  }

  componentDidMount() {
    // start listening for firebase updates
    this.listenForLegacy(this.legacyRef);
  }

  //listener to get Legacy data from firebase
  listenForLegacy(legacyRef) {
   // console.log(1)
   legacyRef.once('value').then((snapshot) => {
     // console.log(snapshot.val())
     var childData = [];
     snapshot.forEach(function(childSnapshot) {
       var childKey = childSnapshot.key;
       legacy = childSnapshot.val();
      //  console.log(legacy);
     });

     //Set Legacy to new Legacy
     this.setState({
       legacy:legacy
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
            <Body style={{flex: 2}}>
              <Title style={{color: '#fff'}}>LEGACY OF CRCS</Title>
            </Body>
            <Right />
        </Header>
        <Content padder style={{ margin: 10}}>
          <View  style={{ alignItems: 'center', justifyContent:'center'}} textStyle={{color:'black'}} >
            <Thumbnail square size={100} source={require('../images/dummy_img.png')} style={{height: 130, width: 280, flex: 1}}/>
            <Text style={{ color: '#333333', fontSize: 12, lineHeight: 17,paddingTop: 10, paddingBottom: 5 }}>{this.state.legacy}</Text>
          </View>
        </Content>
      </Container>

    );
  }
}
