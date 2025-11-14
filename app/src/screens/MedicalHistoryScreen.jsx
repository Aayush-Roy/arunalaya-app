import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../utils/utilities";

export default function MedicalHistoryScreen() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedicalHistory = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        if (!token) {
          Alert.alert("Please login first");
          return;
        }

        const res = await axios.get(`${BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Set all bookings as medical history
        setBookings(res.data.bookings || []);
      } catch (err) {
        console.error("Error fetching medical history:", err);
        Alert.alert("Error", "Unable to fetch medical history");
      } finally {
        setLoading(false);
      }
    };

    fetchMedicalHistory();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#F88310" />
      </View>
    );
  }

  if (!bookings.length) {
    return (
      <View style={styles.center}>
        <Text style={styles.noData}>No medical history found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Medical History</Text>

      {bookings.map((item, index) => (
        <View key={item._id || index} style={styles.card}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>
            {new Date(item.date).toLocaleDateString()}
          </Text>

          <Text style={styles.label}>Time Slot:</Text>
          <Text style={styles.value}>{item.timeSlot || "N/A"}</Text>

          <Text style={styles.label}>Status:</Text>
          <Text style={[styles.value, { color: getStatusColor(item.status) }]}>
            {item.status}
          </Text>

          <Text style={styles.label}>Notes:</Text>
          <Text style={styles.value}>{item.notes || "No notes available"}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "#4CAF50";
    case "Cancelled":
      return "#F44336";
    default:
      return "#F88310";
  }
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#141413", padding: 16 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#1F1F1E",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#2A2A29",
  },
  label: { color: "#999", fontSize: 14 },
  value: { color: "#fff", fontSize: 16, marginBottom: 5 },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141413",
  },
  noData: { color: "#fff", fontSize: 18 },
});
