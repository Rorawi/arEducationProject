import React from 'react';
import {View, StyleSheet} from 'react-native';
import AchievementData from '../Components/AchievementData';
import BottomBar from '../Components/BottomBar';

const Achievement = () => {
    return (
        <View style={styles.container}>
            <AchievementData/>
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

export default Achievement;
