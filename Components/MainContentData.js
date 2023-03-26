import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { Image } from "react-native";
import fill from "../assets/images/swiperImage/blank.gif";
import sorting from "../assets/images/swiperImage/sorting.gif";
import flip2 from "../assets/images/swiperImage/flip2.gif";
import flip from "../assets/images/swiperImage/flip.gif";
import scratch from "../assets/images/swiperImage/scratch.gif";
import hotspot from "../assets/images/swiperImage/hotspot.gif";
import TOD from "../assets/images/swiperImage/TOD.gif";
import pronounce from "../assets/images/swiperImage/pronounce.gif";
import Sequencing from "../assets/images/swiperImage/Sequencing.gif";
import { useNavigation } from "@react-navigation/native";
const MainContentData = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
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
          <Text style={styles.title}>Challenges</Text>
          <Text
            style={{
              width: 223,
              height: 57,
              fontSize: 16,
              fontWeight: 400,
              color: "#fff",
              textAlign: "center",
              alignSelf: "center",
            }}
          >
            Scroll to select quizzes to challenge your language learning
            experience
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Swiper
            showsButtons={false}
            showsPagination={false}
            style={{ height: 316 }}
          >
            <TouchableOpacity
              style={{ alignItems: "center", overflow: "hidden" }}
              onPress={() => {
                navigation.navigate("FillInTheBlanks");
              }}
            >
              <View style={styles.challenges}>
                <View style={styles.slide1}>
                  <Image source={fill} style={styles.img} />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={styles.text}>Fill In the blanks</Text>
                    <Text style={styles.subText}>
                      Learn by dragging and dropping the correct answers into
                      the blanks.
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center", overflow: "hidden" }}
              onPress={() => {
                navigation.navigate("FillInTheBlanks");
              }}
            >
              <View style={styles.challenges}>
                <View style={styles.slide1}>
                  <Image source={sorting} style={styles.img} />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={styles.text}>Sorting</Text>
                    <Text style={styles.subText}>Learn by sorting images</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center", overflow: "hidden" }}
              onPress={() => {
                navigation.navigate("FillInTheBlanks");
              }}
            >
              <View style={styles.challenges}>
                <View style={styles.slide1}>
                  <Image source={pronounce} style={styles.img} />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={styles.text}>Pronunciation</Text>
                    <Text style={styles.subText}>
                      Learn by pronouncing text that that appear.
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center", overflow: "hidden" }}
              onPress={() => {
                navigation.navigate("FillInTheBlanks");
              }}
            >
              <View style={styles.challenges}>
                <View style={styles.slide1}>
                  <Image source={scratch} style={styles.img} />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={styles.text}>Scratch Card</Text>
                    <Text style={styles.subText}>
                      Learn by pronouncing text that that appear.
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center", overflow: "hidden" }}
              onPress={() => {
                navigation.navigate("FillInTheBlanks");
              }}
            >
              <View style={styles.challenges}>
                <View style={styles.slide1}>
                  <Image source={Sequencing} style={styles.img} />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={styles.text}>Sequencing</Text>
                    <Text style={styles.subText}>
                      Learn by pronouncing text that that appear.
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center", overflow: "hidden" }}
              onPress={() => {
                navigation.navigate("TOD");
              }}
            >
              <View style={styles.challenges}>
                <View style={styles.slide1}>
                  <Image source={TOD} style={styles.img} />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={styles.text}>True/False</Text>
                    <Text style={styles.subText}>
                      Learn by answering questions.
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center", overflow: "hidden" }}
              onPress={() => {
                navigation.navigate("FillInTheBlanks");
              }}
            >
              <View style={styles.challenges}>
                <View style={styles.slide1}>
                  <Image source={hotspot} style={styles.img} />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={styles.text}>Hotspot</Text>
                    <Text style={styles.subText}>
                      Learn by observing descriptions of scene / objects.
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ alignItems: "center", overflow: "hidden" }}
              onPress={() => {
                navigation.navigate("FillInTheBlanks");
              }}
            >
              <View style={styles.challenges}>
                <View style={styles.slide1}>
                  <Image source={flip2} style={styles.img} />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={styles.text}>FlipCard</Text>
                    <Text style={styles.subText}>
                      Learn by observing descriptions of scene / objects.
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>


            <TouchableOpacity
              style={{ alignItems: "center", overflow: "hidden" }}
              onPress={() => {
                navigation.navigate("FillInTheBlanks");
              }}
            >
              <View style={styles.challenges}>
                <View style={styles.slide1}>
                  <Image source={flip} style={styles.img} />
                  <View
                    style={{ justifyContent: "center", alignItems: "center" }}
                  >
                    <Text style={styles.text}>FlipCard 2</Text>
                    <Text style={styles.subText}>
                      Learn by observing descriptions of scene / objects.
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            
          </Swiper>
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

  wrapper: {
    alignSelf: "center",
    borderTopLeftRadius: 10,
    marginBottom: -80,
  },

  text: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 20,
    fontWeight: 700,
    color: "#F7F3A6",
    marginTop: 15,
  },

  img: {
    width: 268,
    height: 191,
    borderRadius: 100,
  },

  challenges: {
    width: 268,
    backgroundColor: "#000",
    borderRadius: 10,
    overflow: "hidden",
    height: 294,
  },

  subText: {
    fontSize: 16,
    fontWeight: 400,
    color: "#fff",
    marginBottom: 15,
    marginHorizontal: 10,
    textAlign: "center",
  },
});

export default MainContentData;
