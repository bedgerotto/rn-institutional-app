import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StatusBar,
  StyleSheet
} from 'react-native';

import NavBar from './navbar';

const companyDetails = require('../img/detalhe_empresa.png');

export default class CompanyScene extends Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#EC7148" />
        <NavBar navigator={this.props.navigator} customColor='#EC7148' />

        <View style={style.header}>
          <Image source={companyDetails} />
          <Text style={style.companyMainText}>A Empresa</Text>
        </View>

        <View style={style.detalheContatos}>
          <Text style={style.textContact}>Lorem ipsum empresa bacanuda bem legal</Text>
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
  navigationStyle: {
    backgroundColor: '#EC7148',
    padding: 10,
    height: 60
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
  },
  companyMainText: {
    fontSize: 30,
    color: '#EC7148',
    marginTop: 20,
    marginLeft: 10
  },
  detalheContatos: {
    padding: 20,
    marginTop: 20
  },
  textCompany: {
    fontSize: 18
  }
});
