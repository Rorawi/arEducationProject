import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect,useState } from 'react';
import SplashScreen from './Screens/SplashScreen';
import NavigateToScreens from './Screens/NavigateToScreens';
import Achievement from './Screens/Achievement'
import Register from './Screens/Register';
import Contest from './Screens/Contest';
import MyBagde from './Screens/myBagde';
import SwipeCard from './Screens/SwipeCard';

export default function App() {
   const [loading, setLoading] = useState(true);
   useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 2000);
    setLoading(true)
   },[])
  return (
    <View style={styles.container}>
      {loading? <SplashScreen/>: <SwipeCard/>}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
