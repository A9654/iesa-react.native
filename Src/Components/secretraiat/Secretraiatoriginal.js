import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet, FlatList, ScrollView ,Linking} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Header/Header';

import Styles from '../Styles';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 2,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'


  },
  container1:{
    width: '90%',
     height: hp('8%'),
      backgroundColor: '#EFEFEF', 
      justifyContent: 'center', 
      alignItems: 'flex-start',
     marginHorizontal:22,
     marginBottom:5

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
  imagecall: {
  width: 40, 
  height: 40,
  borderRadius: 40, 
  backgroundColor: 'white', 
  justifyContent: 'center',
  alignItems: 'center', 
  left: 25, 
   bottom: 35
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

function Secretraiatoriginal({ navigation }) {

  const [state, setState] = useState('');

  useEffect(() => {
    getApicdata();
  }, []);
  async function getApicdata() {
    fetch('https://www.iesaconnect.com/admin/api/secretairaitjson')
      .then(response => response.json())
      .then(json => {
        setState(json);

      }).catch(error => { console.log(error) })
  }
   //<Text style={{ color: 'black', fontSize: hp('2.2%'), paddingHorizontal: 5 }}> {String(item.PhoneNo).split("").reverse().map((e, i) => i >= 4 ? "*" : e).reverse().join("")}</Text>

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
            <Text style={{ color: '#278c42', fontSize: 16, fontWeight: 'bold', marginLeft: 18, textTransform: 'uppercase',textAlign:'justify' }}>{state.heading}
            </Text>
          </View>
        </View>
        <View style={{ paddingBottom: 220, }}>
          <FlatList

            data={state.secretraiat}
            renderItem={({ item, index }) =>

              <View style={[styles.container, styles.shadowProp]}>


                <View style={{ flex: 2, justifyContent: 'flex-start', alignItems: 'flex-start', padding:5 }}>
                  <Text style={{ color: '#278c42', fontSize: 16, padding: 5, fontWeight: 'bold' }}>{item.member_name}</Text>
                  <Text style={{ color: 'black', fontSize: hp('2.2%'), padding: 3, right: 3 }}> {item.post}</Text>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding:2 }}>
                    <Image
                      style={{ width: 12, height: 12, tintColor: 'green', resizeMode: 'contain' }}
                      source={require('../../Aimage/drawable/call.png')} />
                    <Text style={{ color: 'black', fontSize: hp('2%'), paddingHorizontal: 5 }}> {item.PhoneNo}</Text>
                  </View>
                  <View
                    style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: 2 }}>
                    <Image
                      style={{ width: 12, height: 12, tintColor: 'green', resizeMode: 'contain' }}
                      source={require('../../Aimage/drawable/email.png')}
                    />
                    <Text style={{ color: 'black', fontSize: hp('2%'), paddingHorizontal: 5 }} >{item.email}</Text>
                  </View>
                  <Text>{item.company_name}</Text>
                </View>



                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: 20 }} >
                  <Image
                    source={{ uri: item.href }}
                    style={{ width: 110, height: 110, borderRadius: 100, borderColor: '#0076BE', borderWidth: 2, marginRight: 20 }}
                  />
                  <View style={[styles.imagecall,styles.shadowProp]}>
                    <TouchableOpacity  onPress={() => Linking.openURL(`tel:${item.PhoneNo}`)} >
                      <Image style={{ width:16, height: 16, resizeMode: 'contain', tintColor: '#0076BE' }} source={require('../../Aimage/drawable/call.png')} />
                    </TouchableOpacity>
                  </View>
                </View>



              </View>

            }

          />
        </View>

      </View>


    </SafeAreaView>
  )

}
export default Secretraiatoriginal;
