import { NavigatorScreenParams } from '@react-navigation/native';

export type RootDrawerParamList = {
  Courses: undefined;
  Profile: undefined;
};

export type CoursesTabParamList = {
  AllCourses: undefined;
  Wishlist: undefined;
};

export type CourseStackParamList = {
  CourseList: undefined;
  CourseDetail: {
    courseId: string;
    title: string;
    description: string;
  };
};