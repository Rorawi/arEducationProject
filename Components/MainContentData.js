import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { Share } from "react-native";

import fill from "../assets/images/swiperImage/ds.jpeg";
import acell from "../assets/images/swiperImage/acell.jpeg";
import dsys from "../assets/images/swiperImage/dsys.jpeg";
import heart from "../assets/images/swiperImage/heart.jpeg";
import vector from "../assets/images/swiperImage/Vector.svg";
import acellqr from "../assets/images/swiperImage/acellqr.jpeg";
import dsysqr from "../assets/images/swiperImage/dsysqr.jpeg";
import heartqr from "../assets/images/swiperImage/heartqr.jpeg";
import wallpaper from "../assets/images/swiperImage/wbg1.png"
import {
  FontAwesome5,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { ImageBackground } from "react-native";

const MainContentData = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('../assets/PoppinsFont/Poppins-Black.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setQrCodeUrl(""); // Clear the QR code URL when closing the modal
  };

  const toggleQrCodeModal = () => {
    setModalVisible(!isModalVisible);
    setQrCodeUrl(""); // Clear the QR code URL when closing the modal
  };
  const images = [
    {
      image: acell,
      desc: `hi`,
      thumbnailText: `Microscopic unit, vital for life, cellular functions`,
      thumbnailTitle: "Animal Cell",
      imageUrl: "https://adobeaero.app.link/rp5nPd1cgCb",
      qrcode: acell,
    },
    {
      image: dsys,
      thumbnailText: `Processes food, extracts nutrients, eliminates waste.`,
      thumbnailTitle: "Digestive System",
      imageUrl: "https://adobeaero.app.link/EOSgZFhZsCb",
      qrcode: dsysqr,
    },
    {
      image: heart,
      thumbnailText: `Muscular pump, circulates blood, vital organ`,
      thumbnailTitle: "Human Heart",
      imageUrl: "https://adobeaero.app.link/GnqFeXpxmCb",
      qrcode: heartqr,
    },
  ];

  const shareImage = async (imageUrl, title, description) => {
    try {
      const message = [];
      if (title) message.push(title);
      if (description) message.push(description);
      message.push(imageUrl);

      await Share.share({
        message: message.join("\n"), // Combine title, description, and imageUrl
      });
    } catch (error) {
      console.error("Error sharing image: ", error);
    }
  };

  const viewQRCode = (imageUrl, title, description, qrcodeUrl) => {
    if (qrcodeUrl) {
      setQrCodeUrl(qrcodeUrl);
      setModalVisible(true);
    } else {
      // Handle displaying the image in the modal
      setImageUrl(imageUrl);
      setModalVisible(true);
    }
  };

  const openLink = async (imageUrl, qrcodeUrl) => {
    try {
      if (qrcodeUrl) {
        setQrCodeUrl(qrcodeUrl); // Set the QR code URL
        setModalVisible(true); // Open the modal
      } else {
        setImageUrl(imageUrl);
        setModalVisible(true);
      }
    } catch (error) {
      console.error("Error opening URL: ", error);
    }
  };
  return (
    <ImageBackground source={wallpaper} resizeMode="cover">
    <ScrollView>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: 40,
            flexWrap: "wrap",
            fontFamily: "Poppins-Black"
          }}
        >
          {images.map((link) => {
            return (
              <View>
                
                <TouchableOpacity key={link.imageUrl}>
                  <View style={styles.thumbnailContainer}>
                    <Image source={link.image} style={styles.thumbnailImage} />
                    <View style={styles.textContainer}>
                      <Text style={styles.thumbnailText}>
                        {link.thumbnailTitle}
                      </Text>
                      <Text style={styles.linkText}>{link.thumbnailText}</Text>
                      <View style={styles.iconContainer}>
                        {/* Button to display QR code */}
                        <TouchableOpacity
                          onPress={() =>
                            viewQRCode(
                              link.imageUrl,
                              link.thumbnailTitle,
                              link.thumbnailText,
                              link.qrcode
                            )
                          }
                          style={styles.icon}
                        >
                         <View style={styles.iconbg}>
                         <MaterialCommunityIcons
                            name="qrcode-scan"
                            size={24}
                            color="white"
                            style={{ marginRight: -25 }}
                          />
                         </View>
                        </TouchableOpacity>

                        {/* Button to share image */}
                        <TouchableOpacity
                          onPress={() => shareImage(link.imageUrl)}
                          style={styles.icon}
                        >
                          <FontAwesome5
                            name="share-alt"
                            size={24}
                            color="white"
                            style={{ marginRight: -25 }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      {/* QR Code Modal */}
      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}
        onPress={toggleQrCodeModal}
        >
          {/* <TouchableOpacity
            style={styles.closeButton}
          > */}
            <Text style={styles.closeButtonText}>Close</Text>
          {/* </TouchableOpacity> */}
          {qrCodeUrl ? (
            <Image
              source={{ uri: qrCodeUrl }}
              style={styles.previewImage}
              resizeMode="contain"
            />
          ) : null}
        </View>
      </Modal>
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  thumbnailContainer: {
    width: 360,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 7,
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Frosted glass background
    backdropFilter: 'blur(10px)', // Apply blur effect
    alignItems: "center",
    justifyContent: "center",
    borderColor:"#7FFF7F",
    borderWidth: 1
  },
  thumbnailImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  thumbnailText: {
    marginTop: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamly: "Poppins-Black"
  },

  textContainer: {
    marginTop: 10,

    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  thumbnailText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamly: "Poppins-Black"
  },
  linkText: {
    color: "#fff",
    fontSize: 13,
  },

  iconContainer: {
    flexDirection: "row", // Horizontal arrangement
    justifyContent: "space-evenly", // Space evenly between icons
    alignItems: "center", // Center vertically
    marginTop: 30,
  },
  iconbg: {
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Frosted glass background
    backdropFilter: 'blur(10px)', // Apply blur effect
    borderColor: "#7FFF7F",
    borderWidth: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    alignSelf: "center", // Center the icon background within its container
  },
  
  icon: {
    width: 24, // Adjust the icon size as needed
    height: 24,
  },
  
  // Rest of your styles
});

export default MainContentData;

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

// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   Image,
//   Modal,
//   Linking, // Import Linking from react-native
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import fill from "../assets/images/swiperImage/ds.jpeg";
// import acell from "../assets/images/swiperImage/acell.jpeg"
// import dsys from "../assets/images/swiperImage/dsys.jpeg"
// import heart from "../assets/images/swiperImage/heart.jpeg";
// import vector from "../assets/images/swiperImage/Vector.svg";
// import acellqr from "../assets/images/swiperImage/acellqr.jpeg"

// const MainContentData = () => {
//   const navigation = useNavigation();
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [imageUrl, setImageUrl] = useState("");

//   // const imageUrl = 'https://adobeaero.app.link/EOSgZFhZsCb'; // Replace with your image URL

//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };

//   const images  = [
//     {
//       image: acell,
//       desc: `hi`,
//       thumbnailText: `Microscopic unit, vital for life, cellular functions`,
//       thumbnailTitle:"Animal Cell",
//       imageUrl: "https://adobeaero.app.link/rp5nPd1cgCb",
//       qrcode: acellqr

//     },
//     {
//       image: dsys,
//       thumbnailText: `Processes food, extracts nutrients, eliminates waste.`,
//       thumbnailTitle:"Digestive System",
//       imageUrl: "https://adobeaero.app.link/EOSgZFhZsCb"
//     },
//     {
//       image: heart,
//       thumbnailText: `Muscular pump, circulates blood, vital organ`,
//       thumbnailTitle:"Human Heart",
//       imageUrl: "https://adobeaero.app.link/GnqFeXpxmCb"
//     },

//   ]
//   const openLink = async (imageUrl) => {
//     try {
//       setImageUrl(imageUrl); // Set the imageUrl here
//       setModalVisible(true);
//     } catch (error) {
//       console.error("Error opening URL: ", error);
//     }
//   };

//   return (
//     <ScrollView>
//       <View>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "center",
//             marginVertical: 40,
//             flexWrap:"wrap"
//           }}
//         >
//           {images.map ((link)=> {
//               return(
//                 <TouchableOpacity
//                 onPress={() => openLink(link.imageUrl)} // Pass the imageUrl here
//                 >
//                 <View style={styles.thumbnailContainer}>
//                 <Image source={link.image} style={styles.thumbnailImage} />
//                     <View style={styles.textContainer}>
//                       <Text style={styles.thumbnailText}>
//                         {link.thumbnailTitle}
//                       </Text>
//                       <Text style={styles.linkText}>{link.thumbnailText}</Text>
//                    <View style={styles.icon}>
//                     <Image source={vector}/>
//                     <Image source={vector}/>
//                    </View>
//                     </View>
//                    </View>

//                 </TouchableOpacity>
//               )
//           })}
//         </View>
//       </View>

//       {/* Image Preview Modal */}
//       <Modal visible={isModalVisible} transparent={true}>
//         <View style={styles.modalContainer}>
//           <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
//             <Text style={styles.closeButtonText}>Close</Text>
//           </TouchableOpacity>
//           <Image source={{ uri: imageUrl }} style={styles.previewImage} resizeMode="contain" />
//         </View>
//       </Modal>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   thumbnailContainer: {
//     width: 360,
//     borderRadius: 10,
//     padding: 15,
//     marginHorizontal: 7,
//     marginBottom: 25,
//     backgroundColor: 'rgba(66, 66, 66, 0.7)', // Background color with transparency
//     backdropFilter: 'blur(70px)', // Apply blur effect
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   thumbnailImage: {
//     width: "100%",
//     height:180,
//     borderRadius: 10,
//   },
//   thumbnailText: {
//     marginTop: 10,
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },

//   textContainer: {
//     marginTop: 10,

//     paddingVertical:15,
//     paddingHorizontal:20
//   },
//   thumbnailText: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   linkText: {
//     color: "#fff",
//     fontSize: 13,
//   },

//   iconContainer: {
//     flexDirection: 'row', // Horizontal arrangement
//     justifyContent: 'space-between', // Space evenly between icons
//     alignItems: 'center', // Center vertically
//   },
//   icon: {
//   width:40,
//   height:40,
//   },
//   // Rest of your styles
// });

// export default MainContentData;
