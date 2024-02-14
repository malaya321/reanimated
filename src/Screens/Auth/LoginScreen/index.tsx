import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './Stylesheet';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Login = () => {
  const animation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{translateY: animation.value}]};
  });
  useEffect(() => {
    animation.value = withSpring(100);
  }, [animation]);

  return (
    <View style={styles.logincontainer}>
      <View style={styles.loginheadertext}>
        <Text style={styles.logintextheader}>Login</Text>
        <Text style={styles.logintext}>Please Login to continue</Text>  
      </View>
      <Animated.View style={[styles.loginbox, animatedStyle]}>
        <View style={styles.innerloginbox}>
         <Text style={styles.labletext}>Email Address</Text>
        </View>
      </Animated.View>

      <View style={styles.tophalfcontainer}></View>
    </View>
  );
};

export default Login;
