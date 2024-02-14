import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

const reanimatedHome = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false);
  
  const animatedStyle = useAnimatedStyle(() => {
       return{transform:[{translateY:animation.value}]}
    // return{transform:[{rotate:`${animation.value}deg`}]}
    //  return {transform: [{scale: animation.value}]};
  });
  useEffect(() => {
    animation.value = withSpring(100);
  }, [animation]);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'violet',
          },
          animatedStyle,
        ]}></Animated.View>

      <TouchableOpacity
        onPress={() => {
          if (clicked) {
            animation.value = withSpring(100);
          } else {
            animation.value = withSpring(-100);
          }
          setClicked(!clicked);
        }}>
        <Text>click here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default reanimatedHome;

const styles = StyleSheet.create({});
