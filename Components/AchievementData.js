import React from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const AchievementData = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.summaryBox}>
          <Text style={styles.title}>Your Summary</Text>
          <Text
            style={{
              color: "#FFFFFF",
              alignSelf: "center",
              fontSize: 12,
              fontWeight: 400,
            }}
          >
            This is a summary of your statistics; rank,contributions,badges,
            quizzes taken taken etc
          </Text>
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
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/03-Award.png")}
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
            <Text style={styles.smallText}>100%</Text>
            <Text style={styles.smallText}>Completion</Text>
          </View>
        </View>

        <View>
          <View>
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/grandprix_trophy.png")}
              style={{
                width: 100,
                height: 100,
                marginTop: 50,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                color: "#F7F3A6",
                alignSelf: "center",
                fontSize: 30,
                fontWeight: 800,
                marginVertical: 10,
              }}
            >
              Your Summary
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                alignSelf: "center",
                fontSize: 12,
                fontWeight: 400,
              }}
            >
              Highest completion rate
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <Text style={{ color: "#fff", marginRight: 5 }}>#1</Text>
              <Image
                source={require("../assets/images/profile.jpg")}
                style={styles.profile}
              />
              <Text style={{ color: "#F7F3A6" }}>Simpsons</Text>
            </View>

            <Text style={{ color: "#F7F3A6" }}>100%</Text>
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/15-Medal.png")}
              style={styles.imageBadge}
            />
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <Text style={{ color: "#fff", marginRight: 5 }}>#2</Text>
              <Image
                source={require("../assets/images/profile.jpg")}
                style={styles.profile}
              />
              <Text style={{ color: "#F7F3A6" }}>Simpsons</Text>
            </View>

            <Text style={{ color: "#F7F3A6" }}>95%</Text>
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/16-Medal.png")}
              style={styles.imageBadge}
            />
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <Text style={{ color: "#fff", marginRight: 5 }}>#3</Text>
              <Image
                source={require("../assets/images/profile.jpg")}
                style={styles.profile}
              />
              <Text style={{ color: "#F7F3A6" }}>Simpsons</Text>
            </View>

            <Text style={{ color: "#F7F3A6" }}>85%</Text>
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/17-Medal.png")}
              style={styles.imageBadge}
            />
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={{ flexDirection: "row", marginBottom: 12 }}>
              <Text style={{ color: "#fff", marginRight: 5 }}>#4</Text>
              <Image
                source={require("../assets/images/profile.jpg")}
                style={styles.profile}
              />
              <Text style={{ color: "#F7F3A6" }}>Simpsons</Text>
            </View>

            <Text style={{ color: "#F7F3A6" }}>79%</Text>
            <Image
              source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/13-Medal.png")}
              style={styles.imageBadge}
            />
          </View>
        </View>

        <View style={styles.acknowledgeBox}>
          <Text style={styles.title}>Acknowledgment</Text>
          <Text
            style={{
              color: "#FFFFFF",
              alignSelf: "center",
              fontSize: 12,
              fontWeight: 400,
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
                source={require("../assets/images/bITMARKFILES/bITMARKFILES/badges/13-Medal.png")}
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
          <TouchableOpacity>
            <Text
              style={{
                alignSelf: "center",
                marginTop: 20,
                fontSize: 18,
                color: "#F7F3A6",
              }}
            >
              View Badges
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.acknowledgeBox}>
          <Text style={styles.title}>Quiz Progress</Text>
          <Text
            style={{
              color: "#FFFFFF",
              alignSelf: "center",
              fontSize: 12,
              fontWeight: 400,
            }}
          >
            Supports, contribution and assistance given to the community{" "}
          </Text>

          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:'center',marginBottom: 15}}>
              <View>
                <Text style={{fontSize: 15,color:'#FFFFFF'}}>Flipcard</Text>
                <Text style={{color:'#F7F3A6',fontSize: 12}}>Inactive for 100 days</Text>
              </View>

              <TouchableOpacity style={styles.quizBtn}>
                <Text style={{alignSelf: 'center',fontSize:12}}>Continue 30%</Text>
              </TouchableOpacity>
          </View>


          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:'center',marginBottom: 15}}>
              <View>
                <Text style={{fontSize: 15,color:'#FFFFFF'}}>Scratchcard</Text>
                <Text style={{color:'#F7F3A6',fontSize: 12}}>Inactive for 10 days</Text>
              </View>

              <TouchableOpacity style={styles.quizBtn}>
                <Text style={{alignSelf: 'center',fontSize:12}}>Continue 10%</Text>
              </TouchableOpacity>
          </View>


          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:'center',marginBottom: 15}}>
              <View>
                <Text style={{fontSize: 15,color:'#FFFFFF'}}>Sequencing</Text>
                <Text style={{color:'#F7F3A6',fontSize: 12}}>Inactive for 12 days</Text>
              </View>

              <TouchableOpacity style={styles.quizBtn}>
                <Text style={{alignSelf: 'center',fontSize:12}}>Continue 30%</Text>
              </TouchableOpacity>
          </View>


          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:'center',marginBottom: 15}}>
              <View>
                <Text style={{fontSize: 15,color:'#FFFFFF'}}>Sorting</Text>
                <Text style={{color:'#F7F3A6',fontSize: 12}}>Inactive for 0 days</Text>
              </View>

              <TouchableOpacity style={styles.quizBtn}>
                <Text style={{alignSelf: 'center',fontSize:12}}>Retake 100%</Text>
              </TouchableOpacity>
          </View>

          
          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:'center',marginBottom: 15}}>
              <View>
                <Text style={{fontSize: 15,color:'#FFFFFF'}}>True/False</Text>
                <Text style={{color:'#F7F3A6',fontSize: 12}}>Inactive for 100 days</Text>
              </View>

              <TouchableOpacity style={styles.quizBtn}>
                <Text style={{alignSelf: 'center',fontSize:12}}>Continue 1%</Text>
              </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:'center',marginBottom: 15}}>
              <View>
                <Text style={{fontSize: 15,color:'#FFFFFF'}}>Fill in the blanks</Text>
                <Text style={{color:'#F7F3A6',fontSize: 12}}>Inactive for 19 days</Text>
              </View>

              <TouchableOpacity style={styles.quizBtn}>
                <Text style={{alignSelf: 'center',fontSize:12}}>Continue 30%</Text>
              </TouchableOpacity>
          </View>


          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:'center',marginBottom: 15}}>
              <View>
                <Text style={{fontSize: 15,color:'#FFFFFF',width:120}}>Short Answers/pronounciations</Text>
                <Text style={{color:'#F7F3A6',fontSize: 12}}>Inactive for 80 days</Text>
              </View>

              <TouchableOpacity style={styles.quizBtn}>
                <Text style={{alignSelf: 'center',fontSize:12}}>Continue 50%</Text>
              </TouchableOpacity>
          </View>


          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:'center',marginBottom: 15}}>
              <View>
                <Text style={{fontSize: 15,color:'#FFFFFF'}}>Drag & Drop</Text>
                <Text style={{color:'#F7F3A6',fontSize: 12}}>Inactive for 33 days</Text>
              </View>

              <TouchableOpacity style={styles.quizBtn}>
                <Text style={{alignSelf: 'center',fontSize:12}}>Continue 3%</Text>
              </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems:'center',marginBottom: 15}}>
              <View>
                <Text style={{fontSize: 15,color:'#FFFFFF'}}>Hotspot</Text>
                <Text style={{color:'#F7F3A6',fontSize: 12}}>Inactive for 33 days</Text>
              </View>

              <TouchableOpacity style={styles.quizBtn}>
                <Text style={{alignSelf: 'center',fontSize:12}}>Continue 3%</Text>
              </TouchableOpacity>
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

  summaryBox: {
    marginTop: 30,
    width: 346,
    height: 191,
    backgroundColor: "#1A1A1A",
    borderColor: "#F7F3A6",
    borderWidth: 2,
    padding: 20,
    borderRadius: 30,
  },

  acknowledgeBox: {
    marginTop: 30,
    width: 346,
    backgroundColor: "#1A1A1A",
    borderColor: "#F7F3A6",
    borderWidth: 2,
    padding: 20,
    borderRadius: 30,
    marginBottom: 30,
  },

  title: {
    color: "#F7F3A6",
    alignSelf: "center",
    fontSize: 30,
    fontWeight: 800,
    marginVertical: 10,
  },

  smallText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: 900,
    alignSelf: "center",
  },

  profile: {
    width: 20,
    height: 20,
    borderRadius: 60,
    borderColor: "#F7F3A6",
    borderWidth: 1,
    marginRight: 20,
  },

  imageBadge: {
    width: 20,
    height: 20,
  },

  text: {
    color: "#fff",
    fontSize: 16,
    alignSelf: "center",
  },

  quizBtn: {
    backgroundColor: '#F7F3A6',
    alignItems: 'center',
    paddingHorizontal:15,
    paddingVertical: 8,
    borderRadius: 6
  },
});

export default AchievementData;
