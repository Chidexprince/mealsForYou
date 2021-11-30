/* eslint-disable prettier/prettier */
import React from "react";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantScreen } from "../../feature/restaurants/screens/restaurant-screen";
import { RestaurantDetailScreen } from "../../feature/restaurants/screens/restaurant-detail-screen";

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
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
