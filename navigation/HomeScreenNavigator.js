import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { ICONS } from "../constants/Constants";
import { RFValue } from "react-native-responsive-fontsize";

import ShopScreen from "../screens/HomeActionMenuScreens/ShopScreen";
import MentorsScreen from "../screens/HomeActionMenuScreens/MentorsScreen";

import MentorStack from "./Stacks/MentorStack";
import ShopStack from "./Stacks/ShopStack";
import BookingStack from "./Stacks/BookingStack";

import ProfileScreen from "../screens/HomeActionMenuScreens/ProfileScreen";
import MenuDrawerNavigator from "./MenuDrawerNavigator";
import useDynamicStyling from "../customhooks/useDynamicStyling";

const Tab = createBottomTabNavigator();

function HomeScreenNavigator() {
  const { DynamicStyles } = useDynamicStyling();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#B0C929",
        tabBarInactiveTintColor: "#909090",
        tabBarStyle: { backgroundColor: "#000" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={MenuDrawerNavigator}
        options={{
          tabBarLabelStyle: {
            fontFamily: "MontserratR",
            fontSize: RFValue(12, 667),
            fontWeight: "500",
            lineHeight: DynamicStyles(15),
          },
          tabBarIcon: ({ color }) => (
            <Image source={ICONS.home} style={{ tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookingStack}
        options={{
          tabBarLabel: "Book",
          tabBarLabelStyle: {
            fontSize: RFValue(12, 667),
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={ICONS.calendar}
              style={{
                tintColor: focused ? "#B0C929" : "#047893",
                resizeMode: "contain",
                width: 25,
                height: 25,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Mentor"
        component={MentorStack}
        options={{
          tabBarLabelStyle: {
            fontFamily: "MontserratR",
            fontSize: RFValue(12, 667),
            fontWeight: "500",
            lineHeight: DynamicStyles(15),
          },
          tabBarIcon: ({ color }) => (
            <Image source={ICONS.profile} style={{ tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          tabBarLabelStyle: {
            fontFamily: "MontserratR",
            fontSize: RFValue(12, 667),
            fontWeight: "500",
            lineHeight: DynamicStyles(15),
          },
          tabBarIcon: ({ color }) => (
            <Image source={ICONS.exercise} style={{ tintColor: color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabelStyle: {
            fontFamily: "MontserratR",
            fontSize: RFValue(12, 667),
            fontWeight: "500",
            lineHeight: DynamicStyles(15),
          },
          tabBarIcon: ({ color }) => (
            <Image source={ICONS.dashboard} style={{ tintColor: color }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default HomeScreenNavigator;
