import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import SplashScreen from './Screens/SplashScreen';
import NavigateToScreens from './Screens/NavigateToScreens';
import Achievement from './Screens/Achievement'
import Register from './Screens/Register';
import Contest from './Screens/Contest';
import MyBagde from './Screens/myBagde';
import SwipeCard from './Screens/SwipeCard';
import FillInTheBlanks from './Screens/FillInTheBlanks';
import Main from './Screens/Main';
import FlipCard from './Screens/FlipCard';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './Components/CustomDrawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export const Navigate = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
      <Stack.Screen name='FillInTheBlanks' component={FillInTheBlanks} options={{ headerShown: false }} />
      <Stack.Screen name='TOD' component={SwipeCard} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={ props=> <CustomDrawer {...props}/>}>
      <Drawer.Screen name='Home' component={Navigate} />
      <Drawer.Screen name='Badges' component={MyBagde} />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    setLoading(true);
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {loading ? <SplashScreen /> : <DrawerNavigator />}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
