import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
const styles = require('../styles.js')

export default class Notice extends Component {
    render(){
        return(
            <View style={styles.notice}>
                <Text>공지</Text>
            </View>
        )
    }
}
