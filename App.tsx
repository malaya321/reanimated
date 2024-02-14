import {StyleSheet, View} from 'react-native';
import React from 'react';
import ReanimatedHome from './src/Screens/HomeScreen';
import MyStack from './src/Routes/RootNavigator';

const App: React.FC = () => {
  return <MyStack />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
