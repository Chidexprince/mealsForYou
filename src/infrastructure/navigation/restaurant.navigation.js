/* eslint-disable prettier/prettier */
import React from "react";
import { Text } from "react-native";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantScreen } from "../../feature/restaurants/screens/restaurant-screen";

const RestaurantStack = createStackNavigator();

/* Creating a Restaurant Navigation to handle Restaurant List and Details  */

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
     screenOptions ={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
     }}
    >
      <RestaurantStack.Screen
        name="Restaurant"
        component={RestaurantScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={() => <Text>Restaurant Details</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
