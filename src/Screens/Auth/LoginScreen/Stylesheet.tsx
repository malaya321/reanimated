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
        //  transform: [{ rotate: '90deg'}],
        height:height/1.7,
        width:'100%',
        borderBottomLeftRadius:55,
        borderBottomRightRadius:55
        // marginTop:-130,
    },
    loginheadertext:{
        // position:'absolute',
        // zIndex:999,
        alignSelf:'center',
        // top:'9%',
        alignItems:'center',
        marginTop:20
    },
    logintext:{
        color:'#702963',
        fontSize:12,
        marginTop:5
        
    },
    logintextheader:{
        color:'#702963',
        fontSize:23,
        fontWeight:'500'
    },
    loginbox: {
        position: 'absolute',
        zIndex: 999,
        backgroundColor: 'white',
        width: '90%',
       
        borderRadius:20,
        alignSelf: 'center',
        top: '30%',
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
        // width:'100%',
        alignSelf:'center',
        margin:'10%'
      },
      labletext:{
        fontSize:12,
        color:'#702963'
      },
      gotosignuptext:{
       marginTop:10,
       alignItems:'flex-end'
      }


})