import React,{useEffect,useState} from 'react';

import { Text, View,FlatList,StyleSheet,TouchableOpacity,Image} from 'react-native'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Header/Header';

 function  Commitiesoriginal ({navigation}){

  const styles=StyleSheet.create({
    container:{
      width:wp('90%'),
      height:hp('8%'),
      backgroundColor:'#EFEFEF',
      justifyContent:'center',
      alignItems:'flex-start',
      margin:10

    },
    shadowProp: {
     shadowColor: '#171717',
     shadowOffset: {width: 5, height: 0},
    shadowOpacity: 0,
     shadowRadius: 8,
     elevation:0,
    }
  })

  const [data, setData] = useState([]);
  const getMovies = async () => {
     try {
      const response = await fetch('https://www.iesaconnect.com/admin/api/subcommitiesjson');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
  
    }
  }
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <SafeAreaView>
    <Header/>
    {/* for box we use this view*/}
<View style={[styles.container,styles.shadowProp]}>
{/* in order to align the item in center*/}
<View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
{/*here we create a white circle and also apply touchable opactiy*/}
<TouchableOpacity style={{width:30,height:30,borderRadius:50,backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:10}} onPress={() => navigation.goBack()}>

<Image  style={{resizeMode:'contain',width:wp('4%'),height:hp('4%'),tintColor:'green'}} source={require('../../Aimage/drawable/back.png')}/>

</TouchableOpacity>

<Text style={{color:'#278c42',fontSize:16,fontWeight:'bold',marginLeft:18,textAlign:'justify'}}>
{data.heading}
 </Text>
</View>
</View>
  <View style={{width:wp('100%'),height:hp('80%'),backgroundColor:'#efefef',justifyContent:'center',alignItems:'center'}}>
  <View style={{width:'90%',justifyContent:'center',alignItems:'center'}}>
  <FlatList
  data={data.data_new}
  renderItem={({ item,index }) => (
    <View style={{width:'auto',height:'auto',backgroundColor:'white',paddingVertical:10,paddingHorizontal:10,marginBottom:20}}>
          <View >
            <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>{item.heading}</Text>
          </View>
    {/*
      following part is not working as expected.
    */}
    <FlatList
  data={item.sub_committees}
  renderItem={({ item,index }) => (
    <View>
          <View >
            <Text style={{color:'green',fontSize:16,paddingTop:5}}>{item.title}</Text>
          </View>
    {/*
      following part is not working as expected.
    */}
     <FlatList
  data={item.des_data}
  renderItem={({ item,index }) => (
    <View>
          <View >
            <Text style={{color:'black',fontSize:13,}}>{item.sub_title}</Text>
          </View>
    {/*
      following part is not working as expected.
    */}
    </View>
  )}
  keyExtractor={(item, index) => index}
  />
    </View>
  )}
  keyExtractor={(item, index) => index}
  />
    </View>
  )}
  keyExtractor={(item, index) => index}
  />
  </View>
    </View>
    </SafeAreaView>
  );
};
export default Commitiesoriginal; 