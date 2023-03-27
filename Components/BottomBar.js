import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome,AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const BottomBar = ({ handleMicrophone }) => {
  const navigation = useNavigation()
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomBarButton}
      onPress={
        ()=> {
          navigation.navigate('Main')
        }
      }
      >
      <AntDesign name="home" size={24} color="#fff" />
            </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarButton}>
        <Image source={require('../assets/menuicons/share.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMicrophone} style={[styles.bottomBarButton,styles.mic]}>
      <Image source={require('../assets/menuicons/mic.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarButton}>
      <Image source={require('../assets/menuicons/notify.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarButton} onPress={
        ()=> {
          navigation.navigate('Badges')
        }
      }>
        
      <Image
            source={require("../assets/images/profile.jpg")}
            style={{
              width: 33,
              height: 33,
              borderRadius: 16.5,
              marginTop: 10,
              alignSelf: "center",
            }}
          />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
    height: 60,
    paddingHorizontal: 10,
    width:354,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    marginTop:5
  },
  bottomBarButton: {
    alignItems: 'center',
    justifyContent: "center",
  },

  mic: {
    backgroundColor:'#C21212',
    width:44,
    height:44,
    borderRadius: 22
  },
});

export default BottomBar;
