import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './main/home/Home';
import Magazine from './main/magazine/Magazine';
import My from './main/my/My';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="Magazine"
        component={Magazine}
        options={{headerShown: false}}
      />
      <BottomTab.Screen
        name="My"
        component={My}
        options={{headerShown: false}}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
