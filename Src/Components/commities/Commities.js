import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {Text,View,Image,SafeAreaView,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from '../Styles';

const Commities=({navigation})=>{
    return(
        <SafeAreaView>
     
        
        <TouchableOpacity style={[Styles.container, Styles.shadowProp]} onPress={() =>navigation.navigate('Commitiesoriginal')}>
        <View >
        <Image style={Styles.img} source={require('../../Aimage/drawable/member.png')} />
        </View>
        <View>
        <Text style={Styles.text}>
        Commities
        </Text>
        </View>
     
        </TouchableOpacity>
       
        
        </SafeAreaView>

    );
}
export default Commities;