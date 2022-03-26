import React,{component} from 'react';
import {View,Image,Text}from 'react-native';

var logo= require('../../IesaProject/Src/Aimage/drawable/splashgif.gif')
export default class Splashscreen extends component {
    constructor(props){
        super(props);
        setTimeout(()=>{this.props.navigation.navigate("Home")},10000);
    }
render()
    {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image source={logo}/>
            
            </View>

        );
     }

     }