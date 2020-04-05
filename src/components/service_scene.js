import React, { Component } from 'react';
import {
  View,
  StatusBar,
  Image,
  Text,
  StyleSheet
} from 'react-native';

import Navbar from './navbar';

const serviceDetail = require('../img/detalhe_servico.png');

export default class ServiceScene extends Component {
  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor='#19D1C8' />
        <Navbar navigator={this.props.navigator} customColor='#19D1C8' />

        <View style={style.header}>
          <Image source={serviceDetail} />
          <Text style={style.serviceMainText}>Nossos Serviços</Text>
        </View>

        <View style={style.serviceDetails}>
          <Text setyle={style.textService}>. Consultoria</Text>
          <Text setyle={style.textService}>. Processos</Text>
          <Text setyle={style.textService}>. Acompanhamento de Projetos</Text>
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
    backgroundColor: '#19D1C8',
    padding: 10,
    height: 60
  },
  header: {
    flexDirection: 'row',
    marginTop: 20,
  },
  serviceMainText: {
    fontSize: 30,
    color: '#19D1C8',
    marginTop: 20,
    marginLeft: 10
  },
  serviceDetails: {
    padding: 20,
    marginTop: 20
  },
  textService: {
    fontSize: 18
  }
});

