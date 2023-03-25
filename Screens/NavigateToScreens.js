import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "../Components/CustomDrawer";
import Register from "./Register";
import Contest from "./Contest";

const Drawer = createDrawerNavigator();
const Screens=()=> {
  <NavigationContainer>
  <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
    <Drawer.Screen name="Contest" component={Contest} />
    <Drawer.Screen name="Home" component={Register} />
  </Drawer.Navigator>
</NavigationContainer>
}
const NavigateToScreens = () => {
  return (
  <View >
    <Screens/>
  </View>
  );

}


const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
});
export default NavigateToScreens;
