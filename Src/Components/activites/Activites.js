import React from 'react';
import {Text,View,Image,SafeAreaView,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from '../Styles';
import styles from '../Styles';

const Activites=({navigation})=>{
    return(  
        <SafeAreaView>
    
        <TouchableOpacity style={[Styles.container, Styles.shadowProp]} onPress={()=> navigation.navigate('Activitiesoriginal')} >
            
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <Image style={Styles.img}source={require('../../Aimage/drawable/gallery.png')}/>
        </View>
        <View>
        <Text style={Styles.text}>
        Activites
        
        </Text>
        </View>
        </TouchableOpacity>
        
      
        </SafeAreaView>

    );
}
export default Activites;