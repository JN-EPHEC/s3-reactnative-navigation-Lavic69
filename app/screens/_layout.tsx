import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CourseStackParamList } from '../../types/navigation';
import CourseListScreen from './CourseListScreen';
import CourseDetailScreen from './CourseDetailScreen';

const Stack = createNativeStackNavigator<CourseStackParamList>();

export default function CourseLayout() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CourseList"
        component={CourseListScreen}
        options={{ title: 'All Courses' }}
      />
      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
    </Stack.Navigator>
  );
}