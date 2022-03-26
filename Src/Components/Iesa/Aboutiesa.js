import React from 'react';
import {TouchableOpacity,View,Text,SafeAreaView,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Header from '../../Header/Header';
import Styles from '../Styles';


const Aboutiesa=({navigation})=>{
    return(
        <SafeAreaView>
      
      <TouchableOpacity style={[Styles.container, Styles.shadowProp]} onPress={()=> navigation.navigate('AboutIesaoriginals')}>
      <View>
      <Image style={Styles.img}source={require('../../Aimage/drawable/about.png')}/>
      </View>
      <View>
      <Text style={Styles.text}> 
      About IESA
      </Text>
      </View>
      </TouchableOpacity>
      
     
    </SafeAreaView>


    );
}
export default Aboutiesa;