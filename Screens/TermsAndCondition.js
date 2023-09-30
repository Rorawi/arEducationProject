// TermsAndConditions.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const TermsAndConditions = ({ navigation }) => {
  const handleAccept = () => {
    // Implement code to mark terms as accepted (e.g., save to AsyncStorage)
    navigation.navigate('Home'); // Navigate to your app's main screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.termsText}>
        Your terms and conditions text goes here.
        {/* Add your terms and conditions text */}
      </Text>
      <TouchableOpacity onPress={handleAccept} style={styles.acceptButton}>
        <Text style={styles.acceptButtonText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  termsText: {
    fontSize: 16,
    textAlign: 'center',
  },
  acceptButton: {
    marginTop: 20,
    backgroundColor: 'green', // Customize the button's appearance
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  acceptButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TermsAndConditions;
