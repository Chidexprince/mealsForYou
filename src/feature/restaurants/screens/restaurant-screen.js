import React, { useContext } from "react";
import { SafeAreaView, StatusBar, View, FlatList } from "react-native";
import styled from "styled-components/native";
import { Search } from "../../../components/search/search";
import { Spacer } from "../../../components/spacer/spacer";
import { RestaurantInfoCard } from "../components/restaurant-info-card";

import { SafeArea } from "../../../components/utils/safe-area";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(restaurants);
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
