import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";

const MyBadgeData = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.badgeBox}>
          <View
            style={{
              backgroundColor: "#fff",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/lottie/you-won.gif")}
              style={{
                width: 145,
                height: 150,
                alignSelf: "center",
                marginTop: -20,
              }}
            />
          </View>
          <View
            style={{
              marginTop: 150,
            }}
          >
            <Text style={styles.title}>Quiz Progress</Text>
            <Text
              style={{
                color: "#FFFFFF",
                alignSelf: "center",
                fontSize: 12,
                fontWeight: 400,
                textAlign:'center'
              }}
            >
              You’re a top contributor with 206,070,580 contributions made.
            </Text>
            <Image
              source={require("../assets/images/profile.jpg")}
              style={{
                width: 91,
                height: 91,
                borderRadius: 45,
                marginTop: 10,
                alignSelf: "center",
                borderColor: "#F7F3A6",
                borderWidth: 4,
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                alignSelf: "center",
                marginTop: 20,
              }}
            >
              Simpsons B
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <View
                style={{
                  borderLeftWidth: 2,
                  borderRightWidth: 1,
                  borderColor: "#F7F3A6",
                  paddingHorizontal: 20,
                }}
              >
                <Image
                  source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/29-Badge.png")}
                  style={{ width: 65, height: 65 }}
                />
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.text}> 8</Text>
                  <Text style={styles.text}>Activities</Text>
                </View>
              </View>
              <View
                style={{
                  borderLeftWidth: 1,
                  borderRightWidth: 2,
                  borderColor: "#F7F3A6",
                  paddingHorizontal: 20,
                }}
              >
                <Image
                  source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/13-Medal.png")}
                  style={{ width: 65, height: 65, alignSelf: "center" }}
                />
                <View style={{ flexDirection: "column" }}>
                  <Text style={styles.text}> 200M +</Text>
                  <Text style={styles.text}>Contributions</Text>
                </View>
              </View>
            </View>

            <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <View>
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/gold_medal.png")}
              style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                marginBottom: 5,
              }}
            />
            <Text style={styles.smallText}>100%</Text>
            <Text style={styles.smallText}>Completion</Text>
          </View>
          <View>
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/gold_medal.png")}
              style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                marginBottom: 5,
              }}
            />
            <Text style={styles.smallText}>#1/4</Text>
            <Text style={styles.smallText}>Ranking</Text>
          </View>

          <View>
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/13-Medal.png")}
              style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                marginBottom: 5,
              }}
            />
            <Text style={styles.smallText}>90%</Text>
            <Text style={styles.smallText}>Pronounciation</Text>
          </View>
        </View>
            <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <View>
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/15-Medal.png")}
              style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                marginBottom: 5,
              }}
            />
            <Text style={styles.smallText}>Highest</Text>
            <Text style={styles.smallText}>completion rate</Text>
          </View>
          <View>
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/grandprix_trophy.png")}
              style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                marginBottom: 5,
              }}
            />
            <Text style={styles.smallText}>Senior</Text>
            <Text style={styles.smallText}>Achiever</Text>
          </View>

          <View>
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/03-Award.png")}
              style={{
                width: 40,
                height: 40,
                alignSelf: "center",
                marginBottom: 5,
              }}
            />
            <Text style={styles.smallText}>Overall</Text>
            <Text style={styles.smallText}>Ratings</Text>
          </View>
        </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1A1A1A",
    width: 400,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 20,
    zIndex: -999,
  },

  badgeBox: {
    marginTop: 30,
    width: 346,
    backgroundColor: "#1A1A1A",
    borderColor: "#F7F3A6",
    borderWidth: 2,
    padding: 20,
    borderRadius: 30,
    marginBottom: 30,
    overflow: "hidden",
  },

  title: {
    color: "#F7F3A6",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: 800,
    marginVertical: 10,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    alignSelf: "center",
  },

  smallText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 900,
    alignSelf: "center",
    textAlign:'center'
  },

  profile: {
    width: 20,
    height: 20,
    borderRadius: 60,
    borderColor: "#F7F3A6",
    borderWidth: 4,
    marginRight: 20,
  },
});

export default MyBadgeData;
