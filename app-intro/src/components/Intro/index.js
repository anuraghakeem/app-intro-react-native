import React from 'react';
import LottieView from 'lottie-react-native';
import {
  Container,
  IntroText,
  IntroTitle,
  AnimationView,
  DescriptionView,
} from './styledComponents';
const Intro = ({ sourceOfAnimation, title, body }) => (
  <Container>
    <AnimationView>
    <LottieView
      source={sourceOfAnimation}
      autoPlay
      style={{ width: 180, height: 180 }}
      resizeMode="cover"
    />
    </AnimationView>
    <DescriptionView>
      <IntroTitle>{title}</IntroTitle>
      <IntroText>{body}</IntroText>
    </DescriptionView>
  </Container>
);
export default Intro;