import React from 'react'
import { Text, View ,Image, TouchableOpacity,ScrollView,StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Unorderedlist from 'react-native-unordered-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Header/Header';

function Contactoriginal ({navigation}) {
  
    return (
      <SafeAreaView>
        <Header/>
          {/* for box we use this view*/}
          <View style={[styles.container,styles.shadowProp]}>
          {/* in order to align the item in center*/}
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
          {/*here we create a white circle and also apply touchable opactiy*/}
          <TouchableOpacity style={{width:30,height:30,borderRadius:50,backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:30}} onPress={() => navigation.goBack()}>
      
          <Image  style={{resizeMode:'contain',width:wp('4%'),height:hp('4%'),tintColor:'green'}} source={require('../../Aimage/drawable/back.png')}/>
      
          </TouchableOpacity>
      
          <Text style={{color:'#278c42',fontSize:16,fontWeight:'bold',marginLeft:18,textAlign:'justify'}}>
           CONTACT DETAILS
           </Text>
      
          </View>
         </View>
     <View style={{width:'100%',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',padding:20,paddingHorizontal:30}}>
     <View>
     <Text style={{fontSize:hp('2.2%'),color:'black'}}>INDIAN EXHIBITIONS,</Text> 
     
     <Text style={{fontSize:hp('2.2%'),color:'black'}}>CONFERENCES & EVENTS </Text>
     <Text style={{fontSize:hp('2.2%'),color:'black',marginBottom:10}}>SERVICES ASSOCIATION (IESA)</Text>
     </View>
     <View style={{flexDirection:'row',justifyContent:'flex-start',alignContent:'center',paddingBottom:30}}>
     <View style={{width:wp('8%'),height:hp('14%'),backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
     <Image style={{width:wp('5%'),height:hp('8%'),resizeMode:'contain',tintColor:'white'}}source={require('../../Aimage/drawable/pin.png')}/>
     </View>
     <View style={{justifyContent:'center',alignSelf:'center',paddingHorizontal:10}}>
     <Text style={{color:'black',fontSize:hp('2%')}}>Regd.office: {'\n'}Vasisht House,{'\n'}7/3,Bagumpur,kalu Sarai,{'\n'} New Delhi -110017</Text>
     </View>
     </View>

     <View style={{flexDirection:'row',justifyContent:'flex-start',alignContent:'center',paddingBottom:30}}>
     <View style={{width:wp('8%'),height:hp('14%'),backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
     <Image style={{width:wp('5%'),height:hp('8%'),resizeMode:'contain',tintColor:'white'}}source={require('../../Aimage/drawable/call.png')}/>
     </View>
     <View style={{justifyContent:'center',alignSelf:'center',paddingHorizontal:10}}>
     <Text style={{color:'black',fontSize:hp('2%')}}>011-43052661 {'\n'}011-43052662{'\n'}011-43052662</Text>
     </View>
     </View>

     <View style={{flexDirection:'row',justifyContent:'flex-start',alignContent:'center',paddingBottom:30}}>
     <View style={{width:wp('8%'),height:hp('14%'),backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
     <Image style={{width:wp('5%'),height:hp('10%'),resizeMode:'contain',tintColor:'white'}}source={require('../../Aimage/drawable/email.png')}/>
     </View>
     <View style={{justifyContent:'center',alignSelf:'center',paddingHorizontal:10}}>
     <Text style={{color:'black',fontSize:hp('2%')}}>secretary@iesa.net.in</Text>
     </View>
     </View>
     </View>

        </SafeAreaView>


    )
  
}
const styles=StyleSheet.create({
  container:{
   width:wp('90%'),
   height:hp('8%'),
   backgroundColor:'#EFEFEF',
   justifyContent:'center',
   alignItems:'flex-start',
   margin:20

  },
  shadowProp: {
   shadowColor: '#171717',
   shadowOffset: {width: 5, height: 0},
  shadowOpacity: 0,
   shadowRadius: 8,
   elevation:0,
  }
})



export default Contactoriginal;
