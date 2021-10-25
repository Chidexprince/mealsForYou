import React from "react";
import { SafeAreaView, StatusBar, View, FlatList } from "react-native";
import styled from "styled-components/native";
import { Search } from "../../../components/search/search";
import { Spacer } from "../../../components/spacer/spacer";
import { RestaurantInfoCard } from "../components/restaurant-info-card";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {
  return (
    <>
      <SafeArea>
        <SearchContainer>
          <Search />
        </SearchContainer>
        <RestaurantList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
          renderItem={() => (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard />
            </Spacer>
          )}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
