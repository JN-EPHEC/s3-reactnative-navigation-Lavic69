import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function WishlistScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your wishlist is empty.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});