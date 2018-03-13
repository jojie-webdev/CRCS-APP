import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator} from 'react-navigation';
import { Container } from "native-base";
import * as firebase from 'firebase';

//Main Navigator
import MainNavigator from './src/navigator/index';
import About from './src/screens/About';
import CrusaderNews from './src/screens/CrusaderNews';
import Emergency from './src/screens/Emergency';
import Events from './src/screens/Events';
import SendSickNote from './src/screens/SendSickNote';
import NewsLetter from './src/screens/NewsLetter';
import SchoolDirectory from './src/screens/SchoolDirectory';
import SocialMedia from './src/screens/SocialMedia';

//Components
import About_Content from './src/components/About_Content';
import CrusaderNewsContent from './src/components/CrusaderNewsContent';
import EmergencyContent from './src/components/EmergencyContent';
import EventsContent from './src/components/EventsContent';
import SendSickNoteContent from './src/components/SendSickNoteContent';
import NewsLetterContent from './src/components/NewsLetterContent';
import SchoolDirectoryContent from './src/components/SchoolDirectoryContent';
import SocialMediaContent from './src/components/SocialMediaContent';

//ABOUT SCREENS
import Legacy from './src/about-screens/Legacy';
import Direction from './src/about-screens/Direction';
import Purpose from './src/about-screens/Purpose';
import PurposeContent from './src/about-screens/PurposeContent';

//ABOUT components
import AdministratorContent from './src/about-components/AdministratorContent';
import LegacyContent from './src/about-components/LegacyContent';
import DirectionContent from './src/about-components/DirectionContent';
import StatementContent from './src/about-components/StatementContent';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <AppNavigator />
      </Container>
    );
  }
}

const AppNavigator = StackNavigator({
  MainNavigator: { screen: MainNavigator },
  CrusaderNews: { screen: CrusaderNewsContent },
  About: { screen: About_Content },
  Events: { screen: EventsContent },
  Emergency: { screen: EmergencyContent },
  SendSickNote: { screen: SendSickNoteContent },
  NewsLetter: { screen: NewsLetterContent },
  SchoolDirectory: { screen: SchoolDirectoryContent },
  SocialMedia: { screen: SocialMediaContent },

  //About Navigator
  AdministratorContent: { screen: AdministratorContent },
  LegacyContent: { screen: LegacyContent },
  DirectionContent: { screen: DirectionContent },
  PurposeContent: { screen: PurposeContent },
  StatementContent: { screen: StatementContent },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
