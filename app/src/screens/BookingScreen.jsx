
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../utils/utilities";


export default function BookingsScreen() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const[isLoggedIn,setIsLoggedIn] = useState(false);
// http://localhost:5000/api/bookings/690453679dddb7a4ceee43c3/cancel
//   const handleCancel=async(id)=>{
//     try{
//       const token = await AsyncStorage.getItem('token');
//       // const response = await axios.put(`${BASE_URL}/bookings/${id}/cancel`,{
//       //   headers:{Authorization:`Bearer ${token}`}
//       // });
//       const response = await axios.put(
//   `${BASE_URL}/bookings/${id}/cancel`,
//   {}, // empty body
//   {
//     headers: { Authorization: `Bearer ${token}` },
//   }
// );

//       Alert.alert("Booking Cancelled!!");
//       console.log(response);
//     }catch(err){
//       console.log("error", err);
//     }
//   }

const handleCancel = async (id) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await axios.put(
      `${BASE_URL}/bookings/${id}/cancel`,
      {}, // no data to send
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    Alert.alert("Booking Cancelled!!");
    console.log("Cancel Response:", response.data);
    // Optional: refresh list
    fetchBookings();
  } catch (err) {
    console.log("Error cancelling booking:", err.response?.data || err.message);
  }
};




  const fetchBookings = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        alert("Please login first!");
        setLoading(false);
        return;
      }
// http://192.168.1.34:5000/api/bookings/me
      const response = await axios.get(`${BASE_URL}/bookings/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(response.data);
      console.log("Fetched Bookings:", response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      alert("Failed to load your bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F88310" />
        <Text style={{ color: "#fff", marginTop: 10 }}>Loading bookings...</Text>
      </View>
    );
  }

  return (
    <LinearGradient colors={["#141413", "#0f0f0e"]} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>My Bookings</Text>
          <Text style={styles.subtitle}>Manage your appointments</Text>
        </View>

        {/* Summary Section */}
        <View style={styles.summaryBox}>
          <Text style={styles.summaryLabel}>Total Bookings</Text>
          <Text style={styles.summaryCount}>{bookings.length} bookings</Text>
        </View>

        {/* Bookings List */}
        {bookings.length > 0 ? (
          bookings.map((booking) => (
            <View key={booking._id} style={styles.card}>
              {/* Status Bar */}
              <LinearGradient
                colors={
                  booking.status === "Confirmed"
                    ? ["#4CAF50", "#43A047"]
                    : booking.status === "Pending"
                    ? ["#E6A64C", "#D9881F"]
                    : booking.status === "Cancelled"
                    ? ["#F44336", "#E53935"]
                    : ["#9E9E9E", "#757575"]
                }
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.statusBar}
              >
                <View style={styles.statusBarContent}>
                  <Text style={styles.statusLabel}>{booking.status}</Text>
                  <Ionicons
                    name={
                      booking.status === "Confirmed"
                        ? "checkmark-circle-outline"
                        : booking.status === "Pending"
                        ? "time-outline"
                        : booking.status === "Cancelled"
                        ? "close-circle-outline"
                        : "alert-circle-outline"
                    }
                    size={20}
                    color="white"
                  />
                </View>
              </LinearGradient>

              {/* Booking Info */}
              <View style={styles.cardBody}>
                <View style={styles.cardHeader}>
                  <Image
                    source={{ uri: booking.service?.image }}
                    style={styles.avatar}
                    resizeMode="cover"
                  />
                  <View style={{ flex: 1 }}>
                    <Text style={styles.serviceName}>{booking.service?.title}</Text>
                    <Text style={styles.doctorName}>{booking.service?.category}</Text>
                  </View>
                </View>

                <View style={styles.infoContainer}>
                  <View style={styles.infoItem}>
                    <Ionicons name="calendar-outline" size={16} color="#999" />
                    <Text style={styles.infoText}>
                      <Text style={styles.highlightText}>
                        {formatDate(booking.date)}
                      </Text>{" "}
                      at {booking.timeSlot}
                    </Text>
                  </View>
                  <View style={styles.infoItem}>
                    <Ionicons name="location-outline" size={16} color="#999" />
                    <Text style={styles.infoText}>{booking.service?.description}</Text>
                  </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.buttonRow}>
                  {/* {booking.status === "Pending" && (
                    <TouchableOpacity onPress={()=>handleCancel(booking._id)} style={styles.cancelBtn}>
                      <Ionicons name="close-circle-outline" size={18} color="#F44336" />
                      <Text style={[styles.viewBtnText, { color: "#F44336" }]}>
                        Cancel
                      </Text>
                    </TouchableOpacity>
                  )} */}
                  {booking.status === "Pending" && (
  <TouchableOpacity
    onPress={() =>
      Alert.alert(
        "Cancel Booking",
        "Are you sure you want to cancel this booking?",
        [
          { text: "No", style: "cancel" },
          { text: "Yes, Cancel", style: "destructive", onPress: () => handleCancel(booking._id) },
        ]
      )
    }
    style={styles.cancelBtn}
  >
    <Ionicons name="close-circle-outline" size={18} color="#F44336" />
    <Text style={[styles.viewBtnText, { color: "#F44336" }]}>Cancel</Text>
  </TouchableOpacity>
)}

                  <TouchableOpacity style={styles.viewBtn}>
                    <Text style={styles.viewBtnText}>View Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Ionicons name="calendar-outline" size={80} color="#2A2A29" />
            <Text style={styles.emptyTitle}>No Bookings Yet</Text>
            <Text style={styles.emptyText}>
              Book your first physiotherapy session
            </Text>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141413",
  },
  header: {
    paddingHorizontal: 22,
    paddingTop: 50,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    color: "#999",
    fontSize: 15,
    marginTop: 6,
  },
  summaryBox: {
    backgroundColor: "#1F1F1E",
    marginHorizontal: 20,
    borderRadius: 14,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#2A2A29",
  },
  summaryLabel: {
    color: "#999",
    fontSize: 15,
    marginBottom: 6,
  },
  summaryCount: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },
  card: {
    backgroundColor: "#1F1F1E",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  statusBar: {
    height: 45,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  statusBarContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusLabel: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  cardBody: {
    padding: 18,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    gap: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#2A2A29",
  },
  serviceName: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
  doctorName: {
    color: "#999",
    fontSize: 14,
    marginTop: 2,
  },
  infoContainer: {
    borderTopWidth: 1,
    borderTopColor: "#2A2A29",
    paddingTop: 14,
    marginBottom: 18,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginVertical: 4,
  },
  infoText: {
    color: "#ccc",
    fontSize: 14,
  },
  highlightText: {
    color: "#fff",
    fontWeight: "600",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  viewBtn: {
    backgroundColor: "#141413",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2A2A29",
  },
  cancelBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#141413",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#2A2A29",
  },
  viewBtnText: {
    color: "#F88310",
    fontWeight: "700",
    fontSize: 15,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 100,
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  emptyText: {
    color: "#999",
    fontSize: 15,
    marginTop: 6,
  },
});
