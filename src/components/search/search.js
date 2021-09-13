import React from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

export const Search = () => {
  return (
    <View>
      <Searchbar style={styles.searchInput} placeholder="Search City" />
    </View>
  );
};

const styles = StyleSheet.create({
  searchInput: {
    borderRadius: 4,
    height: 50,
  },
});
