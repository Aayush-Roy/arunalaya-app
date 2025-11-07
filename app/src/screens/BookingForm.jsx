
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from '../utils/utilities';

export default function BookingFormScreen({ route, navigation }) {
  const { service } = route.params;
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const dates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    dates.push({
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }),
      weekday: date.toLocaleString('default', { weekday: 'short' }),
      full: date.toISOString().split('T')[0],
    });
  }

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
  ];


//   const handleBooking = async () => {
//   if (!selectedDate || !selectedTime || !address || !phone) {
//     Alert.alert('Error', 'Please fill all required fields');
//     return;
//   }

//   try {
//     const bookingData = {
//       serviceId: service._id,
//       date: selectedDate,
//       timeSlot: selectedTime,
//       address,
//       phone,
//       notes,
//     };

//     console.log("Sending booking data:", bookingData);

//     const response = await axios.post('http://192.168.1.34:5000/api/bookings', bookingData);

//     console.log('Booking created:', response.data);

//     Alert.alert(
//       'Booking Confirmed 🎉',
//       `Your ${service.title} session is booked for ${selectedDate} at ${selectedTime}`,
//       [
//         {
//           text: 'OK',
//           onPress: () => navigation.navigate('Bookings'),
//         },
//       ]
//     );
//   } catch (error) {
//     console.error('Error creating booking:', error);
//     Alert.alert('Error', 'Failed to create booking. Please try again.');
//   }
// };

const handleBooking = async () => {
  if (!selectedDate || !selectedTime || !address || !phone) {
    Alert.alert('Error', 'Please fill all required fields');
    return;
  }

  try {
    // ✅ 1️⃣ Get token from AsyncStorage
    const token = await AsyncStorage .getItem('token');
    if (!token) {
      Alert.alert('Please login first');
      navigation.navigate('Login'); // redirect if needed
      return;
    }

    // ✅ 2️⃣ Create booking data object
    const bookingData = {
      serviceId: service._id, // or service.id if that’s your key
      date: selectedDate,
      timeSlot: selectedTime,
      address,
      phone,
      notes,
    };
    // 'http://192.168.1.34:5000/api/bookings',
    
    // ✅ 3️⃣ Make API call with Authorization header
    const response = await axios.post(
      `${BASE_URL}/bookings`,
      bookingData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log('Booking success:', response.data);

    // ✅ 4️⃣ Show success alert
    Alert.alert(
      'Booking Confirmed! 🎉',
      `Your ${service.title} session is booked for ${selectedDate} at ${selectedTime}`,
      [
        {
          text: 'OK',
          // onPress: () => navigation.navigate('Bookings'),
          // onPress: () => navigation.navigate('BottomTabs', { screen: 'Bookings' }),
          onPress: () => navigation.navigate('Main', { screen: 'Bookings' }),


        },
      ]
    );
  } catch (error) {
    console.error('Error creating booking:', error.response?.data || error.message);
    Alert.alert(
      'Error',
      error.response?.data?.message || 'Failed to create booking. Try again later.'
    );
  }
};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#141413' }}>
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Image Banner */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: service.image }} style={styles.image} />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.75)']}
            style={styles.imageOverlay}
          >
            <View style={styles.imageTextContainer}>
              <Text style={styles.imageTitle}>{service.title}</Text>
              <Text style={styles.imageSub}>
                ₹{service.price} • {service.duration}
              </Text>
            </View>
          </LinearGradient>
        </View>

        {/* Service Info */}
        <View style={styles.serviceInfo}>
          <Text style={styles.sectionTitle}>Booking Details</Text>
        </View>

        {/* Select Date */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Date</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {dates.map((date, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dateCard,
                  selectedDate === date.full && styles.selectedDateCard,
                ]}
                onPress={() => setSelectedDate(date.full)}
              >
                <Text
                  style={[
                    styles.dateWeekday,
                    selectedDate === date.full && styles.selectedDateText,
                  ]}
                >
                  {date.weekday}
                </Text>
                <Text
                  style={[
                    styles.dateDay,
                    selectedDate === date.full && styles.selectedDateText,
                  ]}
                >
                  {date.day}
                </Text>
                <Text
                  style={[
                    styles.dateMonth,
                    selectedDate === date.full && styles.selectedDateText,
                  ]}
                >
                  {date.month}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Select Time */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Time</Text>
          <View style={styles.timeGrid}>
            {timeSlots.map((time, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.timeSlot,
                  selectedTime === time && styles.selectedTimeSlot,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === time && styles.selectedTimeText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Address *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your complete address"
            placeholderTextColor="#666"
            value={address}
            onChangeText={setAddress}
            multiline
            numberOfLines={3}
          />
        </View>

        {/* Phone */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Phone Number *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#666"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>

        {/* Notes */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Notes (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="Any specific requirements?"
            placeholderTextColor="#666"
            value={notes}
            onChangeText={setNotes}
            multiline
            numberOfLines={2}
          />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.footer}>
        <LinearGradient
          colors={['#F88310', '#F96D00']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.bookButton}
        >
          <TouchableOpacity onPress={handleBooking} style={styles.bookButtonInner}>
            <Text style={styles.bookButtonText}>Confirm Booking</Text>
            <Ionicons name="checkmark-circle" size={22} color="#fff" />
          </TouchableOpacity>
        </LinearGradient>
      </View>
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
    height: 220,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
  },
  imageTextContainer: {
    padding: 20,
  },
  imageTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  imageSub: {
    fontSize: 15,
    color: '#F88310',
    marginTop: 4,
  },
  serviceInfo: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  dateCard: {
    backgroundColor: '#1F1F1E',
    borderRadius: 12,
    padding: 12,
    marginRight: 10,
    alignItems: 'center',
    minWidth: 70,
    borderWidth: 1,
    borderColor: '#2A2A29',
  },
  selectedDateCard: {
    backgroundColor: '#F88310',
    borderColor: '#F88310',
  },
  dateWeekday: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  dateDay: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 2,
  },
  dateMonth: {
    fontSize: 12,
    color: '#999',
  },
  selectedDateText: {
    color: '#fff',
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeSlot: {
    backgroundColor: '#1F1F1E',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2A2A29',
  },
  selectedTimeSlot: {
    backgroundColor: '#F88310',
    borderColor: '#F88310',
  },
  timeText: {
    color: '#fff',
    fontSize: 14,
  },
  selectedTimeText: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1F1E',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#2A2A29',
    textAlignVertical: 'top',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: '#1F1F1E',
    borderTopWidth: 1,
    borderTopColor: '#2A2A29',
  },
  bookButton: {
    borderRadius: 10,
  },
  bookButtonInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 10,
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
