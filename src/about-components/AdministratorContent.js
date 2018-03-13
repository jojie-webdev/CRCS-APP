import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Header, Button, Title, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";
const firebase = require('firebase');

// Initialize another app
const adminApp = firebase.initializeApp({
  databaseURL: "https://crcs-1064.firebaseio.com",
  storageBucket: "crcs-1064.appspot.com"
}, "adminApp");

export default class AdministratorContent extends React.Component {
  constructor(props) {
    super(props);
    this.adminRef = this.getAdminRef();
    this.state = {
      admin: []
    }
  }

  // //Get Administrator Reference
  getAdminRef() {
    return adminApp.database().ref('admin-welcome');
  }

  componentDidMount() {
    // start listening for firebase updates
    this.listenForAdmin(this.adminRef);
  }

  //listener to get Administrator data from firebase
  listenForAdmin(adminRef) {
   // console.log(1)
   adminRef.orderByKey().limitToFirst(1).once('value').then((snapshot) => {
     // console.log(snapshot.val())
     var childData = [];
     snapshot.forEach(function(childSnapshot) {
       var childKey = childSnapshot.key;
       admin = childSnapshot.val();
      //  console.log(admin);
     });

     //Set Administrator to new Administrator
     this.setState({
       admin:admin
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
              <Title style={{color: '#fff'}}>ADMINISTRATOR{"'S"} WELCOME</Title>
            </Body>
            <Right />
        </Header>
        <Content padder style={{ margin: 10}}>
          <View  style={{ alignItems: 'center', justifyContent:'center',paddingBottom: 5}} >
            <Thumbnail square size={100} source={require('../images/admin.png')} style={{ height: 150, width: 150, flex: 1}}/>
            <Text style={{ color: '#333333', fontSize: 12, lineHeight: 17,paddingTop: 10, paddingBottom: 5 }}>{this.state.admin}</Text>
          </View>
        </Content>
      </Container>

    );
  }

}
