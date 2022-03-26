import React from 'react';
import { Button, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View,_ScrollView ,} from 'react-native';
import OnboardingScreen from './Src/onbordingScreen/Onbordingscreen';
import Home from './Src/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AboutIesaoriginals from './Src/Components/Iesa/AboutIesaoriginal';
import BecomeAmemberoriginal from './Src/Components/becomeAmember/BecomeAmemberoriginal';
import Commitiesoriginal from './Src/Components/commities/Commitiesoriginal';
import Newsletteroriginal from './Src/Components/newsletter/Newsletteroriginal';
import Contactoriginal from './Src/Components/contact/Contactoriginal';
import Secretraiatoriginal from './Src/Components/secretraiat/Secretraiatoriginal';
import Memberoriginal from './Src/Components/memeber/memberoriginal';
import Officebearersoriginal from './Src/Components/Officebearers/Officebearersoriginal';
import Activitiesoriginal from './Src/Components/activites/Activitiesoriginal';
import Iesa7 from './Src/Article/Iesa7';
import Active from './Src/Components/activites/Active';
import Market from './Src/Header/Market';

import AsyncStorage from '@react-native-async-storage/async-storage';
import MyDrawer from './Src/Header/Drawer/MyDrawer';
import Search from './Src/Article/Search/Search';



const Stack = createNativeStackNavigator();

function MyStack() {
  const [isAppFirstLaunched,setIsAppFirstLaunched] =React.useState(null);
  React.useEffect(() =>{
  appData();
 return ()=>{
 clearInterval(appData)

}
  },[]);
    
const appData = async () =>{
try{
const response = await AsyncStorage.getItem('isAppFirstLaunched');
    if(response == null){
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched','false');
    }else{
      setIsAppFirstLaunched(false);
      AsyncStorage.getItem('isAppFirstLaunched');
    }
} catch (error) {
console.error (error);
   }
}


  return (
    isAppFirstLaunched != null && (
    <Stack.Navigator screenOptions={{headerShown:false}} >
    {isAppFirstLaunched &&( 
      <Stack.Screen name='OnboardingScreen' 
       component={OnboardingScreen}/>
      )}
     
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AboutIesaoriginals" component={AboutIesaoriginals}/>
      <Stack.Screen name="BecomeAmemberoriginal" component={BecomeAmemberoriginal} />
      <Stack.Screen name="Contactoriginal" component={Contactoriginal} />
      <Stack.Screen name="Newsletteroriginal" component={Newsletteroriginal} />
      <Stack.Screen name="Commitiesoriginal" component={Commitiesoriginal} />
      <Stack.Screen name="Secretraiatoriginal" component={Secretraiatoriginal}/>
      <Stack.Screen name ="Memberoriginal" component={Memberoriginal}/>
      <Stack.Screen name ="Officebearersoriginal" component={Officebearersoriginal}/>
      <Stack.Screen name ="Activitiesoriginal" component={Activitiesoriginal}/>
      <Stack.Screen name ="Active" component={Active} />
      <Stack.Screen name="Iesa7" component={Iesa7} />
      <Stack.Screen name="Market" component={Market} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
    )
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
// //<----------------------******************----------------------------------->
// // import * as React from 'react';
// // import { View, Text,Button } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createDrawerNavigator } from '@react-navigation/drawer';

// // function Feed({navigation}) {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end',position:'relative' }}>
// //       <Text>Feed Screen</Text>
// //       <Button style={{position:"absolute",top:5,right:10}} title="Go back" onPress={() => navigation.openDrawer()} />
// //     </View>
// //   );
// // }

// // function Article() {
// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text>Article Screen</Text>
// //     </View>
// //   );
// // }

// // const Drawer = createDrawerNavigator();

// // function MyDrawer() {
// //   return (
// //     <Drawer.Navigator
// //       screenOptions={{
// //         drawerStyle: {
// //           backgroundColor: '#c6cbef',
// //           width: 240,
// //         },
// //         drawerPosition:'right',
// //         headerShown:false
// //       }}
      
// //     >
// //       <Drawer.Screen name="Feed" component={Feed} />
// //       <Drawer.Screen name="Article" component={Article} />
// //     </Drawer.Navigator>
// //   );
// // }

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <MyDrawer />
// //     </NavigationContainer>
// //   );
// // }

