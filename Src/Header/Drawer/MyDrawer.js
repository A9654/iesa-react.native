// import React, { useRef, useState } from "react";
// import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";

// const Drawer = ({navigation}) => {
//   const drawer = useRef(null);
  
 

//   const navigationView = () => (
//     <View style={[styles.container, styles.navigationContainer]}>
//       <Text style={styles.paragraph}>I'm in the Drawer!</Text>
     
//     </View>
//   );

//   return (
//     <DrawerLayoutAndroid
//       ref={drawer}
//       drawerWidth={200}
//       drawerPosition={"right"}
//       renderNavigationView={navigationView}
//     >
//       <View style={styles.container}>
//         <Text style={styles.paragraph}>
         
//         </Text>
//         <Button
//           title="Change Drawer Position"
         
//         />
//         <Text style={styles.paragraph}>
//           Swipe from the side or press button below to see it!
//         </Text>
//         <Button
//           title="Open drawer"
//           onPress={() => drawer.current.openDrawer()}
//         />
//       </View>
//     </DrawerLayoutAndroid>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 16
//   },
//   navigationContainer: {
//     backgroundColor: "#ecf0f1"
//   },
//   paragraph: {
//     padding: 16,
//     fontSize: 15,
//     textAlign: "center"
//   }
// });

// export default Drawer;
// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//       <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
//       <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
//     </View>
//   );
// }

// function Notifications() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications Screen</Text>
//     </View>
//   );
// }

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem
//         label="Close drawer"
//         onPress={() => props.navigation.closeDrawer()}
//       />
//       <DrawerItem
//         label="Toggle drawer"
//         onPress={() => props.navigation.toggleDrawer()}
//       />
//     </DrawerContentScrollView>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer({ navigation}) {
//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <CustomDrawerContent {...props} />}
//     >
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Notifications" component={Notifications} />
//     </Drawer.Navigator>
//   );
// }
// export default MyDrawer;
import React,{useRef} from 'react';
import { View, Text ,DrawerLayoutAndroid} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from '../../Home/Home';

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView>

      <DrawerItem label="Help" onPress={() => alert('Link to help')} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
const navigationView = () => (
      <View >
       <Text>I'm in the Drawer!</Text>
       
     </View>
     )
function MyDrawer() {
  const drawer = useRef(null);
  return (
    <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={200}
          drawerPosition={"right"}
          renderNavigationView={navigationView}
        >
    <Drawer.Navigator  screenOptions={{headerShown:false,}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Article" component={Article} />
    </Drawer.Navigator>
    </DrawerLayoutAndroid>
  );
}




export default MyDrawer;