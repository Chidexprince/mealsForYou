import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View } from "react-native";
import { Search } from "../../../components/search/search";
import { RestaurantInfo } from "../components/restaurant-info";

export const RestaurantScreen = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Search />
        </View>
        <View style={styles.restaurantInfoContainer}>
          <RestaurantInfo />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#fff",
    padding: 10,
  },
  searchContainer: {
    padding: 16,
  },
  restaurantInfoContainer: {
    flex: 1,
    padding: 16,
  },
});
