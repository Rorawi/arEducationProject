import React from 'react';
import {View, StyleSheet} from 'react-native';
import MyBadgeData from '../Components/myBadgeData';

const MyBagde = () => {
    return (
        <View style={styles.container}>
            <MyBadgeData/>
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

export default MyBagde;
