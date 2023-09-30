import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ReadMeComponent = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>LearnAr</Text>
        <Text style={styles.subtitle}>Your App's Slogan or Description</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionText}>
          Welcome to My Awesome App! This app is designed to...
          {/* Add a brief description of your app here */}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compatibility</Text>
        <Text style={styles.sectionText}>
          Your device must meet the minimum technical specifications to run and
          use Adobe Aero mobile (iOS) and Adobe Aero Player (beta) on Android.
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
          <Text style={styles.device}>- iPad Air 3rd generation and above</Text>
          <Text style={styles.device}>- iPad Pro 2nd generation and above</Text>
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
        <Text style={styles.sectionTitle}>Installation</Text>
        <Text style={styles.sectionText}>
          To get started with My Awesome App, follow these simple steps:
        </Text>
        <Text style={styles.step}>
          1. Download and install the app from the App Store or Google Play
          Store.
        </Text>
        <Text style={styles.step}>2. Launch the app on your device.</Text>
        <Text style={styles.step}>
          3. Sign in or create an account to access all the features.
        </Text>
        {/* Add more installation steps as needed */}
      </View>

      {/* Add more sections like Features, Usage, Troubleshooting, etc. as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent dark background
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Frosted glass background
    borderRadius: 10,
    padding: 16,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF", // White text
  },
  subtitle: {
    fontSize: 16,
    color: "#CCCCCC", // Light gray text
    marginTop: 8,
  },
  section: {
    marginBottom: 24,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    padding: 16,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  deviceList: {
    marginLeft: 16,
  },
  device: {
    fontSize: 16,
    color: "#CCCCCC",
    marginTop: 4,
  },
  step: {
    fontSize: 16,
    color: "#CCCCCC",
    marginLeft: 16,
    marginTop: 4,
  },
});

export default ReadMeComponent;
