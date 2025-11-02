import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useRoute, RouteProp } from '@react-navigation/native';
import { CourseStackParamList } from '../../types/navigation';

type RouteParams = {
  courseId: string;
  title: string;
  description: string;
};

export default function CourseDetailScreen() {
  const route = useRoute<RouteProp<CourseStackParamList, 'CourseDetail'>>();
  const { title, description } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
});