import React,{useEffect,useState} from "react";
import { View,Image, ScrollView ,Text,SafeAreaView, FlatList, TouchableOpacity,Dimensions,StyleSheet} from "react-native";
import WebView from "react-native-webview";
 const Article=({navigation})=>{
  const [state, setState]= useState('');
  const{width,height} =Dimensions.get('window');
  
    useEffect(() =>{
      getApicdata();
    },[]);
    async function getApicdata() {
      fetch('https://www.iesaconnect.com/admin/api/bannerjson')
      .then(response => response.json())
      .then(json =>{
        console.log(json)
       setState(json);
    
      }).catch(error=>{console.log(error)})
    }
 
    const renderItem = ({item}) =>(
      <TouchableOpacity
      onPress={()=> navigation.navigate('Iesa7',
     { url_b:item.url_b})}
      >
      <View style={{height:height/3.8,width:width,justifyContent:'center',alignItems:'center',backgroundColor:'#EFEFEF',}}>
      <Image style={{width:width,height:height/3}} 
      source={{
        uri: item.image_b
      }}
      />
      
      
      </View>
      </TouchableOpacity>
    )
     return(
     <SafeAreaView>
     <View style={{padding:6,backgroundColor:'#F5F5F5'}}>
     <View style={{}}>
     <Text style={{fontSize:24,color:'#278c42',paddingTop:25}}>
    Hello Anit
     </Text>
     </View>
     <View style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}>
    
    <Text style={{fontSize:16,paddingBottom:10}}>
    Welcome Have a Good Day </Text>
  
     <TouchableOpacity style={{padding:5,borderRadius:50,backgroundColor:'#0d65e0',marginRight:20,bottom:18}} onPress={()=> navigation.navigate('Search')}>
     <Image style={{width:22,height:22,tintColor:'white'}} source={require('../Aimage/drawable/search.png')}/>
     
     </TouchableOpacity>
   
     </View>
     <FlatList
     horizontal={true}
     data={state.banner_data}
     renderItem={renderItem}
     />
     </View>
     
     </SafeAreaView>


   
          );
        }

        const styles = StyleSheet.create({
         
          indicator: {
            height: 2.5,
            width: 10,
            backgroundColor: 'grey',
            marginHorizontal: 3,
            borderRadius: 2,
          },
        
        });


export default Article;
// import React,{useState,useEffect} from 'react';
// import {View,Text,TouchableOpacity,Image, FlatList} from 'react-native';
// import Header from '../../Src/Header/Header';

// const Article=()=>{

//   const [state, setState]= useState('');
  
//   useEffect(() =>{
//     getApicdata();
//   },[]);
//   async function getApicdata() {
//     fetch('https://www.iesaconnect.com/json/banner/banner.json')
//     .then(response => response.json())
//     .then(json =>{
//       console.log(json)
//      // setState(json);
  
//     }).catch(error=>{console.log(error)})
//   }

// return (
//   <View>
//   <FlatList
//   horizontal
//   data={state.banner_data}
//   renderItem={
//     (item,index) =>{
//       <View>
//       <Image style={{width:200,height:25}} source={{uri:item.image_b}}/>
   
//       </View>
//      }
//   }
//   />
//   </View>
// )
// }

// export default Article;
