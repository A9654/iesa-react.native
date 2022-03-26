import React, { Component } from 'react'
import { Text, View ,Image, TouchableOpacity,ScrollView,StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Unorderedlist from 'react-native-unordered-list';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Header/Header';

function AboutIesaoriginals ({navigation}){
  const styles=StyleSheet.create({
     container:{
      width:wp('90%'),
      height:hp('8%'),
      backgroundColor:'#EFEFEF',
      justifyContent:'center',
      alignItems:'flex-start',
      marginTop:5,
      

     },
     shadowProp: {
      shadowColor: '#171717',
      shadowOffset: {width: 5, height: 0},
     shadowOpacity:.25,
      shadowRadius: 8,
      elevation:0,
     }
})
  
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
       WHAT IS IESA
       </Text>

      </View>
     </View>
     <ScrollView style={{backgroundColor:'#F5F5F5'}}>
    
     <View >
     <Text style={{fontSize:14,color:'black',padding:20,textAlign:'justify'}}>IESA- Indian Exibitions, Conferences & Events Services Association - initiated its endeavor of value creation for Indian Exhibitions, Conventions, Conferences Industry in April 2013. The association has come forward as a National Apex body, representing service providers in Exhibitions and events.
     
     </Text>
    
     <Text style={{fontSize:14,color:'black',marginHorizontal:20,textAlign:'justify'}}>
     It came formally in play in the year 2014 and within a short span of time had in its fold – 340+ members. It is committed to contribute significantly by playing a catalytic role in shaping up the Trade, Commerce and Industrial environment of the country.IESA promotes cooperation among all areas of the exhibition industry and is dedicated to the advancement of the exhibition, meetings and special events industries. Education, Training and Developing competitive Business Skills will be one of its foremost focus and priority. 
     {'\n'}
     </Text>
     <Text style={{fontSize:14,color:'black',marginHorizontal:20,textAlign:'justify'}}>
     The vision is to raise the standards of services in this segment. Information exchange and level of professionalism shared by members and their customers. This association for firms engaged in providing services and materials for the meetings, exhibition and hospitality industry:
     {'\n'}
     </Text>
      <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10}}> Trade Shows & Exhibitions</Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10}}> Conventions & Meetings</Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10}}>Corporate Meetings & Events</Text>
     </View>
     </View>
     <Text style={{fontSize:14,color:'black',marginHorizontal:20,textAlign:'justify'}}>
     There are four broad sets of circumstances in which it was appropriate to establish a new trade association in Indian Exibitions, Conferences & Events Service Sector
     </Text>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginTop:20}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1}}> 
     The sector needs immediate implementation of codes and standards to ensure safe and aesthetic products and services.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,marginTop:20}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1}}> 
     The existing trade associations do not fully address the problems and issues related to the service providers.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1}}> 
     Exhibitions and Events is yet not as recognized industry sector resulting in no recognition to the service providers
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:20,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1}}> 
     Exhibition and Event Service providers needs a National Umbrella to safeguard their interest.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:20,marginBottom:10}}>
     <View>
     <Image  style={{width:wp('10%'),height:hp('10%'),resizeMode:'contain'}}source={require('../../Aimage/drawable/shapepic.png')}/>
     </View> 
     <Text style={{fontSize:hp('2.5%'),fontWeight:'bold',color:'green',marginLeft:10}}> Why IESA</Text>
     </View>
    
     <Text style={{fontSize:14,color:'black',marginHorizontal:20,textAlign:'justify'}}>
     There are four broad sets of circumstances in which it was appropriate to establish a new trade association in Indian Exibitions, Conferences & Events Service Sector
     {'\n'}
     </Text>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:20,marginBottom:10}}>
     <View>
     <Image  style={{width:wp('10%'),height:hp('10%'),resizeMode:'contain'}}source={require('../../Aimage/drawable/shapepic.png')}/>
     </View> 
     <Text style={{fontSize:hp('2.5%'),color:'green',marginLeft:10}}> Initiative </Text>
     </View>
    
     <Text style={{fontSize:14,color:'black',marginHorizontal:20,textAlign:'justify'}}>
     UA group of 10 Event Services Providers being representatives of the Industry during April 2013 took this bold step to form an Association.
     {'\n'}
     </Text>
     <Text style={{fontSize:hp('2.5%'),color:'green',marginLeft:10,marginBottom:20}}> IESA Objectives
     </Text>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     Express the views of Event, Exhibition and Conference Services Companies to Government departments, Parliament, Trade Commission, ITPO and other relevant organizations.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To research, aggregate, analysis, publish statistics on Event Services Sector and other relevant market information.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To be a center providing commentary, guidance and advice on all legal and other regulatory developments of relevance to Event Services Sector
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To provide a forum for the exchange of non-competitive information.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To promote the Event, Exhibition and Conferences Service Sector. To create safe working conditions for all employees in the industry.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To work closely with other associations for getting event and exhibition sector an industry status.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To collaborate with International Associations for betterment of Indian EEC Services sector
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To open offices in major metros - New Delhi, Mumbai, Bangalore, Hyderabad, and Kolkata
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To organize international exhibitions, conferences, and event services showcasing products and capacity available with IESA members, for growth of the industry.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To hold events, seminars and training programs for IESA members and their employees.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To build and run exhibition venues in partnership with privately held and government owned event Venues.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To set up a training institute for Event, Exhibitions and Conference Sector.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:10,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}>
     To initiate CSR activities for employees of the industry and the society at large.
     </Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',marginHorizontal:30,marginBottom:200,}}>
     <View style={{width:10,height:10,borderRadius:50,backgroundColor:'green'}}>
     </View>
     <Text style={{fontSize:14,color:'black',marginLeft:10,letterSpacing:1,}}> 
     To ultimately create a business environment conducive to wealth creation for all members, which will spur the industry to greater heights.
     </Text>
     </View>
   
    
     </ScrollView>
      </SafeAreaView>
    );
}

export default AboutIesaoriginals;
