import React, { useRef, useEffect } from 'react';
import { View, StyleSheet, Image, Text, Animated, Easing } from 'react-native';
import aricon from '../assets/images/swiperImage/aricon.png';

const SplashScreen = () => {
  const rotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startRotationAnimation();
  }, []);

  const startRotationAnimation = () => {
    Animated.loop(
      Animated.timing(rotationValue, {
        toValue: 1,
        duration: 800, // Adjust the duration of the animation as needed
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const rotateInterpolate = rotationValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const animatedStyles = {
    transform: [{ rotate: rotateInterpolate }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LearnAR</Text>
      <Animated.Image
        source={aricon}
        style={[styles.image, animatedStyles]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
});

export default SplashScreen;
