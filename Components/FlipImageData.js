import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
} from "react-native";
import plane from "../assets/images/nightflight.jpg";
import { MaterialCommunityIcons} from '@expo/vector-icons'

const FlipCardData = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnim = useRef(new Animated.Value(0)).current;

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    Animated.spring(flipAnim, {
      toValue: isFlipped ? 0 : 1,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "90deg", "180deg"],
  });

  const backInterpolate = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["180deg", "270deg", "360deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <ScrollView>
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
           <View style={{top:12}}>
           <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
            <Image source={require('../assets/images/uk1.png')} style={{top:1}}/>
            <Text style={{color:'#fff',textAlign:'center'}}>UK</Text>
            </View>
           <View style={{flexDirection:'row',justifyContent:'center',}}>
            <MaterialCommunityIcons name="menu-left" size={26} color="#F7F3A6" style={{
              marginRight: -7
            }}/>
            <MaterialCommunityIcons name="menu-right" size={26} color="#F7F3A6" style={{
              marginLeft: -7
            }}/>
            </View>
            <View style={{flexDirection:'column'}}>
            <Image source={require('../assets/images/gem.png')} style={{top:1}}/>
            <Text style={{color:'#fff',textAlign:'center'}}>DE</Text>
            </View>
           </View>
           
           <View style={{flexDirection:'row'}}>
           <View style={{flexDirection:'column'}}>
            <Image source={require('../assets/images/gem.png')} style={{top:1}}/>
            <Text style={{color:'#fff',textAlign:'center'}}>DE</Text>
            </View>
           <View style={{flexDirection:'row',justifyContent:'center',}}>
            <MaterialCommunityIcons name="menu-left" size={26} color="#F7F3A6" style={{
              marginRight: -7
            }}/>
            <MaterialCommunityIcons name="menu-right" size={26} color="#F7F3A6" style={{
              marginLeft: -7
            }}/>
            </View>
            <View style={{flexDirection:'column'}}>
            <Image source={require('../assets/images/uk.png')} style={{top:1}}/>
            <Text style={{color:'#fff',textAlign:'center'}}>UK</Text>
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

        <View style={styles.detailsBox}>
          <Text style={styles.title}>Identify the scene</Text>
        </View>

        

       </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width: 333,
    height: 440,
    shadowColor: "#171717",
    elevation: 10,
  },
  card: {
    backfaceVisibility: "hidden",
  },
  backcard: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
  },
  frontCard: {
    width: 333,
    height: 440,
    backgroundColor: "#000",
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 15,
    marginBottom: 20,
    overflow: "hidden",
  },

  img: {
    width: 333,
    height: 177,
    alignSelf: "center",
  },

  backCard: {
    transform: [{ rotateY: "180deg" }],
    width: 333,
    height: 240,
    backgroundColor: "#000",
    borderRadius: 20,
    alignSelf: "center",
    paddingHorizontal: 15,
    marginBottom: 20,
    overflow: "hidden",
  },
  cardText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },

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

  detailsBox: {
    width: 294,
    backgroundColor: "#000",
    borderRadius: 20,
    alignSelf: "center",
    padding: 30,
    marginBottom: 20,
  },

  title: {
    color: "#F7F3A6",
    alignSelf: "center",
    fontSize: 24,
    fontWeight: 800,
  },

 answerBtn: {
  paddingVertical: 25
 },

 anwerBtn: {
  paddingVertical: 20,
  paddingHorizontal: 16,
  borderRadius: 20,
  borderColor: "#F7F3A6",
  borderWidth: 2,
  marginBottom: 14,
  height:72
},
});

export default FlipCardData;
