import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import BottomTabNavigator from './pages/BottomTabNavigator';
import IntroNavigator from './pages/IntroNavigator';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export type RootStackParamList = {
  default: undefined;
  IntroNavigator: undefined;
  BottomTabNavigator: undefined;
};

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default',
> = NativeStackNavigationProp<RootStackParamList, T>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FunctionComponent = () => {
  const googleSigninConfigure = () => {
    GoogleSignin.configure({
      webClientId:
        '1092441383416-h5kff2dbcm3hc0qvheaqe9uja2j26cu0.apps.googleusercontent.com',
    });
  };

  useEffect(() => {
    googleSigninConfigure();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IntroNavigator"
          component={IntroNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
