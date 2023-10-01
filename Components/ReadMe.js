import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import wallpaper from "../assets/images/swiperImage/wbg1.png";
import aricon from "../assets/images/swiperImage/aricon.png";
import { Image } from "react-native";
import { useFonts } from "expo-font";

const ReadMeComponent = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("../assets/PoppinsFont/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ImageBackground source={wallpaper} resizeMode="cover">
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={aricon} style={styles.image} />

          <Text style={styles.title}>LearnAr</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.device}>
            LearnAR app is designed to view an interactive interface for an
            immersive interaction with scientific (biology) parts.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Compatibility</Text>
          <Text style={styles.device}>
            Your device must meet the minimum technical specifications to run
            and use Adobe Aero mobile (iOS) and Adobe Aero Player (beta) on
            Android.
          </Text>
          <Text style={styles.sectionText}>
            Supported devices for Adobe Aero mobile (iOS)
          </Text>
          <View style={styles.deviceList}>
            <Text style={styles.device}>- iPhone X and above</Text>
            <Text style={styles.device}>- iPad 8th generation and above</Text>
            <Text style={styles.device}>
              - iPad mini 5th generation and above
            </Text>
            <Text style={styles.device}>
              - iPad Air 3rd generation and above
            </Text>
            <Text style={styles.device}>
              - iPad Pro 2nd generation and above
            </Text>
            {/* Add more devices as needed */}
          </View>

          <Text style={styles.sectionText}>
            Supported devices for Adobe Aero Player (beta) on Android
          </Text>
          <View style={styles.deviceList}>
            <Text style={styles.device}>- Samsung Galaxy S22</Text>
            <Text style={styles.device}>- Samsung Galaxy S21</Text>
            <Text style={styles.device}>- Google Pixel 7</Text>
            <Text style={styles.device}>- Google Pixel 6</Text>
            {/* Add more devices as needed */}
          </View>

          <Text style={styles.sectionText}>OTHER REQUIREMENTS</Text>
          <View style={styles.deviceList}>
            <Text style={styles.device}>
              - Network: Requires an internet connection
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How to Use</Text>
          <Text style={styles.sectionText}>
            To get started with LearnAR, follow these simple steps:
          </Text>
          <Text style={styles.step}>
            1. Click on the card to view the interface.
          </Text>
          <Text style={styles.step}>
            2. For the qr code, click on the qr code button for others to scan.
          </Text>

          {/* Add more installation steps as needed */}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Note</Text>
          <Text style={styles.device}>
            The project's interaction is a product of Adobe Aero; therefore the app is not responsible for any damages caused in the project.
          </Text>
        </View>

        {/* Add more sections like Features, Usage, Troubleshooting, etc. as needed */}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  container: {
    // flex: 1,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderRadius: 10,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // White text
    fontFamily: "Poppins-Black",
  },
  subtitle: {
    fontSize: 16,
    color: "#CCCCCC", // Light gray text
    marginTop: 8,
    fontFamily: "Poppins-Black",
  },
  section: {
    marginBottom: 24,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    padding: 16,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    fontFamily: "Poppins-Black",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
    fontFamily: "Poppins-Black",
  },
  sectionText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    fontFamily: "Poppins-Black",
  },
  deviceList: {
    marginLeft: 16,
  },
  device: {
    fontSize: 14,
    color: "#ddd",
    marginTop: 4,
    fontFamily: "Poppins-Black",
  },
  step: {
    fontSize: 16,
    color: "#CCCCCC",
    marginLeft: 16,
    marginTop: 4,
    fontFamily: "Poppins-Black",
  },
});

export default ReadMeComponent;
