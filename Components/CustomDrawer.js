import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList  {...props}/>
      </DrawerContentScrollView>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  drawerItem: {
    marginBottom: 20,
  },
  drawerItemText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CustomDrawer;
