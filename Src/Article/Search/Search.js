// import React, { useState,useEffect } from 'react';
//   import { StyleSheet, Text, View ,FlatList} from 'react-native';
//   import { Dropdown } from 'react-native-element-dropdown';
// import Styles from '../../Components/Styles';

//   const Search = () => {
    
//  const [isFocus, setIsFocus] = useState(false);
//  const [loading, setLoading]= useState('');
// useEffect(() =>{
//  getApicdata();
//    },[]);
//    async function getApicdata() {
//     fetch('https://www.iesaconnect.com/admin/api/getmemberbusiness')
//     .then(response => response.json())
//     .then(json =>{
//       console.log(json)
//      setLoading(json);
  
//     }).catch(error=>{console.log(error)})
//   }
   

//     const renderLabel = () => {
//       if (loading || isFocus) {
//         return (
            
//           <Text style={[styles.label, isFocus && { color: 'blue' }]}>
//             Select Business
//           </Text>
        
//         );
//       }
//       return null;
//     };

//     return (
//       <View style={styles.container}>
//         {renderLabel()}
//         <Dropdown
//           style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
//           placeholderStyle={styles.placeholderStyle}
//           selectedTextStyle={styles.selectedTextStyle}
//           inputSearchStyle={styles.inputSearchStyle}
//           iconStyle={styles.iconStyle}
          

//           data={loading.select_business.map((item)=>item.business_name)}
//           search
//           maxHeight={300}
//           labelField="label"
//           valueField="value"
//           placeholder={!isFocus ? 'Select item' : '...'}
//           searchPlaceholder="Search..."
//           loading={loading}
//           onFocus={() => setIsFocus(true)}
//           onBlur={() => setIsFocus(false)}
//           onChange={item => {
//             setLoading(item.loading);
//             setIsFocus(false);
//           }}
//           renderLeftIcon={() => (
//             <View
//               style={styles.icon}
//               color={isFocus ? 'blue' : 'black'}
//               name="Safety"
//               size={20}
//             >
//             <select> <option></option></select>
//             <Text>UP</Text>
//             </View>
//           )}
//         />
//       </View>
//     );
//   };

//   export default Search;

//   const styles = StyleSheet.create({
//    container1:{
 
  
//    },

//     container: {
//       backgroundColor: 'white',
//       padding: 16, 
//       height:'100%',
//       width:'100%',
//       justifyContent:'center',
      
      
    

//     },
//     dropdown: {
//       height: 50,
//       borderColor: 'gray',
//       borderWidth: 2,
//       borderRadius: 8,
//       paddingHorizontal: 8,
//     },
//     icon: {
//       marginRight: 5,
//     },
//     label: {
//       position:'absolute',
//       backgroundColor: 'white',
//       left: 22,
//       top: 8,
//       zIndex: 999,
//       paddingHorizontal: 8,
//       fontSize: 14,
//     },
//     placeholderStyle: {
//       fontSize: 16,
//     },
//     selectedTextStyle: {
//       fontSize: 16,
//     },
//     iconStyle: {
//       width: 20,
//       height: 20,
//     },
//     inputSearchStyle: {
//       height: 40,
//       fontSize: 16,
//     },
//   });
// import React, { useState,useEffect } from 'react';
//   import { StyleSheet, Text, View ,FlatList} from 'react-native';
//   import { Dropdown } from 'react-native-element-dropdown';
// import Dropdown from './Dropdown';

// //  
// function Search () {
//     const [selected, setSelected] = useState(undefined);
//     const data = [
//       { label: 'One', value: '1' },
//       { label: 'Two', value: '2' },
//       { label: 'Three', value: '3' },
//       { label: 'Four', value: '4' },
//       { label: 'Five', value: '5' },
//     ];
  
//     return (
//       <View style={styles.container}>
//         {!!selected && (
//           <Text style={{}}>
//             Selected: label = {selected.label} and value = {selected.value}
//           </Text>
//         )}
//         <Dropdown label="Select Item" data={data} onSelect={setSelected} style={{height:'20%',width:'80%'}}/>
//         <Text>This is the rest of the form.</Text>
//       </View>
//     );
//   };
  
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: 'red',
//       alignItems: 'center',
//       justifyContent: 'center',
//       flexDirection: 'row',
//     },
//   });
// export default Search;

// import React, { Component } from 'react';
// import {View,} from 'react-native';

// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       countries: [],
//       colours: {}
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       countries: [
//         {id: 'AFG', name: 'Afghanistan'},
//         {id: 'ALA', name: 'Åland Islands'},
//         {id: 'ALB', name: 'Albania'}
//       ]
//     });
//   }


//   render () {
//     const { countries } = this.state;

//     let countriesList = countries.length > 0
//     	&& countries.map((item, i) => {
//       return (
//         <option key={i} value={item.id}>{item.name}</option>
//       )
//     }, this);

//     return (
//       <View>
//         <Select>
//           {countriesList}
//         </Select>
//       </View>
//     );
//   }
// }
//<-----------------------------------***************************************------------------------------------------->
// export default Search;

// Example of Searchable Dropdown / Picker in React Native
// https://aboutreact.com/example-of-searchable-dropdown-picker-in-react-native/

// import React in our code
// import React, { useState, useEffect } from 'react';

// // import all the components we are going to use
// import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// //import SearchableDropdown component
// import SearchableDropdown from 'react-native-searchable-dropdown';

// //Item array for the dropdown
// const items = [
//   //name key is must.It is to show the text in front
//   { id: 1, name: 'angellist' },
//   { id: 2, name: 'codepen' },
//   { id: 3, name: 'envelope' },
//   { id: 4, name: 'etsy' },
//   { id: 5, name: 'facebook' },
//   { id: 6, name: 'foursquare' },
//   { id: 7, name: 'github-alt' },
//   { id: 8, name: 'github' },
//   { id: 9, name: 'gitlab' },
//   { id: 10, name: 'instagram' },
// ];

// const Search = () => {
//   //Data Source for the SearchableDropdown
//   const [serverData, setServerData] = useState([]);

//   useEffect(() => {
//     fetch('https://www.iesaconnect.com/admin/api/getmemberbusiness')
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Successful response from the API Call
//         setServerData(responseJson.select_business);
//         console.log(responseJson)
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//          Explore Potential Business{'\n'} Opportunities And Get Connected
//         </Text>
//         <Text style={styles.headingText}>
//           Select Business
//         </Text>
//         <SearchableDropdown
//           onTextChange={(text) => console.log(text)}
//           //On text change listner on the searchable input
//           onItemSelect={(item) => alert(JSON.stringify(item))}
//           //onItemSelect called after the selection from the dropdown
//           containerStyle={{ padding: 5 }}
//           //suggestion container style
//           textInputStyle={{
//             //inserted text style
//             padding: 12,
//             borderWidth: 1,
//             borderColor: '#ccc',
//             backgroundColor: '#FAF7F6',
//           }}
//           itemStyle={{
//             //single dropdown item style
//             padding: 10,
//             marginTop: 2,
//             backgroundColor: '#FAF9F8',
//             borderColor: '#bbb',
//             borderWidth: 1,
//           }}
//           itemTextStyle={{
//             //text style of a single dropdown item
//             color: '#222',
//           }}
//           itemsContainerStyle={{
//             //items container style you can pass maxHeight
//             //to restrict the items dropdown hieght
//             maxHeight: '60%',
//           }}
//           items={items}
//           //mapping of item array
//           defaultIndex={2}
//           //default selected item index
//           placeholder="placeholder"
//           //place holder for the search input
//           resetValue={false}
//           //reset textInput Value with true and false state
//           underlineColorAndroid="transparent"
//           //To remove the underline from the android input
//         />
//         <Text style={styles.headingText}>
//           Select Zone
//         </Text>
//         <SearchableDropdown
//           onTextChange={(item) => <Text>(item)</Text>}
//           //On text change listner on the searchable input
//           onItemSelect={(item) => alert(JSON.stringify(item))}
//           //onItemSelect called after the selection from the dropdown
//           containerStyle={{ padding: 5 }}
//           //suggestion container style
//           textInputStyle={{
//             //inserted text style
//             padding: 12,
//             borderWidth: 1,
//             borderColor: '#ccc',
//             backgroundColor: '#FAF7F6',
//           }}
//           itemStyle={{
//             //single dropdown item style
//             padding: 10,
//             marginTop: 2,
//             backgroundColor: '#FAF9F8',
//             borderColor: '#bbb',
//             borderWidth: 1,
//           }}
//           itemTextStyle={{
//             //text style of a single dropdown item
//             color: '#222',
//           }}
//           itemsContainerStyle={{
//             //items container style you can pass maxHeight
//             //to restrict the items dropdown hieght
//             maxHeight: '50%',
//           }}
//           items={serverData.map((item)=>item.business_name)}
          
//           //mapping of item array
//           defaultIndex={2}
//           //default selected item index
//           placeholder="placeholder"
//           //place holder for the search input
//           resetValue={false}
//           //reset textInput Value with true and false state
//           underlineColorAndroid="transparent"
//           //To remove the underline from the android input
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Search;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//   },
//   titleText: {
//     padding: 8,
//     fontSize: 16,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   headingText: {
//     padding: 8,
//   },
// });
//<------------------------------******************************---------------------------------->

import React, { Component } from "react";
import {  View, Text, StyleSheet } from 'react-native';
import {Picker} from '@react-native-picker/picker';
export default class App extends Component {
  state = {
    selectedcat: "",
   
    list:[]
  };
  async goForAxios(){
    fetch('https://www.iesaconnect.com/admin/api/getmemberbusiness')
  .then(response => response.json())
    .then(data => this.setState({list:data.select_business}))
  }
componentDidMount(){
  this.goForAxios()
}
  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
  }
  render() {
    return ( 
      <View style={styles.viewStyle}>
        <View style={{}}>
          <Text style={styles.textStyle}>Categories</Text>
        </View>
        <View style={{ flex: 1, fontSize: 14,borderWidth:1}}>
          <Picker
            itemStyle={styles.itemStyle}
            mode="dropdown"
            style={styles.pickerStyle}
            selectedValue={this.state.selectedcat}
            onValueChange={this.onValueChangeCat.bind(this)}
          >
           {this.state.list.map((item, index) => (
              <Picker.Item
                color="#0087F0"
                label={item.business_name}
                value={item.business_name}
                index={index}
              />
            ))}
          </Picker>
        </View>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    width: "92%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  itemStyle: {
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    color: "#007AFF"
  },
  pickerStyle: {
    width: "100%",
    height: 40,
    color: "#007AFF",
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  },
  textStyle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  }
});
