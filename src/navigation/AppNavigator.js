import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import  HomeScreen  from '../screens/HomeScreen'
import  ProfileScreen  from '../screens/ProfileScreen'
import  MapScreen  from '../screens/MapScreen'
import  BookingScreen  from '../screens/BookingScreen'
import  ReviewScreen  from '../screens/ReviewScreen'

const Tab = createBottomTabNavigator();

export default function AppNavigator(){

    return <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen}/>
            <Tab.Screen name="ProfileScreen" component={ProfileScreen}/>
            <Tab.Screen name="MapScreen" component={MapScreen}/>
            <Tab.Screen name="BookingScreen" component={BookingScreen}/>
            <Tab.Screen name="ReviewScreen" component={ReviewScreen}/>
        </Tab.Navigator>
        
    </NavigationContainer>;
}