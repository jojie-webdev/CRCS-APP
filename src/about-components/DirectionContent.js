import React from "react";
import { StatusBar, View, StyleSheet } from "react-native";
import { Container, Header, Title, Button, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text, Card, CardItem } from "native-base";
import MapView from 'react-native-maps';

export default class DirectionContent extends React.Component {
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
            <Title style={{color: '#fff'}}>DIRECTIONS</Title>
          </Body>
          <Right />
        </Header>

        <View style={styles.container} >
          <MapView style={styles.map}
            region={{
              latitude:38.768673,
              longitude:-77.153877,
              latitudeDelta:0.1,
              longitudeDelta:0.1
            }}
          >
            <MapView.Marker
            coordinate={{
              latitude:38.768673,
              longitude:-77.153877
            }}
            title= {'Calvary Road Christian School & Preschool'}
            description={"description"}
            />
          </MapView>
        </View>
      </Container>

    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    marginTop: 1.5,
    ...StyleSheet.absoluteFillObject,
  },
});
