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
} from "react-native";
import VideoPlayer from "./VideoPlayer";
import LinkPreview from "./VideoPlayer";


  const images = [

    {
      image: require("../assets/images/swiperImage/blank.gif"),
      thumbnailText: "Introduction to A.I",
      desc:"",
      linktoVideo:
        "https://www.youtube.com/watch?v=F9SWESAO-r8&list=PLVkAiMiemh5JhnrdZMkClQ9cDHGI128gR",
    },
    {
      image: require("../assets/images/swiperImage/blank.gif"),
      thumbnailText: "Generative AI",
      desc:"",
      linktoVideo:
        "https://www.youtube.com/playlist?list=PLVkAiMiemh5JO5nOc91mTKn00Cv0psJZI",
    },
    {
      image: require("../assets/images/swiperImage/blank.gif"),
      thumbnailText: "ResponsibleML",
      desc:"",
      linktoVideo:
        "https://www.youtube.com/playlist?list=PLVkAiMiemh5LMM-rjPcn-TcSu1x2nn2dy",
    },
    // Add more image objects as needed
  ];

  const VideoData = () => {
    const [isModalVisible, setModalVisible] = React.useState(false);
    const imageUrl = "https://adobeaero.app.link/EOSgZFhZsCb"; // Replace with your image URL
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  
    const openLink = (link) => {
      // Handle opening the link here
      console.log("Opening link: " + link);
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
      <ScrollView>
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
                        {link.thumbnailText}
                      </Text>
                      <Text style={styles.linkText}>Link: {link.linktoVideo}</Text>
                    </View>
                   
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
  
        {/* Image Preview Modal */}
        <Modal visible={isModalVisible} transparent={true}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <Image
              source={{ uri: imageUrl }}
              style={styles.previewImage}
              resizeMode="contain"
            />
          </View>
        </Modal>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    thumbnailContainer: {
      width: 330,
      backgroundColor: "#424242", // Default light orange background
      alignItems: "center",
      borderRadius: 10,
      paddingBottom: 15,
      marginHorizontal: 7,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: "#414141",
      overflow:"hidden"
    },
    thumbnailImage: {
      width: "100%",
      height: 150, // Adjust the height to make it a thumbnail
      borderRadius: 10,
    },
    textContainer: {
      marginTop: 10,
      
      paddingVertical:15,
      paddingHorizontal:20
    },
    thumbnailText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
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
  