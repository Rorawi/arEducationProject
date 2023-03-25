import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { View, StyleSheet, TextInput } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { Entypo,FontAwesome } from '@expo/vector-icons';
import FastImage from "react-native-fast-image";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [surname, setSurname] = useState("");
  const [selectedValue, setSelectedValue] = useState('teacher');
//   const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imgView}>
          {/* <FastImage> */}
          <Image
            source={require("../assets/images/register.gif")}
            style={styles.img}
          />
          {/* </FastImage> */}
        </View>
        <View style={styles.registerContainer}>
          <Text
            style={{
              color: "#fff",
              alignSelf: "center",
              fontSize: 20,
              fontWeight: 800,
              marginBottom: 10,
            }}
          >
            REGISTERATION
          </Text>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Firstname here"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onFocus={() => setEmail("")}
            onChangeText={(email) => {
              setEmail(email);
              // console.log(email);
            }}
          />
          <Text style={styles.label}>Surname</Text>
          <TextInput
            style={styles.input}
            placeholder="Surname here"
            autoCapitalize="none"
            autoCorrect={false}
            value={surname}
            onFocus={() => setSurname("")}
            onChangeText={(surname) => {
              setSurname(surname);
              // console.log(email);
            }}
          />

          <View>
          <Text style={styles.label}>Profession</Text>
            <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }
              style={styles.input}
            >
              <Picker.Item label="Teacher" value="teacher" />
              <Picker.Item label="Student" value="student" />
              <Picker.Item label="Pilot" value="pilot" />
              <Picker.Item label="Banker" value="banker" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>

          <TouchableOpacity style={styles.signUpBtn}>
            <Text style={styles.signUpBtnText}>Sign Up</Text>
          </TouchableOpacity>

          
        <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity style={{marginTop:8, backgroundColor:'#FFCE00',padding: 2, marginRight: 20}}>
            <Entypo name="google-" size={12} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:8, backgroundColor:'#FFCE00',padding: 2, marginRight: 20}}>
            <Entypo name="linkedin" size={12} color="black" />    
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:8, backgroundColor:'#FFCE00',paddingVertical: 2,paddingHorizontal:4}}>
            <FontAwesome name="facebook" size={12} color="black" />   
            </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFDD4",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  registerContainer: {
    backgroundColor: "#000",
    width: 360,
    maxWidth: 800,
    // height:400,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: 30,
    paddingHorizontal:30,
    paddingBottom: 15
  },
  imgView: {
    width: 360,
    maxWidth: 800,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },

  img: {
    width: 370,
    height: 245,
    maxWidth: 800,
    borderRadius: 75,
    marginTop: 40,
  },

  input: {
    color: "#000",
    fontSize: 10,
    borderColor: "#F4F0A4",
    borderWidth: 2,
    backgroundColor: "#D9D9D9",
    height: 46,
    borderRadius: 10,
    padding: 10,
    marginTop: 3,
    marginBottom: 15,
  },

  label: {
    color: "#fff",
    fontSize: 16
},

  signUpBtn: {
    backgroundColor: '#FAD04B',
    justifyContent:'center',
    alignSelf:'center',
    width:199,
    height: 46,
    marginTop:10,
    borderRadius: 10,
  },

  signUpBtnText: {
    alignSelf:'center',
    fontSize: 20,
    fontWeight: 700,
  },
});

export default Register;
