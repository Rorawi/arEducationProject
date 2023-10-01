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
import { useFonts } from "expo-font";
import { Share } from "react-native";

import acell from "../assets/images/swiperImage/acell.jpeg";
import dsys from "../assets/images/swiperImage/dsys.jpeg";
import heart from "../assets/images/swiperImage/heart.jpeg";
import acellqr from "../assets/images/swiperImage/acellqr.jpeg";
import dsysqr from "../assets/images/swiperImage/dsysqr.jpeg";
import heartqr from "../assets/images/swiperImage/heartqr.jpeg";
import wallpaper from "../assets/images/swiperImage/wbg1.png";
import pcell from "../assets/images/swiperImage/pcell.jpeg";
import pcellqr from "../assets/images/swiperImage/pcellqr.jpeg";

import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";

const MainContentData = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [selectedCard, setSelectedCard] = useState(false);

  const [fontsLoaded] = useFonts({
    "Poppins-Black": require("../assets/PoppinsFont/Poppins-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const toggleQrCodeModal = () => {
    setModalVisible(!isModalVisible);
    setQrCodeUrl(""); // Clear the QR code URL when closing the modal
  };
  const images = [
    {
      image: pcell,
      thumbnailText: `Microscopic unit, essential for plant life`,
      thumbnailTitle: "Plant Cell",
      imageUrl: "https://adobeaero.app.link/ziNle72RjCb",
      qrcode: pcellqr,
    },
    {
      image: acell,
      desc: `hi`,
      thumbnailText: `Microscopic unit, vital for life, cellular functions`,
      thumbnailTitle: "Animal Cell",
      imageUrl: "https://adobeaero.app.link/rp5nPd1cgCb",
      qrcode: acellqr,
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

  const shareQrImage = async (imageUrl, qrCodeUrl, title, description) => {
    try {
      // Create an array of content to share
      const contentToShare = [];
  
      // Add the QR code image URL to the content
      if (qrCodeUrl) {
        contentToShare.push({
          type: 'url',
          value: qrCodeUrl,
        });
      }
  
      // Add the title to the content
      if (title) {
        contentToShare.push({
          type: 'text',
          value: `Title: ${title}`,
        });
      }
  
      // Add the description to the content
      if (description) {
        contentToShare.push({
          type: 'text',
          value: `Description: ${description}`,
        });
      }
  
      // Check if there's any content to share
      if (contentToShare.length > 0) {
        await Share.share({
          title: "Share QR Code",
          message: contentToShare,
        });
      } else {
        // Handle the case where there is no content to share
        console.warn("Nothing to share.");
      }
    } catch (error) {
      console.error("Error sharing QR code: ", error);
    }
  };
  
  
  


  const viewQRCode = (imageUrl, title, description, qrcodeUrl) => {
    if (qrcodeUrl) {
      setQrCodeUrl(qrcodeUrl);
      setSelectedCard({ title, description }); // Store the selected card data
      setModalVisible(true);
    } else {
      // Handle displaying the image in the modal
      setImageUrl(imageUrl);
      setSelectedCard({ title, description }); // Store the selected card data
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

  const openArLink = async (imageUrl) => {
    try {
      // Open the URL using Linking
      await Linking.openURL(imageUrl);
    } catch (error) {
      console.error("Error opening URL: ", error);
    }
  };

  return (
    <ImageBackground source={wallpaper} resizeMode="cover">
      <ScrollView style={styles.container}>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginVertical: 40,
              flexWrap: "wrap",
              fontFamily: "Poppins-Black",
            }}
          >
            {images.map((link, index) => {
              return (
                <View>
                  <View key={index}>
                    <TouchableOpacity
                      style={styles.thumbnailContainer}
                      onPress={() => openArLink(link.imageUrl)} // Pass the imageUrl here
                    >
                      <Image
                        source={link.image}
                        style={styles.thumbnailImage}
                        onPress={link.imageUrl}
                      />
                      <View style={styles.textContainer}>
                        <Text style={styles.thumbnailText}>
                          {link.thumbnailTitle}
                        </Text>
                        <Text style={styles.linkText}>
                          {link.thumbnailText}
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <View style={styles.iconContainer}>
                      {/* Button to display QR code */}
                      <View style={styles.iconbg}>
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
                          <MaterialCommunityIcons
                            name="qrcode-scan"
                            size={24}
                            color="white"
                            style={{ marginRight: -25 }}
                          />
                        </TouchableOpacity>
                      </View>

                      {/* Button to share image */}
                      <View style={styles.iconbg}>
                        <TouchableOpacity
                          onPress={() => shareImage(link.imageUrl)}
                          style={styles.icon}
                        >
                          <Entypo
                            name="share"
                            size={24}
                            color="white"
                            style={{ marginRight: -25 }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
        {/* QR Code Modal */}
        {qrCodeUrl ? (
          <Modal visible={isModalVisible} transparent={true}>
            <View style={styles.modalContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={toggleQrCodeModal}
              >
                <MaterialCommunityIcons
                  name="close"
                  size={24}
                  color="black"
                  style={styles.closeButtonText}
                />
              </TouchableOpacity>

              <View style={[styles.iconbg,styles.qrshare]}>
                <TouchableOpacity
                  onPress={() => shareQrImage(selectedCard.qrCodeUrl)}
                  style={styles.icon}
                >
                  <Entypo
                    name="share"
                    size={24}
                    color="white"
                    style={{ marginRight: -25 }}
                  />
                </TouchableOpacity>
              </View>
              <>
                <Image
                  source={qrCodeUrl}
                  style={styles.previewImage}
                  resizeMode="contain"
                />
              </>
              {selectedCard && (
                <>
                  <View style={styles.qrdetails}>
                    <Text style={styles.modalTitle}>{selectedCard.title}</Text>
                    <Text style={styles.modalDescription}>
                      {selectedCard.description}
                    </Text>
                  </View>
                </>
              )}
            </View>
          </Modal>
        ) : null}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent dark background
  },
  thumbnailContainer: {
    width: 360,
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 7,
    marginBottom: 25,
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Frosted glass background
    backdropFilter: "blur(10px)", // Apply blur effect
    alignItems: "center",
    justifyContent: "center",
    // borderColor:"#7FFF7F",
    borderColor: "rgba(255, 255, 255, 0.4)",

    borderWidth: 1,
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
    fontFamily: "Poppins-Black",
  },

  textContainer: {
    marginTop: 10,

    paddingVertical: 15,
    paddingHorizontal: 20,
    fontFamily: "Poppins-Black",
  },
  thumbnailText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins-Black",
  },
  linkText: {
    color: "#fff",
    fontSize: 13,
    fontFamily: "Poppins-Black",
  },

  iconContainer: {
    flexDirection: "row", // Horizontal arrangement
    justifyContent: "center", // Space evenly between icons
    alignItems: "center", // Center vertically
    marginBottom: 30,
  },
  iconbg: {
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Frosted glass background
    backdropFilter: "blur(10px)", // Apply blur effect
    borderColor: "#7FFF7F",
    borderWidth: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    alignSelf: "center", // Center the icon background within its container
    marginHorizontal: 10,
  },

  icon: {
    width: 24, // Adjust the icon size as needed
    height: 24,
    alignSelf: "center", // Center the icon within the icon background
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.92)", // Semi-transparent black background
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Frosted glass background
    backdropFilter: "blur(10px)", // Apply blur effect
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    alignSelf: "center", // Center the icon background within its container
    marginHorizontal: 5,
    position: "absolute",
    top: 40,
    right: 20,
  },


  qrshare: {
    
    position: "absolute",
    top: 40,
    left: 20,
  },
  closeButtonText: {
    fontWeight: "bold",
    color: "#7FFF7F",
  },

  previewImage: {
    width: 280,
    height: 280,
  },

  modalTitle: {
    fontWeight: "bold",
    color: "#7FFF7F",
    fontSize: 25,
    fontFamily: "Poppins-Black",
  },

  modalDescription: {
    color: "#fff",
    fontSize: 15,
    fontFamily: "Poppins-Black",
    textAlign: "center",
  },
  qrdetails: {
    alignItems: "center",
    marginTop: 24,
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Frosted glass background
    borderRadius: 10,
    padding: 16,
    borderColor: "rgba(255, 255, 255, 0.2)",
    borderWidth: 1,
    width: "75%",
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
