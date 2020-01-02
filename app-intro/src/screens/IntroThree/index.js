import React from 'react';
import { Intro } from '../../components';

const animation = require('../../animations/map.json');

// import { View, Text, StyleSheet } from 'react-native';
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
const IntroThree = () => (
  <Intro
  sourceOfAnimation={animation}
  title="Title Three"
  body="Lorem Ipsum 3"
/>
);
export default IntroThree;