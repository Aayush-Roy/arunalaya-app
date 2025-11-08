import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function ServiceCard({ service, onPress }) {
  const[isLoggedIn,setIsLoggedIn] = useState(false);

//   const checkLoginUser = async () => {
//   const token = await AsyncStorage.getItem('token');
//   if (!token) {
//     Alert.alert("Please Create Your Account Before");
//     setIsLoggedIn(false);
//     return false; // exit here
//   } else {
//     setIsLoggedIn(true);
//     return true;
//   }
// };

  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        {/* Image with overlay title and gradient */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: service.image }} style={styles.image} resizeMode="cover" />

          {/* Gradient overlay for bottom title area */}
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.85)']}
            style={styles.bottomOverlay}
          >
            <View style={styles.overlayContent}>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryBadgeText}>{service.category}</Text>
              </View>

              <Text style={styles.serviceTitle}>{service.title}</Text>

              <View style={styles.infoRow}>
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={14} color="#FFD700" />
                  <Text style={styles.rating}>{service.rating}</Text>
                </View>

                <View style={styles.durationContainer}>
                  <Ionicons name="time-outline" size={14} color="#F88310" />
                  <Text style={styles.duration}>{service.duration}</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* Book Button */}
        <TouchableOpacity style={styles.viewButton} onPress={onPress}>
          <LinearGradient
            colors={['#FF9900', '#F88310']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.viewGradient}
          >
            <Text style={styles.viewText}>Book Session Now</Text>
            <Ionicons name="arrow-forward-circle-outline" size={18} color="#fff" />
          </LinearGradient>
        </TouchableOpacity>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#141413',
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#2A2A29',
  },
  imageContainer: {
    height: 220,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  bottomOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  overlayContent: {
    padding: 14,
  },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#F88310',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 6,
    marginBottom: 8,
  },
  categoryBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#000',
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: '#fff',
    fontSize: 14,
    marginLeft: 4,
    fontWeight: '600',
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  duration: {
    color: '#ddd',
    fontSize: 13,
    fontWeight: '500',
  },
  viewButton: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 14,
  },
  viewGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    gap: 8,
  },
  viewText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
