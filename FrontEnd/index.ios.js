'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Navigator
} from 'react-native';
import Pages from './Pages.js'

export default class TritonAthletics extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Pages/>
    );
  }
}
AppRegistry.registerComponent('TritonAthletics', () => TritonAthletics);
