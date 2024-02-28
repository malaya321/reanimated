import { StyleSheet, Text, View,Dimensions,Platform } from 'react-native'

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    formContainer: {
      width: '100%',
    },
    input: {
      marginTop: 10,
      height: 50,
      width:'100%'
    },
    button: {
      marginTop: 20,
      width: '100%',
    },
  });
