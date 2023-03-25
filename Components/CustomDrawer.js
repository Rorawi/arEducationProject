import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomDrawer = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.drawerItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate("Contest")}
        >
          <Text style={styles.drawerItemText}>Contest</Text>
        </TouchableOpacity>
      </View>
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
