import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Header/Header';

import Styles from '../Styles';
const styles = StyleSheet.create({
    container: {
     
         
        width: '90%',
        height: 'auto',
        backgroundColor: 'white',
        marginHorizontal: 20,
        padding:10,
        margin:10,
        
      
        overflow:'hidden'


    },
    container1:{
        width: '90%',
         height: hp('8%'),
          backgroundColor: '#EFEFEF', 
          justifyContent: 'center', 
          alignItems: 'flex-start',
         marginHorizontal: 20
    
      },
    componentview: {
        width: '70%',
        padding: 10,
        backgroundColor: 'white'

    },

    image: {
        width: 15,
        height: 15,
        tintColor: 'green'

    },
    imagecomponet: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',



    },
    urlbox: {
        width: 110,
        height: 110,
        borderRadius: 100,
        borderColor: 'blue',
        borderWidth: 3

    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
    },
    shadowprop1:{
   
        shadowColor: '#171717',
        shadowOffset: { width: 5, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 0,
    }
    
});

function Activitiesoriginal({ navigation }) {

    const [state, setState] = useState('');

    useEffect(() => {
        getApicdata();
    }, []);
    async function getApicdata() {
        fetch('https://www.iesaconnect.com/admin/api/activityjson')
            .then(response => response.json())
            .then(json => {
                setState(json);

            }).catch(error => { console.log(error) })
    }


    return (
        <SafeAreaView>
            <Header />
            <View style={{ width: '100%', height: '100%', backgroundColor: '#EFEFEF' }}>


                {/* for box we use this view*/}
                <View style={[styles.container1,styles.shadowprop1]}>
                    {/* in order to align the item in center*/}
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        {/*here we create a white circle and also apply touchable opactiy*/}
                        <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }} onPress={() => navigation.goBack()}>

                            <Image style={{ resizeMode: 'contain', width: wp('4%'), height: hp('4%'), tintColor: 'green', }} source={require('../../Aimage/drawable/back.png')} />
                        </TouchableOpacity>
                        <Text style={{ color: '#278c42', fontSize: hp('2.5%'), fontWeight: 'bold', marginLeft: 18, textTransform: 'uppercase',textAlign:'justify' }}>{state.heading}
                        </Text>
                    </View>
                </View>
                <View style={{ paddingBottom: 220, }}>
                    <FlatList

                        data={state.activity_data}
                        renderItem={({ item, index }) =>

                            <TouchableOpacity style={[styles.container, styles.shadowProp]} onPress={()=>navigation.navigate('Active',{ url:item.url})}>

                              <View style={{flexDirection:'row',width:'100%',flex:1,justifyContent:'space-between',alignItems:'center',padding:10  }}>
                              <Text style={{fontSize:14,fontWeight:'bold',color:'black',flexWrap:'wrap',width:'70%'}}>{item.heading}</Text> 
                            
                             
                              <Image  style={{width:26,height:26,tintColor:'blue',}}source={require('../../Aimage/drawable/right-arrow.png')}/>
                              
                              </View>
                            </TouchableOpacity>

                        }

                    />
                </View>

            </View>


        </SafeAreaView>
    )

}
export default Activitiesoriginal;
