import React from 'react';
import {View, StyleSheet} from 'react-native';
import BottomBar from '../Components/BottomBar';
import HotspotData from '../Components/HotspotData';

const Hotspot = () => {
    return (
        <View style={styles.container}>
            <HotspotData/>
            <BottomBar/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FFFDD4',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom:0,
        right:0,
        left:0,
        },
})

export default Hotspot;
