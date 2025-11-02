import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Lavic</Text>
      <Text style={styles.username}>@LAVIC69</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 8,
  },
  username: {
    fontSize: 18,
    color: "#666",
  },
});