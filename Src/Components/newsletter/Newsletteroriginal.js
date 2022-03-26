import React,{useState,useEffect} from 'react'
import {View,Text,TouchableOpacity,Image,ActivityIndicator,StyleSheet} from 'react-native';
import { WebView } from 'react-native-webview'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../Header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';


function Newsletteroriginal({navigation}) {
  const [state, setState]= useState('');
  const[loading,setLoding]=useState(true);
  useEffect(() =>{
  let isMounted = true;
    if(isMounted){
    getApicdata();
    }
    return () =>{

      isMounted=false;
    }
  },[]);
  async function getApicdata() {
    fetch('https://www.iesaconnect.com/admin/api/newsletterjson')
    .then(response => response.json())
    .then(json =>{
      setState(json);
      setLoding(false);
    }).catch(error=>{console.log(error)})
  }

  return(
    <SafeAreaView>
    <Header/>
    <View style={{width:'100%',height:'100%'}}>
    
    
    <View style={[styles.container,styles.shadowProp]}>
    {/* in order to align the item in center*/}
    <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
    {/*here we create a white circle and also apply touchable opactiy*/}
    <TouchableOpacity style={{width:30,height:30,borderRadius:50,backgroundColor:'white',flexDirection:'row',justifyContent:'center',alignItems:'center',marginLeft:30}} onPress={() => navigation.goBack()}>

    <Image  style={{resizeMode:'contain',width:wp('4%'),height:hp('4%'),tintColor:'green'}} source={require('../../Aimage/drawable/back.png')}/>

    </TouchableOpacity>

    <Text style={{color:'#278c42',fontSize:16,fontWeight:'bold',marginLeft:18,textAlign:'justify'}}>
     {state.heading}
     </Text>

    </View>
   </View>
       
       {loading ? <ActivityIndicator size="small" color="#0000ff" /> :  
       <WebView source={{uri:state.url}}/>}
       </View>
    
  
    </SafeAreaView>
  );
  }
  const styles=StyleSheet.create({
    container:{
     width:wp('90%'),
     height:hp('7%'),
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
  
export default Newsletteroriginal ;
