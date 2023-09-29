import React from "react";
import { ScrollView, Text } from "react-native";
import { View, StyleSheet, TouchableOpacity,Image } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Options from "./Options";

const FillInTheBlanksData = () => {
  return (
    <ScrollView>
      <View>
        <Options/>

        <View style={styles.questionBox}>
          <Text style={styles.questionText}>Q</Text>
          <Fontisto
            name="question"
            size={12}
            color="#F7F3A6"
            style={{ alignSelf: "flex-end", position: "absolute", top: 15,left:300 }}
          />
          <View style={{flexDirection: 'row',justifyContent:'center'}}>
          <View style={styles.anwerBtn}>
          </View>
          <View style={styles.anwerBtn}>
          </View>

          <View style={styles.anwerBtn}>
          </View>
          </View>
          <View style={{flexDirection: 'row',justifyContent:'center'}}>
          <View style={styles.anwerBtn}>
          </View>
          <View style={styles.anwerBtn}>
          </View>

          <View style={styles.anwerBtn}>
          </View>
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
              borderColor: "#F7F3A6",
              borderWidth: 1
            }}
          >
            1/5
          </Text>
        </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent:'space-evenly'}}>
         
          <View style={styles.choiceBtn}>
            <Text style={{color:'#fff',alignSelf: 'center'}}>THE OLD</Text>
          </View>

          <View style={styles.choiceBtn}>
            <Text style={{color:'#fff',alignSelf: 'center'}}> QUICK BROWN</Text>
          </View>
          </View>
          <View style={{flexDirection: 'row',justifyContent:'space-evenly'}}>
          <View style={styles.choiceBtn}>
            <Text style={{color:'#fff',alignSelf: 'center'}}>THE</Text>
          </View>
          <View style={styles.choiceBtn}>
            <Text style={{color:'#fff',alignSelf: 'center'}}>FOX IS</Text>
          </View>

          <View style={styles.choiceBtn}>
            <Text style={{color:'#fff',alignSelf: 'center'}}>CUNNING</Text>
          </View>
          </View>

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

export default FillInTheBlanksData;
