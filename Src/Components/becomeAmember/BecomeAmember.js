import React from 'react';
import {Text,View,Image, SafeAreaView,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from '../Styles';

const BecomeAmember=({navigation})=>{
    return(  
        <SafeAreaView>
          
         <TouchableOpacity style={[Styles.container, Styles.shadowProp]} onPress={()=> navigation.navigate('BecomeAmemberoriginal')} > 
         
         <View style={{justifyContent:'center',alignContent:'center'}}> 
        <Image style={Styles.img}source={require('../../Aimage/drawable/becomemember.png')}/>
        </View>
        <View> 
        <Text style={Styles.text}>
        Become A member
        </Text>
        </View>
        </TouchableOpacity>
      
       
      
  </SafeAreaView>

    );
}
export default BecomeAmember;