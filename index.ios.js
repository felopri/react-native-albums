/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create the component
const App = () => (
  <Text>Some text</Text>
);

//Redent it to the device
AppRegistry.registerComponent('albums', () => App);
