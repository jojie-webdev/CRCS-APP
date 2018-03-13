import React from "react";
import { StatusBar, View, ListView, FlatList } from "react-native";
import { Container, Header, Button, Title, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text} from "native-base";

//CRUSADER NEWS LIST
import CrusaderNewsList from "./CrusaderNewsList";

export default class CrusaderNewsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsCrusaderSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    }
    // console.log(this.state.newsSource)
  }

  componentDidMount() {

    this.fetchData();

  }//END componentDidMount

  //FETCH DATA FROM API
  fetchData = async () => {
    const url = `http://admin.crcs.org/api/v1/news`;
    try {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'X-Authorization': 'john@fcf782d3add6932a19c7fbe4216ac8570cd'
        },
        mode: 'no-cors'
      });
      let responseJson = await response.json();
      this.setState({
        newsCrusaderSource:this.state.newsCrusaderSource.cloneWithRows(responseJson)
      })
    } catch (error) {
      console.error(error);
    }
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
              <Title style={{color: '#fff'}}>CRUSADER NEWS</Title>
            </Body>
            <Right />
        </Header>
        <Content>
          <ListView
            dataSource={this.state.newsCrusaderSource}
            renderRow={this.renderRow.bind(this)}
          />
        </Content>
      </Container>

    );
  }

  //RENDER THE NEWS
  renderRow(rowCrusaderNews) {
    // console.log(rowCrusaderNews);
    let items = rowCrusaderNews;
    return (
      <View>
        {
          items.map(item =>
              <CrusaderNewsList key={item.id} newsCrusader={item} />
          )
        }
      </View>

    );
  }

}
