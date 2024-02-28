import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import CustomLoader from '../../Components/CustomLoader';

const reanimatedHome = () => {
  const animation = useSharedValue(0);
  const [clicked, setClicked] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{translateY: animation.value}]};
    // return{transform:[{rotate:`${animation.value}deg`}]}
    //  return {transform: [{scale: animation.value}]};
  });
  useEffect(() => {
    animation.value = withSpring(100);
  }, [animation]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {loading ? (
        <CustomLoader size="large" color="#FF6347" />
      ) : (
        <View>
          <Text>Hii</Text>
        </View>
      )}
    </View>
  );
};

export default reanimatedHome;

const styles = StyleSheet.create({});
