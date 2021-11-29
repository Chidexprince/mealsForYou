/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Search } from "../../../feature/restaurants/components/search"
import { Spacer } from "../../../components/spacer/spacer";
import { RestaurantInfoCard } from "../components/restaurant-info-card";

import { SafeArea } from "../../../components/utils/safe-area";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";


const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(navigation)

  return (
    <>
      <SafeArea>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={Colors.red400} />
          </LoadingContainer>
        )}
          <Search />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetails")}>
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </SafeArea>
    </>
  );
};
