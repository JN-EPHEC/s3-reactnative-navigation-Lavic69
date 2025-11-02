import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CourseStackParamList } from '../../types/navigation';

const courses = [
  {
    id: '1',
    title: 'Intro to React Native',
    description: 'Learn the fundamentals of building mobile apps with React Native.',
  },
  {
    id: '2',
    title: 'Advanced JavaScript',
    description: 'Master advanced JavaScript concepts and modern ES6+ features.',
  },
  {
    id: '3',
    title: 'UI/UX for Developers',
    description: 'Learn essential UI/UX principles for creating better user experiences.',
  },
];

type Course = {
  id: string;
  title: string;
  description: string;
};

type Props = {
  navigation: NativeStackNavigationProp<CourseStackParamList, 'CourseList'>;
};

export default function CourseListScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<CourseStackParamList>>();

  const renderItem = ({ item }: { item: Course }) => (
    <Pressable
      style={styles.courseItem}
      onPress={() =>
        navigation.navigate('CourseDetail', {
          courseId: item.id,
          title: item.title,
          description: item.description,
        })
      }
    >
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseDescription}>{item.description}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
  },
  courseItem: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
  },
});