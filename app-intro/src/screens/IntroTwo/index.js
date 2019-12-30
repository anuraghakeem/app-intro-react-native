import React from 'react';
import { Intro } from '../../components';

const animation = require('../../animations/awareness.json');

// import { View, Text, StyleSheet } from 'react-native';
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const IntroTwo = () => (
  <Intro
  sourceOfAnimation={animation}
  title="Title Two"
  body="Lorem Ipsum 2"
/>
);
export default IntroTwo;