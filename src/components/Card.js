import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const cardStylesMap = {
  Visa: {
    gradient: ['#4fa9ff', '#50bcff'], // Example light blue gradient colors for Visa
    icon: <FontAwesome name="cc-visa" size={24} color="#fff" />,
  },
  MasterCard: {
    gradient: ['#f46b45', '#eea849'], // Example gradient colors for MasterCard
    icon: <FontAwesome name="cc-mastercard" size={24} color="#fff" />,
  },
  // ... other card types
};

const formatCardNumber = (cardNumber) => {
  return cardNumber.replace(/(.{4})/g, '$1 ').trim();
};

const Card = ({ item }) => {
  const [isCardNumberVisible, setIsCardNumberVisible] = useState(false);
  const currentCardStyle = cardStylesMap[item.type] || cardStylesMap['Visa'];

  // Toggle the visibility state
  const toggleCardNumberVisibility = () => {
    setIsCardNumberVisible(!isCardNumberVisible);
  };

  /// Mask the card number if not visible, otherwise format it
  const displayCardNumber = isCardNumberVisible
  ? formatCardNumber(item.cardNumber)
  : '•••• •••• •••• ' + item.cardNumber.slice(-4);
  
    return (
      <TouchableOpacity onPress={toggleCardNumberVisibility}>
        <LinearGradient
        style={styles.card}
        colors={currentCardStyle.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <View style={styles.cardTopSection}>
          <Text style={styles.bankName}>{item.bankName || 'Bank Name'}</Text>
          <View style={styles.cardTypeIcon}>
            {currentCardStyle.icon}
          </View>
        </View>
        <Text style={styles.cardNumber}>{displayCardNumber}</Text>
        <View style={styles.cardDetailsContainer}>
          <View style={styles.cardHolderContainer}>
            <Text style={styles.label}>Card Holder Name</Text>
            <Text style={styles.cardholderName}>{item.cardholderName}</Text>
          </View>
          <View style={styles.expiryDateContainer}>
            <Text style={styles.label}>Expired Date</Text>
            <Text style={styles.expiryDate}>{item.expiryDate}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    padding: 20,
    width: 300,
    height: 190,
    justifyContent: 'space-between',
    marginHorizontal: 10,
    overflow: 'hidden', // Ensure the borderRadius is respected by the LinearGradient
  },
  cardTopSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1, // Take available space
  },
  cardHolderContainer: {
    justifyContent: 'flex-end',
  },
  bankName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  cardNumber: {
    color: '#fff',
    fontSize: 21,
    letterSpacing: 2,
    marginVertical: 10,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardholderName: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  expiryDateContainer: {
    justifyContent: 'flex-end',
  },
  expiryDate: {
    color: '#fff',
    fontSize: 14, // Reduced font size
    fontWeight: '600',
    marginTop: 4, // Added spacing between label and value
  },
  label: {
    fontSize: 10,
    color: '#fff',
    opacity: 0.7,
  },
  cardholderName: {
    color: '#fff',
    fontSize: 14, // Reduced font size
    fontWeight: '600',
    marginTop: 4, // Added spacing between label and value
  },
  // Add other styles as needed
});

export default Card;
