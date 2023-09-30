import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import SplashScreen from "./Screens/SplashScreen";
import Main from "./Screens/Main";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import VideoPopulation from "./Screens/VideoPopulation";
import Constants from 'expo-constants';
import CustomDrawer from "./Components/CustomDrawer";
import {
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import aricon from "./assets/images/swiperImage/aricon.png"
import ReadMeComponent from "./Components/ReadMe";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Main") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Video") {
            iconName = focused ? "ios-videocam" : "ios-videocam-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#7FFF7F",
        tabBarInactiveTintColor: "grey",
        tabBarBackgroundColor: "#424242",
        tabBarStyle: {
          backgroundColor: '#212121', // Set the background color here
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#212121",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Video"
        component={VideoPopulation}
        options={{
          title: "Study Videos",
          headerStyle: {
            backgroundColor: "#212121",
            textAlign: "center",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
}

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#FAD04B",
        drawerActiveTintColor: "#000",
        drawerInactiveTintColor: "#fff",
        drawerStyle: {
          backgroundColor: "#424242",
          width: 240,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTab}
        options={{
          drawerIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="home-outline"
                size={24}
                color={color}
                style={{ marginRight: -25 }}
              />
            );
          },
        }}
      />

      <Drawer.Screen
        name="ReadMe"
        component={ReadMeComponent}
        options={{
          drawerIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="bookmark-outline"
                size={24}
                color={color}
                style={{ marginRight: -25 }}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setLoading(true);
  }, []);


async function initializeApp() {
  try {
    await Constants.getWebViewUserAgentAsync();
    // Now you can access Constants properties safely
  } catch (error) {
    console.error('Error initializing Constants:', error);
  }
}

initializeApp();


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="light-content" translucent={false}
 />

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

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { useEffect, useState } from "react";
// import SplashScreen from "./Screens/SplashScreen";
// import NavigateToScreens from "./Screens/NavigateToScreens";
// import Achievement from "./Screens/Achievement";
// import Register from "./Screens/Register";
// import Contest from "./Screens/Contest";
// import MyBagde from "./Screens/myBagde";
// import SwipeCard from "./Screens/SwipeCard";
// import FillInTheBlanks from "./Screens/FillInTheBlanks";
// import Main from "./Screens/Main";
// import FlipCard from "./Screens/FlipCard";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import CustomDrawer from "./Components/CustomDrawer";
// import FlipImage from "./Screens/FlipImage";
// import { Image } from "react-native";
// import {
//   FontAwesome5,
//   AntDesign,
//   MaterialCommunityIcons,
// } from "@expo/vector-icons";
// import home from "./assets/Home.png";
// import notify from "./assets/notify.png";
// import { color } from "react-native-reanimated";
// import Hotspot from "./Screens/Hotspot";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from '@expo/vector-icons';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const Tab = createBottomTabNavigator();

// export function BottomTab() {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Main") {
//             iconName = focused
//               ? "ios-information-circle"
//               : "ios-information-circle-outline";
//           } else if (route.name === "Video") {
//             iconName = focused ? "ios-videocam" : "ios-videocam-outline";
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "tomato",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen name="Main" component={Main} />
//       {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 3000);
//     setLoading(true);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <NavigationContainer>
//         {loading ? <SplashScreen /> : <BottomTab />}
//       </NavigationContainer>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// // export const DrawerNavigator = () => {
// //   return (
// //     <Drawer.Navigator
// //       screenOptions={{
// //         headerShown: false,
// //         drawerActiveBackgroundColor: '#FAD04B',
// //         drawerActiveTintColor:'#000',
// //         drawerInactiveTintColor:'#fff',
// //         drawerStyle: {
// //           backgroundColor: "#000",
// //           width: 240,
// //           borderTopRightRadius:86,
// //           borderBottomRightRadius:86
// //         },

// //       }}
// //       drawerContent={(props) => <CustomDrawer {...props} />}
// //     >
// //       <Drawer.Screen name="Home" component={Navigate} options={{
// //         drawerIcon:(({color})=> {
// //          return <MaterialCommunityIcons name="home-outline" size={24} color={color} style={{marginRight:-25}}/>
// //         })
// //       }}/>
// //       <Drawer.Screen name="Badges" component={MyBagde} options={{
// //         drawerIcon:(({color})=> {
// //           return <MaterialCommunityIcons name="police-badge-outline" size={20} color={color} style={{marginRight:-25}} />
// //          })
// //       }}/>
// //       <Drawer.Screen name="Achievement" component={Achievement} options={{
// //         drawerIcon:(({color})=> {
// //           return <AntDesign name="Trophy" size={20} color={color} style={{marginRight:-25}} />
// //          })
// //       }}/>
// //       <Drawer.Screen name="Contest" component={Contest} options={{
// //         drawerIcon:(({color})=> {
// //           return <FontAwesome5 name="award" size={20} color={color} style={{marginRight:-25}} />
// //          })
// //       }}/>
// //     </Drawer.Navigator>
// //   );
// // };

//           // export const Navigate = () => {
//           //   return (
//           //     <Stack.Navigator>
//           //       <Stack.Screen name="" component={Main} options={{ headerShown: false }} />
//           //       <Stack.Screen
//           //         name="FillInTheBlanks"
//           //         component={FillInTheBlanks}
//           //         options={{ headerShown: false }}
//           //       />
//           //       {/* <Stack.Screen
//           //         name="Flipcard1"
//           //         component={FlipCard}
//           //         options={{ headerShown: false }}
//           //       />
//           //       <Stack.Screen
//           //         name="TOD"
//           //         component={SwipeCard}
//           //         options={{ headerShown: false }}
//           //       />
//           //       <Stack.Screen
//           //         name="Flipimg"
//           //         component={FlipImage}
//           //         options={{ headerShown: false }}
//           //       />

//           //       <Stack.Screen
//           //         name="hotspot"
//           //         component={Hotspot}
//           //         options={{ headerShown: false }}
//           //       /> */}
//           //     </Stack.Navigator>
//           //   );
//           // };
