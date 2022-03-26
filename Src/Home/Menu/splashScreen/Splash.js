import React,{Component} from 'react';
import {View,Text,Image,Dimensions, SafeAreaView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const {width,height} =Dimensions.get('window')

const Splash=()=>{
return (
    <View style={{flex:1,backgroundColor:'white'}}>
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'flex-end'}}>
    <Text style={{fontSize:10,color:'black',paddingTop:10,paddingRight:10}}> 
    Version:1.0
    </Text>
    </View>
    <View style={{flex:1}}>
    <Image  style={{alignSelf : 'center', resizeMode:'contain' ,width: 200, height: 100}} source={require('../../../Aimage/drawable/splashgif.gif') }/>
    <Text style={{fontSize:14,color:'black',textAlign:'center'}}> 
    Indian Exhibitions,Conferences &</Text>
    <Text style={{fontSize:14,color:'black',textAlign:'center'}}>Events Services Association (IESA)</Text>
    </View>
    <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',paddingVertical:10,fontSize:12,color:'black'}}>
    <Text>MADE WITH ❤️BY RAJMITH</Text>
    </View>
    
 

    

    </View>
);

}

export default Splash;
