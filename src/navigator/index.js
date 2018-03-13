import React, { Component } from "react";
import { View, StyleSheet, Button, Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Title, Left, Icon, Right, ListItem, Body, Thumbnail, Content,Text, Card, CardItem } from "native-base";

import About from "../screens/About";
import CrusaderNews from "../screens/CrusaderNews";
import Emergency from "../screens/Emergency";
import Events from "../screens/Events";
import SendSickNote from "../screens/SendSickNote";
import NewsLetter from "../screens/NewsLetter";
import SchoolDirectory from "../screens/SchoolDirectory";
import SocialMedia from "../screens/SocialMedia";

export default class MainNavigator extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    title: null,
    header: null
  });

  render() {
    return (
      <Container style={styles.container}>
        <View style={{ backgroundColor: '#1F195C', width: 340, alignItems:'center', paddingBottom: 40, paddingTop: 80}}>
          <Image style={styles.canvas} resizeMode="contain" source={require('../images/CRCS.png')} style={{paddingBottom: 25, width: 221, height: 206}} />
        </View>
        <Content padder style={styles.mainContent}>
          <Grid style={styles.grid_1}>
            <Col onPress={() => this.props.navigation.navigate("Emergency")} title="button"><Emergency /></Col>
            <Col onPress={() => this.props.navigation.navigate("About")} title="button"><About /></Col>
            <Col onPress={() => this.props.navigation.navigate("Events")} title="button"><Events /></Col>
            <Col onPress={() => this.props.navigation.navigate("CrusaderNews")} title="button"><CrusaderNews /></Col>
          </Grid>
          <Grid style={styles.grid_2}>
            <Col onPress={() => this.props.navigation.navigate("SendSickNote")} title="button"><SendSickNote /></Col>
            <Col onPress={() => this.props.navigation.navigate("NewsLetter")} title="button"><NewsLetter /></Col>
            <Col onPress={() => this.props.navigation.navigate("SchoolDirectory")} title="button"><SchoolDirectory /></Col>
            <Col onPress={() => this.props.navigation.navigate("SocialMedia")} title="button"><SocialMedia /></Col>
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
  }

});
