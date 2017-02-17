import React, { Component } from 'react';
import {
  Touch
  Text,
  View
} from 'react-native';
const styles = require('../styles.js')

export default class ListItem extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            dataSource: ds.cloneWithRows([]),
        };
    }
    _renderItem(){
        return(
            <ListItem item=
        )
    }
    render(){
        return(
            <View style={styles.boardList}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }
}
