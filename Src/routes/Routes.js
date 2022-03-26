import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Aboutiesa from '../Components/Iesa/Aboutiesa';
import Member from '../Components/memeber/Members';



function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    );
  }
  
  export default function Routes() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }