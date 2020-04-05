import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';

const backButton = require('../img/btn_voltar.png');

export default class Navbar extends Component {
  render() {
    return (
      <View style={[styles.navbar, { backgroundColor: this.props.customColor }]}>
        <View style={styles.titleBar}>
          { !this.props.hideBackButton ? 
            <TouchableHighlight
              underlayColor={this.props.customColor}
              activeOpacity={0.3}
              onPress={() => { this.props.navigator.pop(); }}
            >
              <Image style={styles.backButton} source={backButton} />
            </TouchableHighlight> : null }
          <Text style={styles.title}>ATM Consultoria</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#CCC',
    padding: 10,
    height: 60
  },
  titleBar: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    color: '#000'
  },
  backButton: {
    width: 40,
  }
});
