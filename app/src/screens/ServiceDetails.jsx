

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
//before this component also using navigation in prop
export default function ServiceDetailsScreen({ route,navigation }) {
  // const navigation = useNavigation();
  const { service } = route.params;
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  console.log("service=>", service);
  
const checkLoginUser = async () => {
  const token = await AsyncStorage.getItem('token');

  if (!token) {
    Alert.alert(
      "Account Required",
      "Please sign up or log in to book your session.",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Sign Up",
          // onPress: () => navigation.navigate("Signup"), // 👈 navigate to signup
           onPress: () => navigation.navigate("Signup"), 
        },
      ]
    );
    return false;
  }

  setIsLoggedIn(true);
  return true;
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#141413' }}>
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image Header */}
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: service.image }}
            style={styles.image}
            resizeMode="cover"
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.7)']}
              style={styles.overlay}
            >
              <Text style={styles.headerTitle}>{service.title}</Text>
              <Text style={styles.headerSubtitle}>{service.category}</Text>
            </LinearGradient>
          </ImageBackground>
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Info Row */}
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Ionicons name="star" size={18} color="#F88310" />
              <Text style={styles.infoText}>{service.rating}</Text>
              <Text style={styles.infoSubtext}> ({service.reviews})</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="time-outline" size={18} color="#F88310" />
              <Text style={styles.infoText}>{service.duration}</Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="cash-outline" size={18} color="#F88310" />
              <Text style={styles.infoText}>₹{service.price}</Text>
            </View>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>About This Service</Text>
            <Text style={styles.description}>{service.description}</Text>
          </View>

          {/* Benefits */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Benefits</Text>
            {service.benefits && service.benefits.map((benefit, index) => (
              <View key={index} style={styles.benefitItem}>
                <Ionicons name="checkmark-circle" size={20} color="#F88310" />
                <Text style={styles.benefitText}>{benefit}</Text>
              </View>
            ))}
          </View>

          {/* Expectation */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>What to Expect</Text>
            <Text style={styles.description}>
              Our certified physiotherapist will visit you at your preferred
              location. Each session includes assessment, treatment, and a
              customized recovery plan.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Glass Footer */}
      <LinearGradient
        colors={['rgba(31,31,30,0.9)', 'rgba(20,20,19,0.95)']}
        style={styles.footer}
      >
        <View>
          <Text style={styles.priceLabel}>Total Price</Text>
          <Text style={styles.price}>₹{service.price}</Text>
        </View>
        {/* <TouchableOpacity
          style={styles.bookButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('BookingForm', { service })}
        >
          <Text style={styles.bookButtonText}>Book Now</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity> */}
        <TouchableOpacity
  style={styles.bookButton}
  activeOpacity={0.8}
  onPress={async () => {
    const loggedIn = await checkLoginUser();
    if (loggedIn) navigation.navigate('BookingForm', { service });
  }}
>
  <Text style={styles.bookButtonText}>Book Now</Text>
  <Ionicons name="arrow-forward" size={20} color="#fff" />
</TouchableOpacity>
      </LinearGradient>
    </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141413',
  },
  imageContainer: {
    height: 300,
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 25,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#F88310',
    marginTop: 4,
  },
  content: {
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1F1F1E',
    padding: 15,
    borderRadius: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#2A2A29',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 6,
  },
  infoSubtext: {
    color: '#999',
    fontSize: 13,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#bbb',
    lineHeight: 22,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#1F1F1E',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#2A2A29',
  },
  benefitText: {
    fontSize: 15,
    color: '#ccc',
    marginLeft: 10,
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#2A2A29',
  },
  priceLabel: {
    fontSize: 13,
    color: '#aaa',
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F88310',
  },
  bookButton: {
    backgroundColor: '#F88310',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#F88310',
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 6,
  },
});
