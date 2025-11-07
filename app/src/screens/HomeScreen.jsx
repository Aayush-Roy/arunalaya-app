
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import BannerSlider from '../components/BannerSlider';
import CategoryList from '../components/CategoryList';
import ServiceCard from '../components/ServiceCard';
import { banners, categories } from '../data/mockData';
import axios from 'axios';
import { BASE_URL } from '../utils/utilities';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesData, setServicesData] = useState([]); // store from MongoDB
  const [filteredServices, setFilteredServices] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [user, setUser] = useState(null);
  const[isLoggedIn,setIsLoggedIn] = useState(false);

  // const BASE_URL = 'http://192.168.1.33:5000/api/services';



  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        // if (!token) {
        //   Alert.alert('Please login first');
        //   navigation.navigate('Login');
        //   return;
        // }
        const response = await axios.get(`${BASE_URL}/auth/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsLoggedIn(true)
        setUser(response.data.user);
      } catch (err) {
        console.error('Error fetching user:', err);
        Alert.alert('Error', 'Unable to load profile');
      } finally {
        // setLoading(false);
      }
    };

    fetchUser();
  }, []);


  const getAllServices = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/services`);
      // assuming your backend returns something like { services: [...] }
      setServicesData(response.data); 
      setFilteredServices(response.data);
    } catch (err) {
      console.log('Error fetching services:', err);
    }
  };

  useEffect(() => {
    getAllServices();
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredServices(servicesData);
    } else {
      const filtered = servicesData.filter(
        (service) =>
          service.title.toLowerCase().includes(text.toLowerCase()) ||
          service.category.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredServices(filtered);
    }
  };

  const handleCategoryPress = (category) => {
    const filtered = servicesData.filter(
      (service) => service.category === category.name
    );
    setFilteredServices(filtered);
  };

  return (
    <LinearGradient colors={['#141413', '#0f0f0e']} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            {isLoggedIn ? <Text style={styles.greeting}>Hello, {user?.name || "user"} 👋</Text> :<Text style={styles.greeting}>Discover</Text> }
            
            <Text style={styles.subGreeting}>Discover wellness. Feel better.</Text>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="notifications-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <LinearGradient
          colors={isFocused ? ['#2A2A29', '#1F1F1E'] : ['#1C1C1B', '#1F1F1E']}
          style={[styles.searchContainer, isFocused && { borderColor: '#F88310' }]}
        >
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search services..."
            placeholderTextColor="#666"
            value={searchQuery}
            onChangeText={handleSearch}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </LinearGradient>

        {/* Banners */}
        <View style={styles.bannerWrapper}>
          <BannerSlider banners={banners} />
        </View>

        {/* Categories */}
        <CategoryList categories={categories} onCategoryPress={handleCategoryPress} />

        {/* Services */}
        <View style={styles.servicesHeader}>
          <Text style={styles.sectionTitle}>Available Services</Text>
          {searchQuery !== '' && (
            <Text
              style={styles.clearFilter}
              onPress={() => {
                setSearchQuery('');
                setFilteredServices(servicesData);
              }}
            >
              Clear
            </Text>
          )}
        </View>

        {/* Service List */}
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <ServiceCard
              key={service._id}
              service={service}
              onPress={() => navigation.navigate('ServiceDetails', { service })}
            />
          ))
        ) : (
          <View style={styles.noResults}>
            <Ionicons name="sad-outline" size={40} color="#666" />
            <Text style={styles.noResultsText}>No services found</Text>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingHorizontal: 20,
    paddingTop:20,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: { fontSize: 26, fontWeight: 'bold', color: '#fff' },
  subGreeting: { fontSize: 14, color: '#999', marginTop: 4 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 14,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#2A2A29',
    backgroundColor: 'rgba(31,31,30,0.8)',
  },
  searchIcon: { marginRight: 10 },
  searchInput: { flex: 1, color: '#fff', paddingVertical: 12, fontSize: 15 },
  bannerWrapper: { marginBottom: 25 },
  servicesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  sectionTitle: { fontSize: 20, fontWeight: '700', color: '#fff' },
  clearFilter: { color: '#F88310', fontSize: 14, fontWeight: '600' },
  noResults: { padding: 40, alignItems: 'center' },
  noResultsText: { color: '#999', fontSize: 16, marginTop: 8 },
});
