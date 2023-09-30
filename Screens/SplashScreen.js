import React from 'react';
import {View, StyleSheet, Image,Text} from 'react-native';
import splashLogo from '../assets/images/splashImg.gif'
import aricon from "../assets/images/swiperImage/aricon.png"

const SplashScreen = () => {
    return (
        <View style={styles.container}>
           <Text style={styles.text}>LearnAR</Text>
           <Image source={aricon} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#000',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // top: 0,
        // bottom:0,
        // right:0,
        // left:0
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



})

export default SplashScreen;
