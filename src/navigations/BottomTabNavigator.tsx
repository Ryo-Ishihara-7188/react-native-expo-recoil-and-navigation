import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StackNavigators from './StackNavigators';

const Tab = createMaterialBottomTabNavigator();

export function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'black' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Feather name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={StackNavigators}
                options={{
                    tabBarLabel: 'Alert',
                    tabBarIcon: ({ color }) => (
                        <Feather name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}