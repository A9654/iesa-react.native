import React from 'react';
import {Text,View,ScrollView,Image,SafeAreaView,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from '../Styles';

const Contact=({navigation})=>{
    return(  
        <SafeAreaView>
     
    
      <TouchableOpacity style={[Styles.container, Styles.shadowProp]} onPress={()=> navigation.navigate('Contactoriginal')}>
      <View>
        <Image style={Styles.img} source={require('../../Aimage/drawable/contact.png')}/>
        </View>
        <View>
        <Text style={Styles.text}>
        Contact 
        </Text>
        </View>
      
        </TouchableOpacity>
   
    
        </SafeAreaView>

    );
}
export default Contact;