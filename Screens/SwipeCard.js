import React from 'react';
import {View, StyleSheet} from 'react-native';
import SwipeCardData from '../Components/SwipeCardData'

const SwipeCard = () => {
    return (
        <View style={styles.container}>
            <SwipeCardData/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FFFDD4',
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom:0,
        right:0,
        left:0,
        },
})

export default SwipeCard;
