/* eslint-disable prettier/prettier */
import React from "react";

import { Text } from "../../../components/typography/typography";
import { Spacer } from "../../../components/spacer/spacer";

import {
  Rating,
  RestaurantCard,
  RestaurantCardCover,
  RestaurantType,
  Info,
  Section,
  SectionEnd,
  Star,
  Status,
} from "./restaurant-info-card.styles";


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
