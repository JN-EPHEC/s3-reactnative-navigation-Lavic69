import { Drawer } from 'expo-router/drawer';
import { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          title: 'Courses',
          drawerLabel: 'Courses',
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => {/* Drawer toggle handled automatically */}}
            >
              <Ionicons name="menu" size={24} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: 'My Profile',
          title: 'My Profile',
        }}
      />
    </Drawer>
  );
}
