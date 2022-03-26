import React, { useState,useEffect } from 'react';
import { ActivityIndicator, Button, Platform,StatusBar, StyleSheet,Text,View,ScrollView,DrawerLayoutAndroid ,Dimensions} from 'react-native';
import Header from '../Header/Header';
import Article from '../Article/Article';
import Aboutiesa from '../Components/Iesa/Aboutiesa';
import OfficeBearer from '../Components/Officebearers/OfficeBearers';
import Commities from '../Components/commities/Commities';
import Secretraiat from '../Components/secretraiat/Secretraiat';
import Member from '../Components/memeber/Members';
import Activites from '../Components/activites/Activites';
import Newsletter from '../Components/newsletter/Newsletter';
import Contact from '../Components/contact/Contact';
import BecomeAmember from '../Components/becomeAmember/BecomeAmember';
import Footer from '../footer/Footer';
import Styles from '../Components/Styles';
import Splash from './Menu/splashScreen/Splash';




const Home=({navigation})=>{
  
  const [loading,setLoading] = useState(true);
  const{width,height} =Dimensions.get('window')




  useEffect(() =>{
    setTimeout(() =>{
      setLoading(false)
    
    },9000);
  })
  return(
<View style={{flex:1}}>
{
  loading ? 
  <Splash/>
   :
   
    <View>
    <Header navigation={navigation}/>
   <ScrollView>
    <Article navigation={navigation} />
   
   
    <View style={[Styles.container2,Styles.componentbackground]}>
    <Aboutiesa navigation={navigation}/>
    <OfficeBearer navigation={navigation}/>
    <Commities navigation={navigation}/>
    <Secretraiat navigation={navigation}/>
    <Member navigation={navigation}/>
    <Activites navigation={navigation}/>
    <Newsletter navigation={navigation}/>
    <Contact navigation={navigation}/>
    <BecomeAmember navigation={navigation}/>
    
    </View>
    <Footer/>
    <View style={{backgroundColor:'#F5F5F5',height:100,width:100}}></View>
    </ScrollView> 
    
    </View>
}


</View>
  )
};

export default Home;