/* eslint-disable prettier/prettier */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { RestaurantNavigator } from "./restaurant.navigation";
import { SafeArea } from "../../components/utils/safe-area";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const Settings = () => (
    <SafeArea>
        <Text>Settings</Text>
    </SafeArea>
);

const Map = () => (
    <SafeArea>
        <Text>Map</Text>
    </SafeArea>
);

const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
        headerShown: false,
        tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
        ),
        tabBarActiveTintColor : "tomato",
        tabBarInactiveTintColor: "gray",
/*         tabBarStyle: [
          {
            display: "flex"
          },
          null
        ], */
    };
};


export const AppNavigation = () => (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={createScreenOptions}
/*             tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
            }} */

        >
            <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    </NavigationContainer>
);