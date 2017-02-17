import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
import TempContent from './TempContent.js'
const styles = require('../styles.js')
export default class boardList extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            dataSource: ds.cloneWithRows(TempContent),
        };
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
    render(){
        return(
            <View style={styles.boardList}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}
