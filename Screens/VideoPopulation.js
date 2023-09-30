import React from 'react';
import {View, StyleSheet} from 'react-native';
import BottomBar from '../Components/BottomBar';
import VideoData from '../Components/VideoData';
const VideoPopulation = () => {
    return (
        <View style={styles.container}>
            <VideoData/>
            {/* <BottomBar/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#424242",
        // flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // position: 'absolute',
        // top: 0,
        // bottom:0,
        // right:0,
        // left:0,
        },
})

export default VideoPopulation;
