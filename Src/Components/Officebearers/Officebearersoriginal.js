import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Header/Header';
const styles = StyleSheet.create({
  container: {
    width: '95%', 
    height: hp('8%'),
    backgroundColor: '#F5F5F5',
     justifyContent: 'center', 
     alignItems: 'flex-start', 
     marginHorizontal: 10,
     marginBottom:4


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
  contentbox: {
    width: '93%',
    height: 'auto',
    backgroundColor: 'white',
    margin: 10,
    padding: 5,



  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 8,
    elevation: 0,
  },
});

function Officebearersoriginal({ navigation }) {

  const [state, setState] = useState('');

  useEffect(() => {
    getApicdata();
    return () => {
      clearInterval(getApicdata);
    }
  }, []);
  async function getApicdata() {
    fetch('https://www.iesaconnect.com/admin/api/electedofficejson')
      .then(response => response.json())
      .then(json => {
        setState(json)

      }).catch(error => { console.log(error) })
  }


  return (
    <SafeAreaView style={{backgroundColor:''}}>
      <Header />
      <View style={[styles.container,styles.shadowProp]}>
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


      <View style={{ width: '90%', height: 55, borderRadius: 20, backgroundColor: '#D6D6D6', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', overflow: 'hidden',marginLeft:17  }}>
        <FlatList
          horizontal
          data={state.Elected_office_bearers}
          renderItem={({ item, index }) =>
          (

            <View style={{ width: 'auto', height: 46, borderRadius: 22, margin: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', overflow: 'hidden', }}>
              <TouchableOpacity style={{ width: 'auto', height: 'auto', }}>
                <Text style={{ color: '#0076BE', fontSize: 16, fontWeight: 'bold',padding:10 }}>
                  {item.member_year}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>



      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5', marginTop: 10 }}>

        <FlatList
          data={state.Elected_office_bearers}
          renderItem={({ item, index }) => (

            <FlatList
              data={item.member}
              renderItem={({ item, index }) => (
                <View style={[styles.contentbox,]}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 20 }}>

                    <View style={{ width: '30%', alignItems: 'flex-start', justifyContent: 'center', width: 'auto', height: 'auto', }}>
                      <Image style={{ width: 80, height: 80, borderRadius: 50, borderColor: 'blue', borderWidth: 1 }} source={{ uri: item.href }} />
                    </View>
                    <View style={{ width: '70%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                      <Text style={{ color: '#278c42', fontSize: 16, fontWeight: 'bold', padding:2}}>{item.member_name}</Text>
                      <Text style={{ color: 'black', fontSize: 14, padding: 2}}>{item.post}</Text>
                      <Text style={{ fontSize: 14, padding:2,color:'#808080'}}>{item.Company_name}</Text>
                    </View>
                  </View>
                  <View>
                    <View style={{ borderTopWidth: 1, borderTopColor: '#D6D6D6', marginHorizontal: 10 }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image source={require('../../Aimage/drawable/call.png')} style={{ width: 10, height: 10, resizeMode: 'contain', tintColor: '#32CD32' }} />
                        <Text style={{ fontSize: 16, padding: 5 ,color:'#808080'}}>
                          {String(item.PhoneNo).split("").reverse().map((e, i) => i >= 4 ? "*" : e).reverse().join("")}

                        </Text>

                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <Image source={require('../../Aimage/drawable/email.png')} style={{ width: 15, height: 15, resizeMode: 'contain', tintColor: '#32CD32', }} />
                        <Text style={{ fontSize: 14, padding: 5,color:'#808080'}}>{item.email}</Text>
                      </View>
                    </View>
                  </View>
                  

                </View>

               
              )}


            />




          )}


        />
      </View>
      
    </SafeAreaView>
  )

}
export default Officebearersoriginal;