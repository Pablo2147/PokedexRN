import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import {Tab1Navigation} from './Tab1Navigation';
import {Tab2Navigation} from './Tab2Navigation';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856D6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'android' ? 10 : 0,
        },
        tabBarStyle: {
          opacity: 0.95,
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 65,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Tab1Navigation}
        options={{
          tabBarLabel: 'List',
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: Platform.OS === 'ios' ? 0 : 5,
          },
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Seach"
        component={Tab2Navigation}
        options={{
          tabBarLabel: 'Search',
          tabBarLabelStyle: {
            fontSize: 14,
            marginBottom: Platform.OS === 'ios' ? 0 : 5,
          },
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
