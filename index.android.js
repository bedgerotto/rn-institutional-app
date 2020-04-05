/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Navigator } from 'react-native-deprecated-custom-components';

import MainScene from './src/components/main_scene';
import CustomerScene from './src/components/customer_scene';
import ContactScene from './src/components/contact_scene';
import CompanyScene from './src/components/company_scene';
import ServiceScene from './src/components/service_scene';

export default class InstitutionalApp extends Component {
  render() {
    return (
      <Navigator
      initialRoute={{ id: 'main' }}
      renderScene={(route, navigator) => {
        switch (route.id) {
          case 'main':
            return (<MainScene navigator={navigator} />);
          case 'customer':
            return (<CustomerScene navigator={navigator} />);
          case 'contact':
            return (<ContactScene navigator={navigator} />);
          case 'company':
            return (<CompanyScene navigator={navigator} />);
          case 'service':
            return (<ServiceScene navigator={navigator} />);
          default:
            return false;
        }
      }}
      />
    );
  }
}

AppRegistry.registerComponent('InstitutionalApp', () => InstitutionalApp);
