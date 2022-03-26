import React, { useEffect, useState } from 'react';
import {View,Text,TouchableOpacity,Image, ActivityIndicator} from 'react-native';
import { WebView } from 'react-native-webview'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../Header/Header';


function Iesa7 ({ route, navigation }){
   
  console.log(route.params)

    return(
        <View>
        <Header/>
      <View style={{width:'100%',height:'100%'}}>
      <WebView  source={{uri:route.params.url_b}}/>
      </View>
        </View>


    )

}
export default Iesa7;