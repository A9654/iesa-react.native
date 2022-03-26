import React from 'react';
import {Text,View,Image, SafeAreaView,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from '../Styles';
import styles from '../Styles';

const Newsletter=({navigation})=>{
    return(  
          <SafeAreaView>
        
      
      <TouchableOpacity style={[Styles.container, Styles.shadowProp]} onPress={()=> navigation.navigate('Newsletteroriginal')}>
      <View>
        <Image style={Styles.img}source={require('../../Aimage/drawable/newsletter.png')}/>
        </View>
        <View >
        <Text style={Styles.text}>
        Newsletter
        </Text>
        </View>
      
        </TouchableOpacity>
      
     
    
        </SafeAreaView>

    );
}
export default Newsletter;