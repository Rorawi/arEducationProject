import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import { ImageBackground } from "react-native";
import { Image } from "react-native";

const CustomDrawer = (props) => {
    return (
      <DrawerContentScrollView {...props} contentContainerStyle={{flex:1,justifyContent:'flex-start'}}
      >
        <ImageBackground source={require('../assets/abstract.png')} style={{
         padding:20,
         marginBottom: 30
        }}>
          <Image source={require('../assets/images/profile.jpg')} style={{
            height: 120,
            width: 120,
            borderColor:'#FAD04B',
            borderWidth: 6,
            borderRadius:60,
            alignSelf:'center',
          }}/>
        <Text style={{color:"#f2f2f2",fontWeight:900,fontSize: 20,alignSelf: 'center',textAlign:'center',}}>500pts</Text>
        </ImageBackground>
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
    borderBottomRightRadius:25
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
