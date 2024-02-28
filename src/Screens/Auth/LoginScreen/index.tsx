import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import CustomTextInput from '../../../Components/FormInputField';
import { styles } from './Stylesheet';
import AuthButton from '../../../Components/AuthButton';
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [widthvalue, setWidthvalue] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const animation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return { transform: [{ translateY: animation.value }] };
  });

  useEffect(() => {
    animation.value = withSpring(100);
  }, [animation]);
  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.10.223:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username,
          password: password,
        }),
      });
      console.log(response);
      

      if (response.ok) {
        const data = await response.json();
        // Handle successful login, such as storing tokens, navigating, etc.
        console.log('Login successful:', data);
      } else {
        // Handle error response
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.logincontainer}>
      <Animated.View style={[styles.loginbox, animatedStyles]}>
        <View style={styles.loginheadertext}>
          <Text style={styles.logintextheader}>Login</Text>
          <Text style={styles.logintext}>Please Login to continue</Text>
        </View>
        <View style={styles.innerloginbox}>
          <CustomTextInput
            placeholder="Enter Your Email"
            onChangeText={(text) => setUsername(text)}
            value={username}
            containerStyle={{ marginTop: 10, height: 50 }}
          />
          <CustomTextInput
            placeholder="Enter Your Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            containerStyle={{ marginTop: 10, height: 50 }}
          />
          <AuthButton
            title="Login"
            onPress={handleLogin}
            style={{ marginTop: 20 }} // Optional: Custom styles for the button
          />
          <Pressable style={styles.gotosignuptext} onPress={()=>{
            navigation.navigate("signUp");
          }}>
            <Text>don't have an account? sign up here!</Text>
          </Pressable>
        </View>
      </Animated.View>
      <View style={styles.tophalfcontainer}></View>
    </View>
  );
};

export default Login;
