import React from "react";
import { StatusBar, View, ListView, FlatList } from "react-native";
import { Container, Header, Button, Title, Left, Icon, Right, Body, Thumbnail, ListItem, Content,Text} from "native-base";

//NEWS LETTER LIST
import NewsLetterList from "./NewsLetterList";

export default class NewsLetterContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newsSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
    }
    // console.log(this.state.newsSource)
  }

  componentDidMount() {

    this.fetchData();

  }//END componentDidMount

  //FETCH DATA FROM API
  fetchData = async () => {
    const url = `http://admin.crcs.org/api/v1/newsletter`;
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
        newsSource:this.state.newsSource.cloneWithRows(responseJson)
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
              <Title style={{color: '#fff'}}>NEWSLETTER</Title>
            </Body>
            <Right />
        </Header>
        <Content padder>
          <View  style={{ alignItems: 'center', justifyContent:'center'}} textStyle={{color:'black'}} >
          <ListView
            dataSource={this.state.newsSource}
            renderRow={this.renderRow.bind(this)}
          />
          </View>
        </Content>
      </Container>

    );
  }

  //RENDER THE NEWS
  renderRow(rowNews) {
    console.log(rowNews);
    let items = rowNews;
    return (
      <View>
        {
          items.map(item =>
              <NewsLetterList key={item.id} news={item} />
          )
        }
      </View>

    );
  }

}
