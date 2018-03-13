import React from "react";
import { StatusBar, View, StyleSheet, Picker, AppState } from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Title, Button, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";

export default class SendSickNoteContent extends React.Component {
  constructor(props) {
    super(props);

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
    this.state = {
      seconds: 5,
    };
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if(appState === 'background') {
      //TODO: Schedule background notification
      console.log('app is in background', this.state.seconds);
    }
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
          <Title style={{color: '#fff'}}>SOCIAL MEDIA</Title>
        </Body>
        <Right />
        </Header>
        <Content style={{ marginTop: 30 }}>
          <Grid style={styles.grid_1}>
            <Col style={styles.centerIcon}><Thumbnail square size={100} source={require('../images/notification.png')} /></Col>
            <Col style={styles.centerIcon}><Thumbnail square size={100} source={require('../images/facebook.png')} /></Col>
            <Col style={styles.centerIcon}><Thumbnail square size={100} source={require('../images/twitter.png')} /></Col>
          </Grid>
          <Picker
            style={styles.picker}
            selectedValue={this.state.seconds}
            onValueChange={(seconds) => this.setState({seconds})}
          >
            <Picker.Item label="5" value={5} style={{ borderBottomWith: 1 }}/>
            <Picker.Item label="10" value={10} />
            <Picker.Item label="15" value={15} />
          </Picker>
        </Content>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto'
  },
  grid_1: {
    paddingBottom: 10,
  },
  centerIcon: {
    alignItems:'center',
    margin:'auto'
  },
  picker: {
    width: 100
  }

});
