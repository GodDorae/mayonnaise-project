import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackNavigationProps} from '../App';

export type IntroStackParamList = {
  Home: undefined;
  Magazine: undefined;
  My: undefined;
};

type NavigationProps<T extends keyof IntroStackParamList = 'Home'> =
  NativeStackNavigationProp<IntroStackParamList, T>;

export type IntroStackNavigationProps<
  T extends keyof IntroStackParamList = 'Home',
> = CompositeNavigationProp<
  NavigationProps<T>,
  RootStackNavigationProps<'BottomTabNavigator'>
>;
