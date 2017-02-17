import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
const styles = require('../styles.js')

export default class TabMenu extends Component {
    render(){
        return(
            <View style={styles.tab}>
                <Text>탭메뉴</Text>
            </View>
        )
    }
}
