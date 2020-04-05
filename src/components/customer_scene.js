import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import Navbar from './navbar';

const customerDetail = require('../img/detalhe_cliente.png');
const customer1 = require('../img/cliente1.png');
const customer2 = require('../img/cliente2.png');

export default class CustomerScene extends Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor='#B9C941' />
        <Navbar navigator={this.props.navigator} customColor='#B9C941' />

        <View style={style.header}>
          <Image source={customerDetail} />
          <Text style={style.customerMainText}>Nossos clientes</Text>
        </View>
        <View style={style.customerSection}>
          <Image source={customer1} />
          <Text style={style.customerText}>Lorem Ipsum</Text>
        </View>
        <View style={style.customerSection}>
          <Image source={customer2} />
          <Text style={style.customerText}>Lorem Ipsum</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
  },
  customerMainText: {
    fontSize: 30,
    color: '#B9C941',
    marginTop: 20,
    marginLeft: 10
  },
  customerSection: {
    marginTop: 20,
    padding: 20
  },
  customerText: {
    marginLeft: 20,
    fontSize: 18
  }
});

