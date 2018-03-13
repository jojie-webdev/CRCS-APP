import React from "react";
import {
  Notifications,
} from 'expo';
import { StatusBar, View, ListView } from "react-native";
import { Container, Header, Button, Title, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";

//EMERGENCY LIST
import EmergencyList from "./EmergencyList";

export default class EmergencyContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emergencySource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    }
  }

  componentDidMount() {

    //FETCH DATA FROM API
    const url = `http://admin.crcs.org/api/v1/notifications`;
    fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'X-Authorization': 'john@fcf782d3add6932a19c7fbe4216ac8570cd'
      },
      mode: 'no-cors'
    })
    .then((response) =>
		    {
		    	if(response.ok) {
		    		return response.json();
		    	}else{
		    		throw new Error('BAD HTTP');
		    	}
	    })
	    .then( (res) =>{
        this.setState({
          emergencySource:this.state.emergencySource.cloneWithRows(res)
        });
	    })
	    .catch( (err) =>{
	    	console.log('ERROR:', err.message);
	    });
  }

  static navigationOptions = ({ navigation }) => ({
    title: null,
    header: null
  });

  render() {
    // console.log(this.state.newsSource);
    return (
      <Container>
        <Header style={{backgroundColor: '#1F195C'}}>
            <Left style={{flex: 1}}>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" style={{color: '#fff'}} />
              </Button>
            </Left>
            <Body style={{flex: 2}}>
              <Title style={{color: '#fff'}}>EMERGENCY</Title>
            </Body>
            <Right />
        </Header>
        <Content>
          <ListView
            dataSource={this.state.emergencySource}
            renderRow={this.renderRow.bind(this)}
          />
        </Content>
      </Container>

    );
  }

  //RENDER THE EMERGENCY
  renderRow(rowEmergency) {
    // console.log(rowEmergency);
    let items = rowEmergency;
    return (
      <View>
        {
          items.map(item =>
              <EmergencyList key={item.id} emergency={item} />
          )
        }
      </View>

    );
  }

}
