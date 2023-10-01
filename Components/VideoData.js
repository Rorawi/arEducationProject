import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Linking,
  Alert,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Video } from "expo-av"; // Import Expo Video
import wallpaper from "../assets/images/swiperImage/wbg1.png";

const images = [
  {
    image: require("../assets/images/swiperImage/ai.webp"),
    thumbnailText: "Introduction to A.I",
    desc: "Explore the fundamentals and applications of Artificial Intelligence in this comprehensive video series.",
    linktoVideo:
      "https://www.youtube.com/playlist?list=PLVkAiMiemh5JO5nOc91mTKn00Cv0psJZI",
  },
  {
    image: require("../assets/images/swiperImage/rml.webp"),
    thumbnailText: "ResponsibleML",
    desc: "Dive into the world of ethical Machine Learning and responsible AI practices with expert insights.",
    linktoVideo:
      "https://www.youtube.com/playlist?list=PLVkAiMiemh5LMM-rjPcn-TcSu1x2nn2dy",
  },
  {
    image: require("../assets/images/swiperImage/introc.png"),
    thumbnailText: "Introduction to u.I",
    desc: "Get introduced to User Interface design principles, enhancing your skills in creating user-friendly interfaces.",
    linktoVideo:
      "https://www.youtube.com/watch?v=F9SWESAO-r8&list=PLVkAiMiemh5JhnrdZMkClQ9cDHGI128gR",
  },
  {
    image: require("../assets/images/swiperImage/arimg.webp"),
    thumbnailText: "Augmented Reality-Adobe Aero",
    desc: "Get introduced to User Interface design principles, enhancing your skills in creating user-friendly interfaces.",
    linktoVideo:
      "https://youtube.com/playlist?list=PLVkAiMiemh5JhnrdZMkClQ9cDHGI128gR&si=zVyvMDSAFyXqnZYo",
  },
  // Add more image objects as needed
];

const VideoData = () => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const imageUrl = "https://adobeaero.app.link/EOSgZFhZsCb"; // Replace with your image URL
  const videoRef = React.useRef(null); // Reference to the Expo Video component

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const openLink = (link) => {
    // Handle opening the link here
    Alert.alert(
      "Watch Video",
      "Do you want to watch this video in the app or on YouTube?",
      [
        {
          text: "In App",
          onPress: () => {
            console.log("Opening video in the app: " + link);
            // Implement code to play video in the app

            // Example using react-native-video:
            setModalVisible(true);
          },
        },
        {
          text: "YouTube",
          onPress: () => {
            console.log("Opening video on YouTube: " + link);
            Linking.openURL(link).catch((error) =>
              console.error("Error opening link: ", error)
            );
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  const getShadowStyle = () => {
    if (Platform.OS === "ios") {
      return {
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      };
    } else if (Platform.OS === "android") {
      return {
        elevation: 5,
      };
    }
    return {};
  };

  return (
    <ImageBackground source={wallpaper} resizeMode="cover">
      <ScrollView style={styles.container}>
        <View>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 20,
              //   flexWrap: "wrap",
            }}
          >
            {images.map((link, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => openLink(link.linktoVideo)}
                >
                  <View
                    style={[
                      styles.thumbnailContainer,
                      getShadowStyle(), // Apply the shadow style
                    ]}
                  >
                    <Image source={link.image} style={styles.thumbnailImage} />
                    <View style={styles.textContainer}>
                      <Text style={styles.thumbnailText}>
                        {/* <View style={styles.iconContainer}>
                  <Ionicons name="ios-videocam" size={14} color="#fff" style={styles.icon}/>
</View> */}
                        <Text style={styles.boldText}>
                          {link.thumbnailText}
                        </Text>
                      </Text>
                      <Text style={styles.descText}>
                        {/* <View style={styles.iconContainer}>
                  <Ionicons name="ios-information" size={14} color="#fff" style={styles.icon}/>
                  </View> */}
                        {link.desc}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Video Player Modal */}
        <Modal visible={isModalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <Video
              ref={videoRef}
              source={{ uri: imageUrl }} // Replace with the video URL
              style={styles.previewVideo}
              useNativeControls={true} // Use native video controls
              resizeMode="contain"
              shouldPlay // Auto-play the video
            />
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
  },
  thumbnailContainer: {
    width: 340,
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Frosted glass background
    backdropFilter: "blur(10px)", // Apply blur effect
    borderRadius: 10,
    paddingBottom: 15,
    marginHorizontal: 7,
    marginBottom: 20,
    // borderColor: "#7FFF7F",
    borderColor: "rgba(255, 255, 255, 0.4)",

    borderWidth: 1,
    overflow: "hidden",
  },
  thumbnailImage: {
    width: "100%",
    height: 150, // Adjust the height to make it a thumbnail
    // borderRadius: 10,
  },
  textContainer: {
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  thumbnailText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  thumbnailText: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  boldText: {
    fontWeight: "bold",
    color: "#aaa",
  },

  descText: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,
    color: "#fff",
    fontSize: 14,
  },

  iconContainer: {
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent white background for icon container
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    alignSelf: "center",
  },

  linkText: {
    color: "#fff",
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 20,
  },
  previewVideo: {
    width: "100%",
    height: "100%",
  },
  stackContainer: {
    marginTop: 10,
    backgroundColor: "#fff", // You can adjust the stack background color
    padding: 10,
    borderRadius: 5,
  },
  stackText: {
    color: "#000",
    fontSize: 14,
  },
});

export default VideoData;
