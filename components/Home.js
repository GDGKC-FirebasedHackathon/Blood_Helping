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
export default class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
      email: ''
    }
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
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title><Text>헌혈 게시글</Text></Title>
                    </Body>
                    <Right>
                    <Button transparent>
                        <Icon name='add' />
                    </Button>
                    </Right>
                </Header>

                <Content>
                <ListItem>
                    <Text>경륜이를 도와주세요!</Text>
                </ListItem>
                <ListItem>
                    <Text>언제</Text>
                </ListItem>
                <ListItem>
                    <Text>완성하지?</Text>
                </ListItem>

                </Content>
            </Container>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    padding:10
  },
  login : {
    justifyContent:'center',
    alignItems: 'stretch',
    height: 40,
    marginTop:20,
    backgroundColor:'#DDDFD3',
    padding:10
  },
  button: {
    justifyContent:'center',
    alignItems: 'center',
      backgroundColor:'#5FBD31',
      height: 40,
      marginTop:20,

  },
  btntext: {
    color:'#fff'
  }
})
