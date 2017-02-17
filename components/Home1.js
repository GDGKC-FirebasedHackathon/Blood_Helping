import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, ListItem } from 'native-base';
import firebaseApp from './Firebase'
export default class Home1 extends Component{
    constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }
  _back(){
    firebaseApp.auth().signOut().then(function() {
      // Sign-out successful.
      Actions.Home()
    }, function(error) {
      // An error happened.
    });
  }

  _signout(){
    firebaseApp.auth().signOut().then(function() {
      // Sign-out successful.
      Actions.pop()
    }, function(error) {
      // An error happened.
    });
  }
  render() {
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.emailVerified);
      }
    });
    return (
        <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={this._back.bind(this)}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title><Text>헌혈 나눔글쓰기</Text></Title>
                    </Body>
                    <Right/>

                </Header>

                <Content>
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                value={this.state.text}
                />
                <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                value={this.state.text2}
                />
                </Content>
                <Footer>
                  <FooterTab>
                    <Button full onPress={this._addItem.bind(this)}>
                      <Text>올리기</Text>
                    </Button>
                  </FooterTab>
                </Footer>

            </Container>
    )
  }

  _addItem() {
        Actions.Home()
        this.itemsRef.push({ title: "text" })

    }

}
