import React from 'react';
import {SafeAreaView,View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles=StyleSheet.create({
    logo:{
        width:wp('27%'),
        height:hp('10%'),
        resizeMode:'contain'
    },
    container:{
        display:'flex',
        flexDirection:'row',
        paddingLeft:20,
        backgroundColor:'white',
        height:hp('9')
    },
    img:{ 
        width:wp('6%'),
        height:hp('6%'),
        tintColor:'#0076BE',
        resizeMode:'contain'
    },
   
    imgbox1:{
        paddingLeft:80,
        marginTop:26,
        marginRight:2,
        marginLeft:10,
    },
    imgbox2:{
        paddingLeft:35,
        marginTop:18,
        marginLeft:5,

        
    },
    imgbox3:{
        paddingLeft:15,
        marginLeft:10,
        marginTop:18,
        marginRight:30,

    }
    

})


const Header =({navigation})=>{
    return(
        <SafeAreaView>
        <View style={styles.container}>
        
        <View>
        <Image style={styles.logo}source={require('../Aimage/drawable/log.png')}/>
        </View>
        <TouchableOpacity style={styles.imgbox1} onPress ={()=> navigation.navigate('Market')}>
        <Image style={{width:wp('8.2%'),height:hp('4%'),tintColor:'#0076BE',}}source={require('../Aimage/drawable/certificate.png')}/>
        </TouchableOpacity>
        <View style={styles.imgbox2}>
        <Image style={styles.img}source={require('../Aimage/drawable/alarm.png')}/>
        </View>
        <TouchableOpacity style={styles.imgbox3} onPress={() => navigation.openDrawer()} >
        <Image style={styles.img}source={require('../Aimage/drawable/menu.png')}/>
    </TouchableOpacity>
        </View>
    
        </SafeAreaView>
    )

}
export default Header;