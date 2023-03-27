import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  Text,
  Image,
} from "react-native";
import ContestComponent from "./ContestComponent";
import profile from "../assets/images/profile.jpg";

const ContestData = () => {
  const text = "contributions";
  //add badges and profiles
  const items = [
    {
      profile: profile,
      badge: require("../assets/images/bITMARKFILES/bITMARKFILES/badges/gold_medal.png"),
      name: "Simpsons B",
      status: "Maamamia",
      contributions: `200M ${text}`,
      id: 1,
    },
    {
      profile: profile,
      badge: require("../assets/images/bITMARKFILES/bITMARKFILES/badges/29-Badge.png"),
      name: "Evans Drone",
      status: "Legendary",
      contributions: `100K ${text}`,
      id: 2,
    },
    {
      profile: profile,
      badge: require("../assets/images/bITMARKFILES/bITMARKFILES/badges/08-Trophy.png"),
      name: "Enoch Bi",
      status: "Bossu",
      contributions: `80K ${text}`,
      id: 3,
    },
    {
      profile: profile,
      badge: require("../assets/images/bITMARKFILES/bITMARKFILES/badges/20-Winner.png"),
      name: "Judith H",
      status: "Big Boss",
      contributions: `80K ${text}`,
      id: 4,
    },
    {
      profile: profile,
      badge: require("../assets/images/bITMARKFILES/bITMARKFILES/badges/18-Winner.png"),
      name: "Franklyn F",
      status: "Bossu baako p3",
      contributions: `50K ${text}`,
      id: 5,
    },
    {
      profile: profile,
      badge: require("../assets/images/bITMARKFILES/bITMARKFILES/badges/27-Winner.png"),
      name: "Laureat N",
      status: "Aycaramba",
      contributions: `20K ${text}`,
      id: 6,
    },
    {
      profile: profile,
      badge: require("../assets/images/bITMARKFILES/bITMARKFILES/badges/30-Badge.png"),
      name: "Lordia  A",
      status: "Super pro",
      contributions: `5K ${text}`,
      id: 7,
    },
    {
      profile: profile,
      badge: require("../assets/images/bITMARKFILES/bITMARKFILES/badges/20-Winner.png"),
      name: "Moko Blend",
      status: "Sequence",
      contributions: `2K ${text}`,
      id: 8,
    },
    {
      profile: profile,
      badge: require("../assets/images/bITMARKFILES/bITMARKFILES/badges/14-Medal.png"),
      name: "Nameless",
      status: "Super",
      contributions: `1K ${text}`,
      id: 8,
    },
    {
      profile: profile,
      badge: require("../assets/images/bITMARKFILES/bITMARKFILES/badges/13-Medal.png"),
      name: "Andriod H",
      status: "Rocket",
      contributions: `200 ${text}`,
      id: 8,
    },
  ];
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#F7F3A6",
          alignSelf: "center",
          fontSize: 30,
          fontWeight: 800,
          marginVBottom: 10,
          marginTop: 32
        }}
      >
        LeaderBoard
      </Text>
      <Text
        style={{
          color: "#fff",
          alignSelf: "center",
          fontSize: 15,
          fontWeight: 300,
          marginTop: -3,
          marginBottom: 10,
        }}
      >
        Amazing contributions and contributors
      </Text>
      <Image
        source={require('../assets/images/bITMARKFILES/bITMARKFILES/badges/grandprix_trophy.png')}
        style={styles.imageLogo}
      />
      <FlatList
        data={items}
        renderItem={({ item }) => {
          //console.log(item);
          return (
            <ContestComponent
              badge={item.badge}
              profile={item.profile}
              name={item.name}
              status={item.status}
              contributions={item.contributions}
            />
          );
        }}
        keyExtractor={(item, index) => {
          item.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#1A1A1A",
    width: 400,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 20,
    zIndex: -999,
  },

  imageLogo: {
    alignSelf: "center",
    width: 70,
    height: 70,
    marginTop: 10,
    marginBottom: 8,
  },
});

export default ContestData;
