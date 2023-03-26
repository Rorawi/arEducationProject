import React, { useRef, useState } from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, Animated,ScrollView } from 'react-native';


const FlipCardData = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipAnim = useRef(new Animated.Value(0)).current;
  
    const flipCard = () => {
        Animated.timing(flipAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          // flip the card back over
          if (flipAnim === 1) {
            setFlipAnimationValue(0);
          }
        });
      };
    const frontInterpolate = flipAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '90deg', '180deg'],
    });
  
    const backInterpolate = flipAnim.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['180deg', '270deg', '360deg'],
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
  
          <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity style={styles.cardContainer}>
    <Animated.View
      style={[
        styles.card,
        styles.frontCard,
        frontAnimatedStyle,
        {
          transform: [
            {
              rotateY: flipAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '180deg'],
              }),
            },
          ],
        },
      ]}
    >
      {/* <Image source={}/>  */}
      <Text style={styles.cardText}>Front of Card</Text>
      <TouchableOpacity onPress={flipCard}>
        <Text>False</Text>
      </TouchableOpacity>
    </Animated.View>

    <Animated.View
      style={[
        styles.card,
        styles.backCard,
        backAnimatedStyle,
        {
          transform: [
            {
              rotateY: flipAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['180deg', '360deg'],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.cardText}>Back of Card</Text>
    </Animated.View>
  </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    width: 200,
    height: 200,
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
  },
  frontCard: {
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backCard: {
    backgroundColor: '#00bcd4',
    transform: [{ rotateY: '180deg' }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
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
});

export default FlipCardData   

