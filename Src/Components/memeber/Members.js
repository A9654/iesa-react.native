import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text,View,SafeAreaView,Image,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Memberoriginal from './memberoriginal';
import Styles from '../Styles';


const Member=({navigation})=>{
    return(  
        <SafeAreaView>
       <TouchableOpacity style={[Styles.container, Styles.shadowProp]} onPress={()=> navigation.navigate('Memberoriginal')}>
        <View style={{justifyContent:'center',alignContent:'center'}}>
        <Image style={Styles.img}source={require('../../Aimage/drawable/participation.png')}/>
        </View>
        <View>
        <Text style={Styles.text}>
        Members 
        </Text>
        </View>
        </TouchableOpacity>
       
      
        </SafeAreaView>
    

    );
}
export default Member;