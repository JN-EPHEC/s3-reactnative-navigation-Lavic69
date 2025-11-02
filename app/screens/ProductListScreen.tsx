import React from "react";
import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ShopStackParamList } from "../_layout";

type Props = NativeStackScreenProps<ShopStackParamList, "ProductList">;

const PRODUCTS = [
  {
    id: "1",
    name: "MacBook Pro",
    price: "$1299",
    description: "A powerful laptop for professionals. Features M2 chip and up to 20 hours battery life.",
  },
  {
    id: "2",
    name: "Magic Mouse",
    price: "$79",
    description: "Wireless mouse with Multi-Touch surface. Perfect for macOS gestures.",
  },
  {
    id: "3",
    name: "Magic Keyboard",
    price: "$99",
    description: "Wireless keyboard with numeric keypad. Long battery life and comfortable typing experience.",
  },
];

export default function ProductListScreen({ navigation }: Props) {
  const renderItem = ({ item }: { item: typeof PRODUCTS[number] }) => (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.itemPressed]}
      onPress={() =>
        navigation.navigate("ProductDetail", {
          productId: item.id,
          name: item.name,
          price: item.price,
          description: item.description,
        })
      }
    >
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  item: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemPressed: {
    opacity: 0.7,
  },
  productName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    color: "#007AFF",
  },
});