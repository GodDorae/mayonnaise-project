import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoarding from './pages/login/OnBoarding';
import CheckboxForAgreement from './pages/login/CheckboxForAgreement';
import {RootStackParamList} from './types/screenPropsType';
import {Screens} from './types/screenPropsType';
import AgreementDetail from './pages/login/AgreementDetail';
import Nickname from './pages/login/Nickname';
import RegionPreference from './pages/login/RegionPreference';
import ObjPreference from './pages/login/ObjPreference';
import WorkspacePreference from './pages/login/WorkspacePreference';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="OnBoarding">
        <RootStack.Screen
          name={Screens.OnBoarding}
          component={OnBoarding}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={Screens.CheckboxForAgreement}
          component={CheckboxForAgreement}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={Screens.AgreementDetail}
          component={AgreementDetail}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={Screens.Nickname}
          component={Nickname}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={Screens.RegionPreference}
          component={RegionPreference}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={Screens.ObjPreference}
          component={ObjPreference}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name={Screens.WorkspacePreference}
          component={WorkspacePreference}
          options={{
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
