// import React from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import { Fontisto } from "@expo/vector-icons";
// import Swiper from "react-native-swiper";
// import { Image } from "react-native";
// import fill from "../assets/images/swiperImage/blank.gif";
// import sorting from "../assets/images/swiperImage/sorting.gif";
// import flip2 from "../assets/images/swiperImage/flip2.gif";
// import flip from "../assets/images/swiperImage/flip.gif";
// import scratch from "../assets/images/swiperImage/scratch.gif";
// import hotspot from "../assets/images/swiperImage/hotspot.gif";
// import TOD from "../assets/images/swiperImage/TOD.gif";
// import pronounce from "../assets/images/swiperImage/pronounce.gif";
// import Sequencing from "../assets/images/swiperImage/Sequencing.gif";
// import { useNavigation } from "@react-navigation/native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Options from "./Options";

// const MainContentData = () => {
//   const navigation = useNavigation();
//   return (
//     <ScrollView>
//       <View>
//       <View
//         style={{
//           flexDirection: "row",
//           alignItems: "center",
//           justifyContent: "center",
//           marginVertical: 40,
//         }}
//       >
       

//         <View style={styles.progressBox}>
//           <TouchableOpacity>

//           </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   progressBox: {
//     width: 185,
//     height: 187,
//     borderRadius: 30,
//     backgroundColor: "#000",
//     padding: 15,
//     alignItems: "center",
//     marginHorizontal: 7,
//   },

//   topic: {
//     fontWeight: 700,
//     fontSize: 16,
//     marginBottom: 8,
//   },

//   coloredText: {
//     color: "#F7F3A6",
//   },

//   detailsBox: {
//     width: 294,
//     backgroundColor: "#000",
//     borderRadius: 20,
//     alignSelf: "center",
//     padding: 30,
//     marginBottom: 20,
//   },

//   title: {
//     color: "#F7F3A6",
//     alignSelf: "center",
//     fontSize: 24,
//     fontWeight: 800,
//   },

//   wrapper: {
//     alignSelf: "center",
//     borderTopLeftRadius: 10,
//     marginBottom: -80,
//   },

//   text: {
//     textAlign: "center",
//     alignSelf: "center",
//     fontSize: 20,
//     fontWeight: 700,
//     color: "#F7F3A6",
//     marginTop: 15,
//   },

//   img: {
//     width: 268,
//     height: 191,
//     borderRadius: 100,
//   },

//   challenges: {
//     width: 268,
//     backgroundColor: "#000",
//     borderRadius: 10,
//     overflow: "hidden",
//     height: 294,
//   },

//   subText: {
//     fontSize: 16,
//     fontWeight: 400,
//     color: "#fff",
//     marginBottom: 15,
//     marginHorizontal: 10,
//     textAlign: "center",
//   },
// });

// export default MainContentData;


import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Linking, // Import Linking from react-native
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import fill from "../assets/images/swiperImage/ds.jpeg";

const MainContentData = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const imageUrl = 'https://adobeaero.app.link/EOSgZFhZsCb'; // Replace with your image URL

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  
  
  const images  = [
    {
      image: fill,
      thumbnailText: ``
    },
    {
      image: fill,
      thumbnailText: ``
    },
    {
      image: fill,
      thumbnailText: ``
    },
    {
      image: fill,
      thumbnailText: ``
    },
  ]
  const openLink = async () => {
    try {
      // Open the URL using Linking
      await Linking.openURL(imageUrl);
    } catch (error) {
      console.error("Error opening URL: ", error);
    }
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
            flexWrap:"wrap"
          }}
        >
          {images.map ((link)=> {
              return(
                <TouchableOpacity onPress={openLink}>
                <View style={styles.thumbnailContainer}>
                <Image source={link.image} style={styles.thumbnailImage} />
                <Text style={styles.thumbnailText}>{link.thumbnailText}</Text>
              </View>
                </TouchableOpacity>
              )
          })}
        </View>
      </View>

      {/* Image Preview Modal */}
      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <Image source={{ uri: imageUrl }} style={styles.previewImage} resizeMode="contain" />
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  thumbnailContainer: {
    width: 360,
    backgroundColor: "#424242",
    alignItems: "center",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 7,
    marginBottom: 25
  },
  thumbnailImage: {
    width: "100%",
    height:180,
    borderRadius: 10,
  },
  thumbnailText: {
    marginTop: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  // Rest of your styles
});

export default MainContentData;
