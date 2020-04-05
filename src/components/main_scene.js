import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

import Navbar from './navbar';

const logo = require('../img/logo.png');
const customerImg = require('../img/menu_cliente.png');
const contactImg = require('../img/menu_contato.png');
const companyImg = require('../img/menu_empresa.png');
const serviceImg = require('../img/menu_servico.png');

export default class MainScene extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor='#CCC' />
        <Navbar hideBackButton customColor='#CCC' />

        <View style={style.logo}>
          <Image source={logo} />
        </View>
        <View style={style.navigationContainer}>
          <View style={style.navigationContainerRow}>
            <TouchableHighlight
              underlayColor={'#B9C941'}
              activeOpacity={0.3}
              onPress={() => this.props.navigator.push({ id: 'customer' })}
            >
              <Image source={customerImg} style={style.navigationItem} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'#61BD8C'}
              activeOpacity={0.3}
              onPress={() => this.props.navigator.push({ id: 'contact' })}
            >
              <Image source={contactImg} style={style.navigationItem} />
            </TouchableHighlight>
          </View>
          <View style={style.navigationContainerRow}>
            <TouchableHighlight
              underlayColor={'#EC7148'}
              activeOpacity={0.3}
              onPress={() => this.props.navigator.push({ id: 'company' })}
            >
              <Image source={companyImg} style={style.navigationItem} />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'#19D1C8'}
              activeOpacity={0.3}
              onPress={() => this.props.navigator.push({ id: 'service' })}
            >
              <Image source={serviceImg} style={style.navigationItem} />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  navigationContainer: {
    alignItems: 'center',
  },
  navigationContainerRow: {
    flexDirection: 'row'
  },
  navigationItem: {
    width: 115,
    height: 121,
    margin: 15
  }
});

