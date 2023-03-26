import React from 'react';
import {View, StyleSheet} from 'react-native';
import BottomBar from '../Components/BottomBar';
import FillInTheBlanksData from '../Components/FillInTheBlanksData'

const FillInTheBlanks = () => {
    return (
        <View style={styles.container}>
            <FillInTheBlanksData/>
            <BottomBar/>
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

export default FillInTheBlanks;
