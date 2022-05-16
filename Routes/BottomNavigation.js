import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyShifts from '../Screen/MyShifts';
import AvailableShift from '../Screen/AvailableShifts';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarInactiveBackgroundColor:'#F1F4F8',
      tabBarActiveBackgroundColor:'#F1F4F8',
      tabBarLabelPosition: "beside-icon",
      tabBarLabelStyle: {
        fontWeight: "700",
        fontSize: 15
      },
      tabBarIconStyle:{
        display:'none'
      }
    }}>
      <Tab.Screen name="My shifts" component={MyShifts} options={{headerShown:false}}/>
      <Tab.Screen name="Available shifts" component={AvailableShift} options={{headerShown:false}}/>
    </Tab.Navigator>
  )
}

export default BottomNavigation