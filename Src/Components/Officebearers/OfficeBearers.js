import React from 'react';
import {Text,View,ScrollView,Image,SafeAreaView,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from '../Styles';

const OfficeBearer=({navigation})=>{
    return(  
        <SafeAreaView>
        
       
        
        <TouchableOpacity style={[Styles.container, Styles.shadowProp]} onPress={()=> navigation.navigate('Officebearersoriginal')}>
        <View>
        <Image style={Styles.img} source={require('../../Aimage/drawable/office.png')}/>
        </View>
        <View>
        <Text style={Styles.text}>
        Office Bearer
        </Text>
        </View>
        
        </TouchableOpacity>
        
      
        </SafeAreaView>

    );
}
export default OfficeBearer;