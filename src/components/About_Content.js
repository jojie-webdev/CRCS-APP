import React from "react";
import { StatusBar, StyleSheet, View, Image } from "react-native";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Title,Button, Icon, Left, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";

//About Screens
import Administator from "../about-screens/Administrator";
import Legacy from "../about-screens/Legacy";
import Statement from "../about-screens/Statement";
import Purpose from "../about-screens/Purpose";
import Direction from "../about-screens/Direction";
import Call from "../about-screens/Call";

//About Contents
import PurposeContent from "../about-screens/PurposeContent";

export default class About_Content extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: null,
    header: null
  });

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{backgroundColor: '#1F195C', shadowColor: 'transparent', borderBottomWidth: 0}}>
          <Left style={{flex: 1}}>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{color: '#fff'}} />
            </Button>
          </Left>
          <Body style={{flex: 2}}>
            <Title style={{color: '#fff', borderBottomWidth: 0}}>ABOUT</Title>
          </Body>
          <Right />
        </Header>
        <View style={{ backgroundColor: '#1F195C', alignItems:'center', width: 340,  paddingBottom: 40}}>
          <Image style={styles.canvas} resizeMode="contain" source={require('../images/CRCS.png')} style={{paddingBottom: 25, width: 221, height: 206}} />
        </View>
        <Content padder style={styles.mainContent}>
          <Grid style={styles.grid_1}>
            <Col onPress={() => this.props.navigation.navigate("AdministratorContent")}><Administator /></Col>
            <Col onPress={() => this.props.navigation.navigate("LegacyContent")}><Legacy /></Col>
            <Col onPress={() => this.props.navigation.navigate("StatementContent")}><Statement /></Col>
          </Grid>
          <Grid style={styles.grid_1}>
            <Col onPress={() => this.props.navigation.navigate("PurposeContent")}><Purpose /></Col>
            <Col onPress={() => this.props.navigation.navigate("DirectionContent")}><Direction /></Col>
            <Col><Call /></Col>
          </Grid>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 'auto',
    backgroundColor: '#FBB03A',
  },
  title_container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
  },
  canvas: {
    position: 'absolute',
    backgroundColor: 'blue',
    margin: 0,
    top: 0,
    left: 0,
    right: 0
  },
  mainContent: {
    backgroundColor: '#FFFFFF',
    marginTop: 25,
  },
  grid_1: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  grid_2: {
    paddingBottom: 25,
  },

});
