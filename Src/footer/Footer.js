import React from 'react';
import {TouchableOpacity,View,Text,SafeAreaView,Image,ImageBackground} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Footer=()=>{
 return( 
    <SafeAreaView>
   <View style={{flex:1,padding:10,justifyContent:'center',alignItems:'center'}}>
   <TouchableOpacity  style={{
    width:wp('87%'),
    height:hp('10%'),
    border:5,
    backgroundColor:'#0d65e0',
    shadowColor: '#171717',
    shadowOffset: {width: 5, height: 8},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation:5,
  
}}>
 <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',paddingHorizontal:25,flex:1}}>

 <Image style={{
    width:wp('9%'),
    height:hp('5%'),
    marginTop:10,
    tintColor:'white',
    padding:12
}}source={require('../Aimage/drawable/recruitment.png')}/>


<Text style={{fontSize:13,fontWeight:'bold',color:'white',padding:10,margin:5,flex:2}}>
  Explore Potential Business Opportunities And Get Connected
</Text> 

 

</View>

   </TouchableOpacity>
   
   </View>
     <View>
     <View>
    <ImageBackground style={{width:'100%',paddingVertical:10}} resizeMode="contain" source={require('../Aimage/drawable/background.png')}>
  <View>
  <View style={{display:'flex',justifyContent:'center',flexDirection:'row',alignItem:'center',paddingHorizontal:50,}}>
  <View style={{width:'12%',justifyContent:'center',alignItems:'center'}}>
  <Text style={{height:1.2,width:'100%',backgroundColor:'#000'}}>
  </Text>
  </View>
  <View style={{width:'70%',justifyContent:'center',alignItems:'center'}}>
  <Text style={{fontSize:hp('2.5%'),color:'#000'}}>International Partners</Text>
  </View>
  <View style={{width:'12%',justifyContent:'center',alignItems:'center'}}>
  <Text style={{height:1.2,width:'100%',backgroundColor:'#000'}}></Text>
  </View>
 </View>
 <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
 <Image style={{width:wp('40%'),height:hp('9%'),resizeMode:'contain'}} source={require('../Aimage/drawable/p_1.png')} />
 <Image style={{width:wp('40%'),height:hp('9%'), resizeMode:'contain'}}source={require('../Aimage/drawable/p_2.jpg')}/>
  </View>

  </View>
  <View style={{paddingVertical:23}}></View>
    </ImageBackground>

</View>
   
    
  </View>
</SafeAreaView>

    );
}
export default Footer;
