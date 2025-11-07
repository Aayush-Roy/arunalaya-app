
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { offers } from '../data/mockData';

export default function OffersScreen() {
  const copyCode = (code) => {
    // In a real app use Clipboard.setStringAsync(code)
    Alert.alert("Copied!", `Promo code "${code}" copied to clipboard.`);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header */}
        <LinearGradient colors={['#F88310', '#E86E00']} style={styles.header}>
          <Text style={styles.headerTitle}>Special Offers 🎉</Text>
          <Text style={styles.headerSubtitle}>Save more on your bookings</Text>
        </LinearGradient>

        {/* Offer Cards */}
        {offers.map((offer) => (
          <LinearGradient
            key={offer.id}
            colors={['#262626', '#1b1b1b']}
            style={styles.offerCard}
          >
            {/* Glow background */}
            <View style={styles.decorGlow} />

            {/* Discount Badge */}
            <LinearGradient
              colors={['#F88310', '#FF9F43']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.discountBadge}
            >
              <Text style={styles.discountText}>{offer.discount}</Text>
            </LinearGradient>

            {/* Offer Content */}
            <View style={styles.offerContent}>
              <Text style={styles.offerTitle}>{offer.title}</Text>
              <Text style={styles.validText}>Valid till {offer.validTill}</Text>

              <View style={styles.codeContainer}>
                <View style={styles.codeBox}>
                  <Text style={styles.codeLabel}>Use Code</Text>
                  <Text style={styles.codeText}>{offer.code}</Text>
                </View>

                <TouchableOpacity
                  style={styles.copyButton}
                  onPress={() => copyCode(offer.code)}
                  activeOpacity={0.8}
                >
                  <LinearGradient
                    colors={['#F88310', '#E86E00']}
                    style={styles.copyGradient}
                  >
                    <Ionicons name="copy-outline" size={20} color="#fff" />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        ))}

        {/* Terms & Conditions */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsTitle}>Terms & Conditions</Text>
          <Text style={styles.termsText}>• Offers are valid for a limited period only</Text>
          <Text style={styles.termsText}>• Cannot be combined with other offers</Text>
          <Text style={styles.termsText}>• Applicable on first booking only (for FIRST50)</Text>
          <Text style={styles.termsText}>• Standard booking terms apply</Text>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141413',
  },
  header: {
    padding: 25,
    paddingBottom: 40,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#F88310',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#fff9',
  },
  offerCard: {
    marginHorizontal: 20,
    marginVertical: 12,
    borderRadius: 16,
    padding: 20,
    position: 'relative',
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: '#3A3A3A',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  discountBadge: {
    position: 'absolute',
    top: 15,
    right: 15,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 18,
  },
  discountText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  offerContent: {
    paddingRight: 80,
  },
  offerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
  },
  validText: {
    fontSize: 13,
    color: '#bbb',
    marginBottom: 15,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  codeBox: {
    flex: 1,
    backgroundColor: '#141413',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F88310',
    borderStyle: 'dashed',
  },
  codeLabel: {
    fontSize: 11,
    color: '#aaa',
    marginBottom: 3,
  },
  codeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F88310',
    letterSpacing: 1,
  },
  copyButton: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  copyGradient: {
    width: 45,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decorGlow: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#F88310',
    opacity: 0.07,
    top: -40,
    left: -30,
  },
  termsContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#1E1E1D',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2A2A29',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
  },
  termsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  termsText: {
    fontSize: 13,
    color: '#999',
    marginBottom: 8,
    lineHeight: 20,
  },
});
