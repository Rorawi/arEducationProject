import React from "react";
import { View, StyleSheet } from "react-native";
import Video from "react-native-video";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUrl }}
        controls={true}
        resizeMode="contain"
        style={styles.video}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 300, // Adjust the height as needed
  },
});

export default VideoPlayer;
  