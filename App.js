import React, { useEffect, useState } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import SplashScreen from "./Screens/SplashScreen";
import Main from "./Screens/Main";
import VideoPopulation from "./Screens/VideoPopulation";
import Constants from "expo-constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import ReadMeComponent from "./Components/ReadMe";
import CustomDrawer from "./Components/CustomDrawer";


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


export const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Main") {
            iconName = focused ? "view-in-ar" : "view-in-ar";
          } else if (route.name === "Video") {
            iconName = "video";
          }

          return route.name === "Main" ? (
            <MaterialIcons name={iconName} size={size} color={color} />
          ) : (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#7FFF7F",
        tabBarInactiveTintColor: "grey",
        tabBarBackgroundColor: "#424242",
        tabBarStyle: {
          backgroundColor: "#212121", // Set the background color here
        },
      })}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          title: "AR",
          headerStyle: {
            backgroundColor: "#212121",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => {
            return (
              <MaterialIcons
                name="view-in-ar"
                size={30}
                color="#7FFF7F"
                style={styles.lefticon}
              />
            );
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
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerRight: () => {
            return (
              <MaterialIcons
                name="videocam"
                size={30}
                color="#7FFF7F"
                style={styles.lefticon}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#7FFF7F",
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
      console.error("Error initializing Constants:", error);
    }
  }

  initializeApp();

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
        translucent={false}
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
  lefticon: {
    marginRight: 20,
  },
});
