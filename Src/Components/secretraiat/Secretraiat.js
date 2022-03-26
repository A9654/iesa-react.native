import React from 'react';
import {TouchableOpacity,View,Text,SafeAreaView,StyleSheet,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from '../Styles';
import styles from '../Styles';

const Secretraiat=({navigation})=>{
    return(
        <SafeAreaView>
       
        
        <TouchableOpacity style={[Styles.container, Styles.shadowProp]} onPress={()=> navigation.navigate('Secretraiatoriginal')}>
        <View>
        <Image style={Styles.img}source={require('../../Aimage/drawable/help.png')}/>
        </View>
        <View>
        <Text style={Styles.text}>
         Secretraiat
        </Text>
        </View>
        </TouchableOpacity>
        
        
      </SafeAreaView>

    );
}
export default Secretraiat;