/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components/native";
import { View, Image } from "react-native";
import { Card } from "react-native-paper";

import { Text } from "../../../components/typography/typography";
import { Spacer } from "../../../components/spacer/spacer";

const RestaurantCard = styled(Card)`
  background-color:${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

const Star = styled(Image)`
  width: ${(props) => props.theme.sizes[1]};
  height: ${(props) => props.theme.sizes[1]};
  margin-right:  ${(props) => props.theme.sizes[0]};
`;

const Status = styled(Image)`
  width: ${(props) => props.theme.sizes[2]};
  height: ${(props) => props.theme.sizes[2]};
  
`;

const RestaurantType = styled(Image)`
  width: ${(props) => props.theme.sizes[2]};
  height: ${(props) => props.theme.sizes[2]};
`;



export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "My Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"],
    address = "23 oldo street",
    isOpenNow = true,
    rating = 3,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <Star key={Math.random()} source={require("../../../../assets/star.png")} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && <Status source={require("../../../../assets/close.png")} />}
            <Spacer position="left" size="large" >
              {isOpenNow && <Status source={require("../../../../assets/open.png")} />}
            </Spacer>
            <Spacer position="left" size="large" />
            <Spacer position="top" size="small">
              <RestaurantType source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="caption">{address}</Text>
      </Info>

    </RestaurantCard>
  )
};
