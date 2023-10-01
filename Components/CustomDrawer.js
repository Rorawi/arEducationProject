import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import aricon from "../assets/images/swiperImage/aricon.png"
import { ImageBackground } from "react-native";
import { Image } from "react-native";

const CustomDrawer = (props) => {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={{flex:1,justifyContent:'flex-start'}}
      >
         <View style={styles.logocontainer}>
           <Text style={styles.text}>LearnAR</Text>
           <Image source={aricon} style={styles.image}/>
        </View>
        <View>
        <DrawerItemList  {...props} />
        </View>
      </DrawerContentScrollView>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#f2f2f2",
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
  logocontainer: {
    backgroundColor:'#212121',
    
    height:200,
    justifyContent: 'center',
    alignItems: 'center',
},

text : {
    fontSize: 35,
    color:"#fff",
    fontWeight: "bold",
    marginBottom:20
},

image: {
    width:40,
    height: 40
}
});

export default CustomDrawer;
