import React from "react";
import { ScrollView, Text } from "react-native";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Fontisto,MaterialCommunityIcons } from "@expo/vector-icons";
import Options from "./Options";

const SwipeCardData = () => {
  return (
    <ScrollView>
      <View>
       <Options/>

        <View style={styles.questionCircle}>
          <Fontisto
            name="question"
            size={24}
            color="#F7F3A6"
            style={{ alignSelf: "center", position: "absolute", top: 30 }}
          />
        </View>

        <View style={styles.questionBox}>
          <Text style={styles.questionText}>Question maybe from the API</Text>
          <TouchableOpacity style={styles.anwerBtn}>
            <Text style={{ color: "#fff", alignSelf: "center" }}>True</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.anwerBtn}>
            <Text style={{ color: "#fff", alignSelf: "center" }}>False</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              backgroundColor: "#000",
              alignSelf: "center",
              paddingHorizontal: 40,
              paddingVertical: 10,
              borderRadius: 25,
              marginBottom: 10,
            }}
          >
            1/5
          </Text>
        </View>
      </View>
    </ScrollView>
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

  questionCircle: {
    backgroundColor: "#000",
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: "center",
    alignSelf: "center",
    zIndex: -1,
  },

  questionBox: {
    width: 333,
    height: 378,
    backgroundColor: "#000",
    borderRadius: 20,
    alignSelf: "center",
    paddingTop: 20,
    paddingHorizontal: 15,
    marginTop: -50,
    marginBottom: 20,
  },

  questionText: {
    fontSize: 24,
    color: "#fff",
    height: 170,
  },

  anwerBtn: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 20,
    borderColor: "#F7F3A6",
    borderWidth: 2,
    marginBottom: 14,
  },
});

export default SwipeCardData;
