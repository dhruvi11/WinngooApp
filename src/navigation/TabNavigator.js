import * as React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DashboardScreen from "../screens/DashboardScreen";
import MyTripScreen from "../screens/TripFolder/MyTripScreen";
import SupportScreen from "../screens/SupportFolder/SupportScreen";
import ProfileScreen from "../screens/ProfileFolder/ProfileScreen";
import images from "../res/imageConstant/images";
import { responsiveScreenWidth } from "../utils/Size";
import colors from "../res/colors/colors";
// import MyTabBar from '../navigation/MyTab'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={images.homeTab}
              style={{
                height: responsiveScreenWidth(7),
                width: responsiveScreenWidth(7),
                tintColor: focused
                  ? colors.tabbarSelectTextXolor
                  : colors.tabbarTextColor,
              }}
            />
          ),
          tabBarActiveTintColor: colors.tabbarSelectTextXolor,
          tabBarInactiveTintColor: colors.tabbarTextColor,
        }}
        name="Home"
        component={DashboardScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={images.tripTab}
              style={{
                height: responsiveScreenWidth(7),
                width: responsiveScreenWidth(7),
                tintColor: focused
                  ? colors.tabbarSelectTextXolor
                  : colors.tabbarTextColor,
              }}
            />
          ),
          tabBarActiveTintColor: colors.tabbarSelectTextXolor,
          tabBarInactiveTintColor: colors.tabbarTextColor,
        }}
        name="Trips"
        component={MyTripScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={images.supportTab}
              style={{
                height: responsiveScreenWidth(7),
                width: responsiveScreenWidth(7),
                tintColor: focused
                  ? colors.tabbarSelectTextXolor
                  : colors.tabbarTextColor,
              }}
            />
          ),
          tabBarActiveTintColor: colors.tabbarSelectTextXolor,
          tabBarInactiveTintColor: colors.tabbarTextColor,
        }}
        name="Support"
        component={SupportScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={images.profileTab}
              style={{
                height: responsiveScreenWidth(7),
                width: responsiveScreenWidth(7),
                tintColor: focused
                  ? colors.tabbarSelectTextXolor
                  : colors.tabbarTextColor,
              }}
            />
          ),
          tabBarActiveTintColor: colors.tabbarSelectTextXolor,
          tabBarInactiveTintColor: colors.tabbarTextColor,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
