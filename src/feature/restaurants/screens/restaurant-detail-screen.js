/* eslint-disable prettier/prettier */
import React, { useState } from "react";

import { RestaurantInfoCard } from "../components/restaurant-info-card";
import { SafeArea } from "../../../components/utils/safe-area";

import { List } from "react-native-paper";
import { ScrollView } from "react-native";


export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);


  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice"/>}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
            <List.Item  title="Toasted Bread and Tea" />
            <List.Item title="Sandwich" />
            <List.Item title="Coke" />
        </List.Accordion>

        <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger"/>}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
        >
            <List.Item title="Burger w/ Fries" />
            <List.Item title="White Soup and eba" />
            <List.Item title="Fried rice" />
        </List.Accordion>

        <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant"/>}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
            <List.Item title="Jollof Spaghetti" />
            <List.Item title="Fried Yam with sauce" />
            <List.Item title="Beans" />
        </List.Accordion>

        <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup"/>}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Coke" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};