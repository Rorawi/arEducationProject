import React from 'react';
import {View, StyleSheet} from 'react-native';
import BottomBar from '../Components/BottomBar';
import ContestComponent from '../Components/ContestComponent';
import ContestData from '../Components/ContestData';

const Contest = () => {
    return (
        <View style={styles.container}>
            <ContestData/>
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

export default Contest;
