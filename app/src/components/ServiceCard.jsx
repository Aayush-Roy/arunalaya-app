// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { Image } from 'react-native';
// export default function ServiceCard({ service, onPress }) {
//   return (
//     <TouchableOpacity style={styles.card} onPress={onPress}>
//       {/* <View style={styles.imageContainer}>
//         <Text style={styles.emoji}>{service.image}</Text>
//       </View> */}
//       <View style={styles.imageContainer}>
//   <Image source={{ uri: service.image }} style={styles.image} resizeMode="cover" />
// </View>
//       <View style={styles.content}>
//         <Text style={styles.title} numberOfLines={2}>{service.title}</Text>
//         <Text style={styles.category}>{service.category}</Text>
        
//         <View style={styles.infoRow}>
//           <View style={styles.ratingContainer}>
//             <Ionicons name="star" size={14} color="#F88310" />
//             <Text style={styles.rating}>{service.rating}</Text>
//             <Text style={styles.reviews}>({service.reviews})</Text>
//           </View>
//           <Text style={styles.duration}>
//             <Ionicons name="time-outline" size={14} color="#999" /> {service.duration}
//           </Text>
//         </View>
        
//         <View style={styles.footer}>
//           <Text style={styles.price}>₹{service.price}</Text>
//           <TouchableOpacity style={styles.bookButton} onPress={onPress}>
//             <Text style={styles.bookButtonText}>Book Now</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#1F1F1E',
//     borderRadius: 12,
//     marginHorizontal: 20,
//     marginBottom: 15,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: '#2A2A29',
//   },
//   imageContainer: {
//     backgroundColor: '#2A2A29',
//     height: 120,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//   width: '100%',
//   height: '100%',
// },
//   emoji: {
//     fontSize: 50,
//   },
//   content: {
//     padding: 15,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 4,
//   },
//   category: {
//     fontSize: 13,
//     color: '#F88310',
//     marginBottom: 10,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rating: {
//     color: '#fff',
//     fontSize: 14,
//     marginLeft: 4,
//     fontWeight: '600',
//   },
//   reviews: {
//     color: '#999',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   duration: {
//     color: '#999',
//     fontSize: 13,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   price: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#F88310',
//   },
//   bookButton: {
//     backgroundColor: '#F88310',
//     paddingHorizontal: 20,
//     paddingVertical: 8,
//     borderRadius: 8,
//   },
//   bookButtonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
// });
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function ServiceCard({ service, onPress }) {
//   const scaleValue = new Animated.Value(1);

//   const handlePressIn = () => {
//     Animated.spring(scaleValue, {
//       toValue: 0.97,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = () => {
//     Animated.spring(scaleValue, {
//       toValue: 1,
//       friction: 3,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
//       <TouchableOpacity
//         activeOpacity={0.9}
//         onPress={onPress}
//         onPressIn={handlePressIn}
//         onPressOut={handlePressOut}
//       >
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: service.image }} style={styles.image} />
//           <LinearGradient
//             colors={['transparent', 'rgba(0,0,0,0.6)']}
//             style={styles.imageOverlay}
//           >
//             <View style={styles.imageTextContainer}>
//               <Text style={styles.imageTitle} numberOfLines={1}>{service.title}</Text>
//             </View>
//           </LinearGradient>
//         </View>

//         <View style={styles.content}>
//           <Text style={styles.category}>{service.category}</Text>

//           <View style={styles.infoRow}>
//             <View style={styles.ratingContainer}>
//               <Ionicons name="star" size={14} color="#F9B208" />
//               <Text style={styles.rating}>{service.rating}</Text>
//               <Text style={styles.reviews}>({service.reviews})</Text>
//             </View>
//             <Text style={styles.duration}>
//               <Ionicons name="time-outline" size={14} color="#aaa" /> {service.duration}
//             </Text>
//           </View>

//           <View style={styles.footer}>
//             <Text style={styles.price}>₹{service.price}</Text>
//             <LinearGradient
//               colors={['#F88310', '#F96D00']}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 1 }}
//               style={styles.bookButton}
//             >
//               <Text style={styles.bookButtonText}>Book Now</Text>
//             </LinearGradient>
//           </View>
//         </View>
//       </TouchableOpacity>
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#1E1E1E',
//     borderRadius: 16,
//     marginHorizontal: 20,
//     marginBottom: 20,
//     overflow: 'hidden',
//     elevation: 8,
//     shadowColor: '#000',
//     shadowOpacity: 0.4,
//     shadowOffset: { width: 0, height: 5 },
//     shadowRadius: 10,
//   },
//   imageContainer: {
//     height: 160,
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   imageOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//   },
//   imageTextContainer: {
//     paddingHorizontal: 15,
//     paddingBottom: 10,
//   },
//   imageTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#fff',
//   },
//   content: {
//     padding: 16,
//   },
//   category: {
//     fontSize: 13,
//     color: '#F88310',
//     marginBottom: 8,
//     fontWeight: '600',
//     letterSpacing: 0.3,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 12,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rating: {
//     color: '#fff',
//     fontSize: 14,
//     marginLeft: 4,
//     fontWeight: '600',
//   },
//   reviews: {
//     color: '#aaa',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   duration: {
//     color: '#bbb',
//     fontSize: 13,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   price: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: '#F88310',
//   },
//   bookButton: {
//     paddingHorizontal: 22,
//     paddingVertical: 10,
//     borderRadius: 10,
//     shadowColor: '#F88310',
//     shadowOpacity: 0.4,
//     shadowRadius: 6,
//   },
//   bookButtonText: {
//     color: '#fff',
//     fontWeight: '700',
//     fontSize: 14,
//     letterSpacing: 0.5,
//   },
// });
// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// export default function ServiceCard({ service, onPress }) {
//   const scaleValue = new Animated.Value(1);

//   const handlePressIn = () => {
//     Animated.spring(scaleValue, {
//       toValue: 0.97,
//       useNativeDriver: true,
//     }).start();
//   };

//   const handlePressOut = () => {
//     Animated.spring(scaleValue, {
//       toValue: 1,
//       friction: 3,
//       useNativeDriver: true,
//     }).start();
//   };

//   return (
//     <Animated.View style={[styles.card, { transform: [{ scale: scaleValue }] }]}>
//       <TouchableOpacity
//         activeOpacity={0.9}
//         onPress={onPress}
//         onPressIn={handlePressIn}
//         onPressOut={handlePressOut}
//       >
//         {/* Image with overlay */}
//         <View style={styles.imageContainer}>
//           <Image source={{ uri: service.image }} style={styles.image} />
//           <LinearGradient
//             colors={['transparent', 'rgba(0,0,0,0.7)']}
//             style={styles.imageOverlay}
//           >
//             <Text style={styles.imageTitle} numberOfLines={1}>{service.title}</Text>
//           </LinearGradient>
//         </View>

//         {/* Content */}
//         <View style={styles.content}>
//           <Text style={styles.category}>{service.category}</Text>

//           <View style={styles.infoRow}>
//             <View style={styles.ratingContainer}>
//               <Ionicons name="star" size={14} color="#F9B208" />
//               <Text style={styles.rating}>{service.rating}</Text>
//               <Text style={styles.reviews}>({service.reviews})</Text>
//             </View>
//             <Text style={styles.duration}>
//               <Ionicons name="time-outline" size={14} color="#aaa" /> {service.duration}
//             </Text>
//           </View>

//           {/* View Details Button */}
//           <TouchableOpacity style={styles.viewButton} onPress={onPress}>
//             <LinearGradient
//               colors={['#F88310', '#F96D00']}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 1 }}
//               style={styles.viewGradient}
//             >
//               <Text style={styles.viewText}>View Details</Text>
//               <Ionicons name="arrow-forward" size={16} color="#fff" />
//             </LinearGradient>
//           </TouchableOpacity>
//         </View>
//       </TouchableOpacity>
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#1E1E1E',
//     borderRadius: 16,
//     marginHorizontal: 20,
//     marginBottom: 20,
//     overflow: 'hidden',
//     elevation: 6,
//     shadowColor: '#000',
//     shadowOpacity: 0.4,
//     shadowOffset: { width: 0, height: 5 },
//     shadowRadius: 10,
//   },
//   imageContainer: {
//     height: 160,
//     borderTopLeftRadius: 16,
//     borderTopRightRadius: 16,
//     overflow: 'hidden',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   imageOverlay: {
//     ...StyleSheet.absoluteFillObject,
//     justifyContent: 'flex-end',
//     padding: 12,
//   },
//   imageTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     color: '#fff',
//   },
//   content: {
//     padding: 16,
//   },
//   category: {
//     fontSize: 13,
//     color: '#F88310',
//     marginBottom: 8,
//     fontWeight: '600',
//     letterSpacing: 0.3,
//   },
//   infoRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 14,
//   },
//   ratingContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   rating: {
//     color: '#fff',
//     fontSize: 14,
//     marginLeft: 4,
//     fontWeight: '600',
//   },
//   reviews: {
//     color: '#aaa',
//     fontSize: 12,
//     marginLeft: 4,
//   },
//   duration: {
//     color: '#bbb',
//     fontSize: 13,
//   },
//   viewButton: {
//     alignSelf: 'flex-start',
//   },
//   viewGradient: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 14,
//     paddingVertical: 8,
//     borderRadius: 8,
//     gap: 6,
//   },
//   viewText: {
//     color: '#fff',
//     fontWeight: '700',
//     fontSize: 14,
//   },
// });
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function ServiceCard({ service, onPress }) {
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
