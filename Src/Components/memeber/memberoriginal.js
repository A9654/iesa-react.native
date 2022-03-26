import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Header/Header';
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
  contentbox: {
    width: '90%',
    height: 'auto',
    backgroundColor: 'white',
    margin: 10,
    padding: 10,



  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 3,
  },
  shadowprop1:{
   
    shadowColor: '#171717',
    shadowOffset: { width: 5, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 0,
}
});

function Memberoriginal({ navigation }) {

  const [state, setState] = useState('');

  useEffect(() => {
    getApicdata();
    return () => {
      clearInterval(getApicdata);
    }
  }, []);
  async function getApicdata() {
    fetch('https://www.iesaconnect.com/admin/api/memberjson')
      .then(response => response.json())
      .then(json => {
        setState(json);
        console.log([json.member_data.member])

      }).catch(error => { console.log(error) })
  }


  return (
    <SafeAreaView>
      <Header />
   <View style={[styles.container1,styles.shadowprop1]}>
        {/* in order to align the item in center*/}
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          {/*here we create a white circle and also apply touchable opactiy*/}
          <TouchableOpacity style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 10 }} onPress={() => navigation.goBack()}>

            <Image style={{ resizeMode: 'contain', width: wp('4%'), height: hp('4%'), tintColor: 'green', }} source={require('../../Aimage/drawable/back.png')} />
          </TouchableOpacity>
          <Text style={{ color: '#278c42', fontSize: 16, fontWeight: 'bold', marginLeft: 18, textTransform: 'uppercase',textAlign:'justify'}}>{state.heading}
          </Text>
        </View>
      </View>


      <View style={{ width: '95%', height: 48, borderRadius: 20, backgroundColor: '#D6D6D6', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', overflow: 'hidden', marginHorizontal:10,}}>
        <FlatList
          horizontal
          data={state.member_data}
          renderItem={({ item, index }) =>
          (

            <View style={{ width: 'auto', height: 42, borderRadius: 24, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', padding:3, overflow: 'hidden',margin:2, }}>
              <TouchableOpacity style={{ width: 'auto', height: 'auto', }}>
                <Text style={{ color: '#0076BE', fontSize: 13, fontWeight: 'bold',padding:2 }}>
                  {item.member_title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>



      <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#EFEFEF', marginTop: 10 }}>

        <FlatList
          data={state.member_data}
          renderItem={({ item, index }) => (

            <FlatList
              data={item.member}
              renderItem={({ item, index }) => (
                <View style={[styles.contentbox, styles.shadowProp]}>
                  <Text style={{ color: '#278c42', fontSize: 16, fontWeight: 'bold', padding: 1}}>{item.company_name}</Text>
                  <Text style={{ color: '#0076BE', fontSize: 16, padding: 1 }}>{item.contact_person}</Text>
                  <Text style={{ color: 'black', fontSize: 16, padding: 1 }}> {String(item.mobile_no).split("").reverse().map((e, i) => i >= 4 ? "*" : e).reverse().join("")}</Text>
                  <Text style={{ color: '#808080', fontSize: 16, padding: 1 }}>{item.address}</Text>
                  <View style={{ width: '100%', paddingVertical: 10, borderTopColor: '#D6D6D6', borderTopWidth: 1, borderBottomWidth: 1, borderBottomColor: '#D6D6D6', marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }} >{item.city}</Text>
                    </View>


                    <View style={{ borderLeftWidth: 1, borderLeftColor: '#D6D6D6', borderRightWidth: 1, borderRightColor: '#D6D6D6', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FF0000', paddingHorizontal: 1, }}>{item.zone} zone</Text>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14 ,color:'#808080'}}>Reg.ID <Text style={{ color: '#0076BE', fontWeight: 'bold' }}>{item.reg_id}</Text> </Text>
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
export default Memberoriginal;