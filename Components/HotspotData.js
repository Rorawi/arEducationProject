import React from "react";
import { ScrollView, Text } from "react-native";
import { View, StyleSheet, TouchableOpacity,Image } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Options from "./Options";

const HotspotData = () => {
  return (
    <ScrollView>
      <View>
        <Options/>
        <Text>Hotspot Data here</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({

  

  questionBox: {
    width: 333,
    height: 240,
    backgroundColor: "#000",
    borderRadius: 20,
    alignSelf: "center",
    paddingTop: 20,
    paddingHorizontal: 15,
    marginBottom: 20,
  },

  questionText: {
    fontSize: 24,
    color: "#fff",
  },

  subTopic: {
    alignSelf: 'flex-start',
  },

  anwerBtn: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#F7F3A6",
    borderWidth: 2,
    marginBottom: 14,
    width: 85,
    height: 48
  },
  choiceBtn: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#000",
    borderWidth: 2,
    marginBottom: 14,
    height: 48,
    padding:5
  },
});

export default HotspotData;
