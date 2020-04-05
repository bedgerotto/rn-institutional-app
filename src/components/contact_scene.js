import React, { Component } from 'react';
import {
  Image,
  Text,
  View,
  StatusBar,
  StyleSheet
} from 'react-native';

import NavBar from './navbar';

const contactDetails = require('../img/detalhe_contato.png');

export default class CustommerScene extends Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#61BD8C" />
        <NavBar navigator={this.props.navigator} customColor='#61BD8C' />

        <View style={style.header}>
          <Image source={contactDetails} />
          <Text style={style.contactMainText}>Contato</Text>
        </View>

        <View style={style.contactDetails}>
          <Text style={style.textContact}>TEL: (11) 1234-1234</Text>
          <Text>CEL: (11) 1234-1234</Text>
          <Text>EMAIL: contato@atmconsultoria.com</Text>
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
    backgroundColor: '#61BD8C',
    padding: 10,
    height: 60
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
  },
  contactMainText: {
    fontSize: 30,
    color: '#61BD8C',
    marginTop: 20,
    marginLeft: 10
  },
  contactDetails: {
    padding: 20,
    marginTop: 20
  },
  textContact: {
    fontSize: 18
  }
});
