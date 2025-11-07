
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CategoryList({ categories, onCategoryPress }) {
  const renderIcon = (category) => {
    switch (category.type) {
      case 'Ionicons':
        return <Ionicons name={category.icon} size={32} color="#F88310" />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={category.icon} size={32} color="#F88310" />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Categories</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.category}
            onPress={() => onCategoryPress(category)}
          >
            {renderIcon(category)}
            <Text style={styles.name}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingHorizontal: 15,
  },
  category: {
    alignItems: 'center',
    marginHorizontal: 8,
    backgroundColor: '#1F1F1E',
    borderRadius: 12,
    padding: 15,
    width: 100,
    borderWidth: 1,
    borderColor: '#2A2A29',
  },
  name: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
  },
});
