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
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Options from "./Options";

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
        <Options/>
        <View style={styles.detailsBox}>
          <Text style={styles.title}>Identify the scene</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginBottom: 40,
          }}
        >
          {/* <View style={styles.container}> */}
            <View style={styles.cardContainer}>
              <Animated.View
                style={[styles.card, styles.frontCard, frontAnimatedStyle]}
              >
                <Image source={plane} style={styles.img} />
                <View style={{marginTop: 50}}>
            <TouchableOpacity style={styles.anwerBtn} onPress={()=>{
               flipCard();
               console.log("Clicked");
            }}>
            <Text style={{ color: "#fff", alignSelf: "center",fontSize:24 }}>True</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.anwerBtn}>
            <Text style={{ color: "#fff", alignSelf: "center",fontSize:24 }}>False</Text>
          </TouchableOpacity>
          </View>
              </Animated.View>
              <Animated.View
                style={[styles.backcard, styles.backCard,styles.cardContainer, backAnimatedStyle]}
              >
                <Image source={plane} style={[styles.img, { height: 269,zIndex:-1 }]} />
                  <Text style={{color:'#fff'}}>
                  <Text style={{color:'#F7F3A6'}}>Airport</Text>, also called air terminal, aerodrome, or airfield,
                    site and installation for the takeoff and landing of
                    aircraft
                  </Text>
                <TouchableOpacity
                  // onPress={() => {
                  //   flipCard();
                  //   console.log("Clicked");
                  // }}

                  style={{justifyContent:'flex-end'}}
                >
                  <Text style={[styles.cardText, { alignSelf: "center" }]}>
                    Back To Question
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        </View>
      {/* </View> */}
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
