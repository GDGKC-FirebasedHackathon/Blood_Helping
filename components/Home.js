import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  TextInput,
  ToolbarAndroid
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Item, Input, ListItem } from 'native-base';
import firebaseApp from './Firebase'
import FloatingActionButton from 'react-native-action-button';
export default class Home extends Component{
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

_add(){
  firebaseApp.auth().signOut().then(function() {
    // Sign-out successful.
    Actions.Home1()
  }, function(error) {
    // An error happened.
  });
}

_signout(){
  firebaseApp.auth().signOut().then(function() {
    // Sign-out successful.
    Actions.Login()
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
                    <Button transparent onPress={this._signout.bind(this)}>
                        <Icon name='arrow-back' />
                      </Button>
                    </Left>
                    <Body>
                        <Title><Text>헌혈 게시글</Text></Title>
                    </Body>
                    <Right>
                    <Button transparent onPress={this._add.bind(this)}>
                        <Icon name='add' />
                    </Button>
                    </Right>
                </Header>

                <Content>
                <View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                    />
                </View>

                </Content>
            </Container>


    )
  }
  renderRow(rowData){
      return(
          <View style={styles.listContainer}>
              <View style={styles.textContainer}>
                  <Text style={styles.textBase, styles.title}>{rowData.title}</Text>
              </View>
              <View style={styles.textContainer}>
                  <Text style={styles.textBase, styles.content}>{rowData.content}</Text>
              </View>
          </View>
      )
  }

}



/*<View style={styles.container}>
    <ToolbarAndroid
  style={styles.navbar}
  title="Todo List" />

<ListView
  dataSource={this.state.dataSource}
  enableEmptySections={true}
  renderRow={this._renderItem.bind(this)}
  style={styles.listView}/>
<TextInput
   value={this.state.newTask}
   style={styles.textEdit}
   onChangeText={(text) => this.setState({newTask: text})}
   placeholder="New Task"
 />
<FloatingActionButton
  hideShadow={true}
  buttonColor="rgba(231,76,60,1)"
  onPress={this._addTask.bind(this)}/>
</View>*/
