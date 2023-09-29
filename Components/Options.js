import React from "react";
import { Text } from "react-native";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Options = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 40,
        }}
      >
        <View style={styles.progressBox}>
          <Text style={[styles.coloredText, styles.topic]}>
            Select Language
          </Text>
          <View style={{ top: 12 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Image
                  source={require("../assets/images/uk1.png")}
                  style={{ top: 1 }}
                />
                <Text style={{ color: "#fff", textAlign: "center" }}>UK</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <MaterialCommunityIcons
                  name="menu-left"
                  size={26}
                  color="#F7F3A6"
                  style={{
                    marginRight: -7,
                  }}
                />
                <MaterialCommunityIcons
                  name="menu-right"
                  size={26}
                  color="#F7F3A6"
                  style={{
                    marginLeft: -7,
                  }}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Image
                  source={require("../assets/images/gem.png")}
                  style={{ top: 1 }}
                />
                <Text style={{ color: "#fff", textAlign: "center" }}>UK</Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Image
                  source={require("../assets/images/gem.png")}
                  style={{ top: 1 }}
                />
                <Text style={{ color: "#fff", textAlign: "center" }}>UK</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <MaterialCommunityIcons
                  name="menu-left"
                  size={26}
                  color="#F7F3A6"
                  style={{
                    marginRight: -7,
                  }}
                />
                <MaterialCommunityIcons
                  name="menu-right"
                  size={26}
                  color="#F7F3A6"
                  style={{
                    marginLeft: -7,
                  }}
                />
              </View>
              <View style={{ flexDirection: "column" }}>
                <Image
                  source={require("../assets/images/uk.png")}
                  style={{ top: 1 }}
                />
                <Text style={{ color: "#fff", textAlign: "center" }}>UK</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.progressBox}>
          <Text style={[styles.coloredText, styles.topic]}>Progress</Text>
          <View>
            <View
              style={[
                { flexDirection: "row", marginBottom: 5 },
                styles.subTopic,
              ]}
            >
              <Text style={[styles.coloredText]}>Badges:</Text>
              <Text style={{ color: "#fff", marginLeft: 10 }}>8/100</Text>
            </View>

            <View
              style={[
                { flexDirection: "row", marginBottom: 5 },
                styles.subTopic,
              ]}
            >
              <Text style={[styles.coloredText]}>Corrects:</Text>
              <Text style={{ color: "#fff", marginLeft: 10 }}>8/100</Text>
            </View>

            <View
              style={[
                { flexDirection: "row", marginBottom: 5 },
                styles.subTopic,
              ]}
            >
              <Text style={[styles.coloredText]}>Retakes:</Text>
              <Text style={{ color: "#fff", marginLeft: 10 }}>8/100</Text>
            </View>

            <View
              style={[
                { flexDirection: "row", marginBottom: 5 },
                styles.subTopic,
              ]}
            >
              <Text style={[styles.coloredText]}>Completion:</Text>
              <Text style={{ color: "#fff", marginLeft: 10 }}>60%</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 7 }}>
            <TouchableOpacity>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 12,
                  color: "#F7F3A6",
                }}
              >
                View Badges
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBox: {
    width: 185,
    height: 187,
    borderRadius: 30,
    backgroundColor: "#000",
    padding: 15,
    alignItems: "center",
    marginHorizontal: 7,
  },

  topic: {
    fontWeight: 700,
    fontSize: 16,
    marginBottom: 8,
  },

  coloredText: {
    color: "#F7F3A6",
  },
});

export default Options;
