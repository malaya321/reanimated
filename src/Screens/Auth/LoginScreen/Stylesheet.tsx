import { StyleSheet, Text, View,Dimensions,Platform } from 'react-native'

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    logincontainer:{
      flex:1,
      backgroundColor:"white",
      position:'relative'

    },
    tophalfcontainer:{
        // backgroundColor:'#3057B4',
        backgroundColor:'#702963',
        // height:'60%',
         transform: [{ rotate: '40deg'}],
        height:height/2*1.4,
        width:'200%',
        marginTop:-140,

    },
    loginheadertext:{
        position:'absolute',
        zIndex:999,
        alignSelf:'center',
        top:'9%',
        alignItems:'center'
       
    },
    logintext:{
        color:'white',
        fontSize:12,
        marginTop:5
        
    },
    logintextheader:{
        color:'white',
        fontSize:23,
        fontWeight:'400'
    },
    loginbox: {
        position: 'absolute',
        zIndex: 999,
        backgroundColor: 'white',
        width: '90%',
        height: '55%',
        borderRadius:20,
        alignSelf: 'center',
        top: '10%',
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          },
          android: {
            elevation: 4,
          },
        }),
      },
      innerloginbox:{
        // backgroundColor:'red',
        width:'90%',
        alignSelf:'center',
        margin:'10%'
      },
      labletext:{
        fontSize:12,
        color:'#702963'
      }


})