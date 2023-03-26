import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import splashLogo from '../assets/images/splashImg.gif'

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={splashLogo} style={{
                width:160,
                height:160,
                borderColor: '#F7F3A6',
                borderWidth:10,
                alignSelf:"center"
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#000',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom:0,
        right:0,
        left:0
    },
})

export default SplashScreen;
