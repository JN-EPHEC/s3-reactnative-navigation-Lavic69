import "react-native-reanimated";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostListScreen from "./screens/PostListScreen";
import PostDetailScreen from "./screens/PostDetailScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CartScreen from "./screens/CartScreen";

export type RootStackParamList = {
  PostList: undefined;
  PostDetail: { postId: string; title: string; content: string };
};

export type ShopStackParamList = {
  ProductList: undefined;
  ProductDetail: {
    productId: string;
    name: string;
    price: string;
    description: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const ShopStack = createNativeStackNavigator<ShopStackParamList>();
const Tab = createBottomTabNavigator();

function BlogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PostList"
        component={PostListScreen}
        options={{ title: "Posts" }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{ title: "Post Detail" }}
      />
    </Stack.Navigator>
  );
}

function ShopStackScreen() {
  return (
    <ShopStack.Navigator>
      <ShopStack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: "Shop" }}
      />
      <ShopStack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </ShopStack.Navigator>
  );
}

export default function RootLayout() {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName:
            | "home"
            | "home-outline"
            | "book"
            | "book-outline"
            | "person"
            | "person-outline"
            | "settings"
            | "settings-outline"
            | "help-outline";

          switch (route.name) {
            case "Home":
              iconName = focused ? "home" : "home-outline";
              break;
            case "Blog":
              iconName = focused ? "book" : "book-outline";
              break;
            case "Profile":
              iconName = focused ? "person" : "person-outline";
              break;
            case "Settings":
              iconName = focused ? "settings" : "settings-outline";
              break;
            default:
              iconName = "help-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen 
        name="Shop" 
        component={ShopStackScreen}
        options={{ 
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? "cart" : "cart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? "basket" : "basket-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen 
        name="Blog" 
        component={BlogStack}
        options={{ 
          title: "Blog",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons 
              name={focused ? "book" : "book-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
