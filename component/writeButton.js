import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
const styles = require('../styles.js')

export default class WriteButton extends Component {
    render(){
        return(
            <TouchableOpacity style={styles.writeButton}>
                <Text style={styles.writeButtonText}>글쓰기</Text>
            </TouchableOpacity>
        )
    }
}
